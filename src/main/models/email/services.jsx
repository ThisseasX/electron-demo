import nodemailer from 'nodemailer';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const App = () => <div>Hello World</div>;

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
    html: renderToStaticMarkup(<App />),
  });
};
