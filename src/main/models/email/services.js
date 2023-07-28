import nodemailer from 'nodemailer';
import pug from 'pug';
import path from 'path';
import template from './template.pug';

const transport = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'stone.boehm@ethereal.email',
    pass: 'wAAZNrQxr4h86gJdUy',
  },
});

export const sendEmail = () => {
  transport.sendMail({
    from: '"Doggo" <dog@dogs.com>',
    to: '"Cat" <cat@cats.com',
    subject: 'Hello Email!',
    html: pug.render(template, {
      filename: path.join(__dirname, 'chunks', 'template.js'),
      name: 'Cat',
      sender: '<b>Doggo</b>',
    }),
  });
};
