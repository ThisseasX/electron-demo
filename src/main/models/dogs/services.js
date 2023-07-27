import { db } from 'db';

export const getDogs = () => db.data.dogs;

export const addDog = (_, dog) => {
  db.data.dogs.push(dog);
  return db.write();
};
