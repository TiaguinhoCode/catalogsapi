export interface InitSession {
  status: 'initialized' | 'connected' | 'error';
  qr?: string;
  message?: string;
}
