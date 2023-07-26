import path from 'path';
import { readFileAsync } from 'utils';

export const getFile = (_, name) =>
  readFileAsync(path.join(__dirname, name), 'utf-8');
