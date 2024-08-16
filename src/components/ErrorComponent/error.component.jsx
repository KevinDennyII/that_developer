import React from 'react';

function ErrorComponent() {

  return (
    <div style={{
      textAlign: 'center',
      fontWeight: '700'
    }}>
      <p>Oops! This page doesn't exist.</p>
      <p>Check the URL to make sure you doing to the right website address</p>
    </div>
  );
};

export default ErrorComponent;
