// Nest
import { Injectable } from '@nestjs/common';

// Bibliotecas
import * as wppconnect from '@wppconnect-team/wppconnect';
import { FileTokenStore } from '@wppconnect-team/wppconnect/dist/token-store';

export interface SessionResult {
  status: 'initialized' | 'connected' | 'error';
  qr?: string;
  message?: string;
}

interface ClientMap {
  [sessionName: string]: wppconnect.Whatsapp;
}

// wppconnect.defaultLogger.level = 'silly';
// wppconnect.defaultLogger.transports.forEach((t) => (t.silent = true));

@Injectable()
export class WppsService {
  private clients: ClientMap = {};
  private tokenStore = new FileTokenStore({ path: './tokens' });

  private async createClient(
    sessionName: string,
    options: Partial<wppconnect.CreateConfig> = {},
  ) {
    const client = await wppconnect.create({
      session: sessionName,
      tokenStore: this.tokenStore,
      headless: true,
      ...options,
    });
    this.clients[sessionName] = client;
    return client;
  }

  async initSessionByPhone(
    sessionName: string,
    phoneNumber: string,
  ): Promise<SessionResult> {
    return new Promise<SessionResult>((resolve, reject) => {
      wppconnect
        .create({
          session: sessionName,
          phoneNumber: phoneNumber,
          tokenStore: this.tokenStore,
          headless: true,
          catchLinkCode: (linkCode) => {
            resolve({ status: 'initialized', message: linkCode });
          },
        })
        .then((client) => {
          this.clients[sessionName] = client;
        })
        .catch((err: any) => {
          reject({ status: 'error', message: err.message });
        });
    });
  }

  async listChats(
    sessionName: string,
    options?: {
      count?: number;
      onlyUsers?: boolean;
      onlyGroups?: boolean;
      onlyWithUnread?: boolean;
    },
  ) {
    let client = this.clients[sessionName];
    if (!client) {
      client = await this.createClient(sessionName);
    }
    const chats = await client.listChats({
      count: options?.count,
      onlyUsers: options?.onlyUsers,
      onlyGroups: options?.onlyGroups,
      onlyWithUnreadMessage: options?.onlyWithUnread,
    });
    return chats;
  }
}
