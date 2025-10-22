export interface InitSessionResult {
  qr?: string; // base64 ou URL do QR
  status: 'initialized' | 'connected' | 'error';
  message?: string;
}
