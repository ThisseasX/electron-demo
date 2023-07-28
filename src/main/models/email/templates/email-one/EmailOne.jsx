import React from 'react';
import styles from './style.css';

const EmailOne = ({ name, sender }) => (
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
      </div>
    </body>
  </html>
);

export default EmailOne;
