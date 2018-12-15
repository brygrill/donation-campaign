import React, { useState, useEffect } from 'react';
import { ref, addDonation } from './firebase';

const App = () => {
  useEffect(() => {
    console.log('cDM');
    ref.on('value', snapshot => {
      console.log(snapshot.val());
    });
  }, []);
  return <div>App<button onClick={addDonation}>donate</button></div>;
};

export default App;
