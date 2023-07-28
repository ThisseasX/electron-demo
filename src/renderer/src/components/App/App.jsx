import React, { useState } from 'react';
import { useAsyncEffect } from 'utils';
import classes from './style.module.css';

const App = () => {
  const [dogs, setDogs] = useState([]);

  useAsyncEffect(async () => {
    const dogs = await window.api.dogs.getDogs();
    setDogs(dogs);
  }, []);

  const handleDeleteDogs = async () => {
    const dogs = await window.api.dogs.deleteDogs();
    setDogs(dogs);
  };

  const handleAddDog = async () => {
    const dogs = await window.api.dogs.addDog({
      id: Date.now(),
      name: 'Buddy',
      breed: 'Golden Retriever',
      age: 5,
    });

    setDogs(dogs);
  };

  const handleSendEmail = () => {
    window.api.email.sendEmail();
  };

  return (
    <div className={classes.root}>
      <div>
        <button onClick={handleDeleteDogs}>Delete Dogs</button>
        <button onClick={handleAddDog}>Add Dog</button>
        <button onClick={handleSendEmail}>Send Email</button>
      </div>

      <div className={classes.dogs}>
        {dogs.map((dog) => (
          <div key={dog.id} className={classes.dog}>
            <div>ID: {dog.id}</div>
            <div>Name: {dog.name}</div>
            <div>Breed: {dog.breed}</div>
            <div>Age: {dog.age}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
