import { db } from 'db';

export const getDogs = () => db.data.dogs;

export const addDog = async (_, dog) => {
  db.data.dogs.push(dog);
  await db.write();

  return db.data.dogs;
};

export const deleteDogs = async () => {
  db.data.dogs = [];
  await db.write();

  return db.data.dogs;
};
