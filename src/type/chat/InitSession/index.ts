export interface InitSessionResult {
  status: 'connected' | 'error' | 'initialized' | 'pending' | 'loading';
  qr?: string;
  message?: string;
}
