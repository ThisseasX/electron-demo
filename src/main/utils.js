import { readFile, readdirSync, mkdirSync } from 'fs';
import { promisify } from 'util';

export const readFileAsync = promisify(readFile);

export const createDirIfNotExists = (dir) => {
  try {
    readdirSync(dir);
  } catch {
    mkdirSync(dir);
  }
};
