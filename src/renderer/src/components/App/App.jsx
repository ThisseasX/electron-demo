import React, { useEffect, useState } from 'react';
import { useAsyncEffect } from 'utils';
import clsx from 'clsx';
import {
  LiaWindowMinimize,
  LiaWindowMaximize,
  LiaWindowRestore,
  LiaWindowClose,
} from 'react-icons/lia';
import { faker } from '@faker-js/faker';
import classes from './style.module.css';

const App = () => {
  const [dogs, setDogs] = useState([]);
  const [isMaximized, setIsMaximized] = useState(false);

  useAsyncEffect(async () => {
    const dogs = await window.api.dogs.getDogs();
    setDogs(dogs);
  }, []);

  useEffect(() => {
    const detectMazimized = () => {
      if (
        screen.availWidth === window.outerWidth &&
        screen.availHeight === window.outerHeight
      ) {
        setIsMaximized(true);
      } else {
        setIsMaximized(false);
      }
    };

    detectMazimized();

    window.addEventListener('resize', detectMazimized);

    return () => {
      window.removeEventListener('resize', detectMazimized);
    };
  }, []);

  const handleMinimize = () => {
    window.api.window.minimize();
  };

  const handleMaximize = () => {
    if (isMaximized) {
      window.api.window.unmaximize();
      return;
    }

    window.api.window.maximize();
  };

  const handleClose = () => {
    window.api.window.close();
  };

  const handleDeleteDogs = async () => {
    const dogs = await window.api.dogs.deleteDogs();
    setDogs(dogs);
  };

  const handleAddDog = async () => {
    const dogs = await window.api.dogs.addDog({
      id: Date.now(),
      name: faker.person.firstName(),
      breed: faker.animal.dog(),
      age: faker.number.int({ min: 1, max: 10 }),
    });

    setDogs(dogs);
  };

  const handleSendEmail = () => {
    window.api.email.sendEmail();
  };

  return (
    <>
      <div className={clsx(classes.header, classes.glass)}>
        <div className={classes.title}>Dogs</div>

        <div className={classes.controls}>
          <button className={classes.controlContainer} onClick={handleMinimize}>
            <LiaWindowMinimize className={classes.control} />
          </button>

          <button className={classes.controlContainer} onClick={handleMaximize}>
            {isMaximized ? (
              <LiaWindowRestore className={classes.control} />
            ) : (
              <LiaWindowMaximize className={classes.control} />
            )}
          </button>

          <button className={classes.controlContainer} onClick={handleClose}>
            <LiaWindowClose className={classes.control} />
          </button>
        </div>
      </div>

      <div className={classes.root}>
        <div>
          <button onClick={handleAddDog}>Add Dog</button>
          <button onClick={handleDeleteDogs}>Delete Dogs</button>
          <button onClick={handleSendEmail}>Send Email</button>
        </div>

        <div className={classes.dogs}>
          {dogs.map((dog) => (
            <div key={dog.id} className={classes.dog}>
              <div>🐶</div>

              <div>
                <div className={classes.key}>ID:</div>
                <div>{dog.id}</div>
              </div>

              <div>
                <div className={classes.key}>Name:</div>
                <div>{dog.name}</div>
              </div>

              <div>
                <div className={classes.key}>Breed:</div>
                <div>{dog.breed}</div>
              </div>

              <div>
                <div className={classes.key}>Age:</div>
                <div>{dog.age}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
