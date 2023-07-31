import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { EmailOne } from './index';

const root = document.documentElement;

const DOGS = [
  {
    id: 1,
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: 3,
  },
  {
    id: 2,
    name: 'Charlie',
    breed: 'Labrador',
    age: 5,
  },
];

const html = renderToStaticMarkup(
  <EmailOne name="Cat" sender="Dog" dogs={DOGS} />,
);

root.innerHTML = html;
