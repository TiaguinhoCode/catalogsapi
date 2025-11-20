// Nest
import { Injectable } from '@nestjs/common';

// Bibliotecas
import * as wppconnect from '@wppconnect-team/wppconnect';

@Injectable()
export class WppClientService {
  private client: any;
  private readonly session = 'default-session';

  async createClient(
    catchQR: (qr: string) => void,
    statusFind: (status: string, session: string) => void,
  ) {
    if (this.client && this.client.isConnected) return this.client;

    this.client = await wppconnect.create({
      session: this.session,
      useChrome: true,
      puppeteerOptions: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
      catchQR,
      statusFind,
    });

    return this.client;
  }

  getClient() {
    if (!this.client) throw new Error('Cliente não inicializado.');
    return this.client;
  }
}
