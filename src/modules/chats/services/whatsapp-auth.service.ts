// Nest
import { Injectable, Logger } from '@nestjs/common';

// Services
import { WppClientService } from './whatsapp-client.service';

// Tipagem
import { InitSession } from 'src/type/chat/InitSession';

@Injectable()
export class WppAuthService {
  private readonly logger = new Logger(WppAuthService.name);

  constructor(private clientService: WppClientService) {}

  async initSession(): Promise<InitSession> {
    let qrResolved = false;

    const qrPromise = new Promise<InitSession>((resolve, reject) => {
      this.clientService
        .createClient(
          (base64QrImage) => {
            if (!qrResolved) {
              qrResolved = true;
              resolve({ status: 'initialized', qr: base64QrImage });
            }
          },
          (status, session) => {
            this.logger.log(`Status da sessão ${session}: ${status}`);
          },
        )
        .then((client) => {
          client.onStreamChange((state: string) => {
            if (state === 'CONNECTED' && !qrResolved) {
              qrResolved = true;
              resolve({ status: 'connected' });
            }
          });
        })
        .catch((err) => reject(err));
    });

    try {
      return await qrPromise;
    } catch (err) {
      this.logger.error('Erro ao iniciar sessão WhatsApp', err);
      return { status: 'error', message: err.message };
    }
  }
}
