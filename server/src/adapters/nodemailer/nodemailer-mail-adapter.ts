import nodemailer from 'nodemailer';
import {  MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4204db9bff4bce",
    pass: "0279c5bc3feba8"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Jaque Prestes <jaque_prestes@hotmail.com>',
      subject,
      html: body,
  });
  }
}