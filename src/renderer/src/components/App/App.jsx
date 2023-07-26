import React, { useState } from 'react';
import { useAsyncEffect } from 'utils';

const App = () => {
  const [file, setFile] = useState('');

  useAsyncEffect(async () => {
    try {
      const file = await window.api.getFile('index.js');
      setFile(file);
    } catch {
      setFile('error');
    }
  }, []);

  return (
    <div>
      <div>
        <a
          target="_blank"
          href="https://github.com/alex8088/electron-vite"
          rel="noopener noreferrer"
        >
          Getting Help 2
        </a>
      </div>

      <div>{file}</div>
    </div>
  );
};

export default App;
