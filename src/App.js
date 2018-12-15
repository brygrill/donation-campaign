import React, { useState, useEffect } from 'react';
import { ref } from './firebase';

const App = () => {
  useEffect(() => {
    console.log('cDM');
    ref.on('value', snapshot => {
      console.log(snapshot.val());
    });
  }, []);
  return <div>App</div>;
};

export default App;
