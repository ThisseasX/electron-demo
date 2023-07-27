import React, { useState } from 'react';
import { useAsyncEffect } from 'utils';

const App = () => {
  const [dogs, setDogs] = useState([]);

  useAsyncEffect(async () => {
    try {
      const dogs = await window.api.dogs.getDogs();
      console.log({ dogs });
      setDogs(dogs);
    } catch {
      // empty
    }
  }, []);

  return (
    <div>
      <code>
        <pre>{JSON.stringify(dogs, null, 2)}</pre>
      </code>
    </div>
  );
};

export default App;
