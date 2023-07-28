import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { EmailOne } from './index';

const root = document.documentElement;

const html = renderToStaticMarkup(<EmailOne name="Cat" sender="Dog" />);

root.innerHTML = html;
