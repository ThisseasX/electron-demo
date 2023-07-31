import nodemailer from 'nodemailer';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { EmailOne } from 'email-templates';
import { db } from 'db';

const transport = nodemailer.createTransport({
  service: import.meta.env.MAIN_VITE_EMAIL_SERVICE,
  auth: {
    user: import.meta.env.MAIN_VITE_EMAIL_USER,
    pass: import.meta.env.MAIN_VITE_EMAIL_PASS,
  },
});

export const sendEmail = () => {
  transport.sendMail({
    from: '"Doggo" <dog@dogs.com>',
    to: '"Cat" <thisseasx@gmail.com>',
    subject: 'Hello Email!',
    html: renderToStaticMarkup(
      <EmailOne name="Cat" sender="Doggo" dogs={db.data.dogs} />,
    ),
  });
};
