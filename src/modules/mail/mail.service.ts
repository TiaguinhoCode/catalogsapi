// Nest
import { Injectable } from '@nestjs/common';

// Bibliotecas
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD_GMAIL,
      },
    });
  }

  async sendEmail(email: string, subject: string, msg: string) {
    await this.transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: subject,
      html: msg,
    });
  }
}
