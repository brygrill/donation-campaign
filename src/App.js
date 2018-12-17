import React, { useEffect } from 'react';
import { ref, addDonation } from './firebase';

const App = () => {
  const handleDonate = () => {
    const donate = addDonation();
    donate
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log('cDM');
    ref.on('value', snapshot => {
      console.log(snapshot.val());
    });
  }, []);
  return (
    <div>
      App<button onClick={handleDonate}>donate</button>
    </div>
  );
};

export default App;
