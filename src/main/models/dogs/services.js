import path from 'path';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const adapter = new JSONFile(path.join(__dirname, 'db.json'));
const db = new Low(adapter, {});

export const getDogs = () => db.read();

export const addDog = (_, dog) => {
  db.data.dogs.push(dog);
  return db.write();
};
