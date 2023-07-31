import React from 'react';
import styles from './style.css?inline';

const EmailOne = ({ name, sender, dogs = [] }) => (
  <html>
    <head>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
    </head>
    <body>
      <div>
        <div className="header">
          <h1>Hello {name}!</h1>
        </div>
        <p>You have a new message from {sender}!</p>

        <p>We currently have the following dogs:</p>

        <ul>
          {dogs.map((dog) => (
            <li key={dog.id}>
              {dog.name} ({dog.breed}) - {dog.age} years old
            </li>
          ))}
        </ul>
      </div>
    </body>
  </html>
);

export default EmailOne;
