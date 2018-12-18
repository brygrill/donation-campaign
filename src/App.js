import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';

import DonationHeader from './DonationHeader';
import DonationProgress from './DonationProgress';
import DonationForm from './DonationForm';
import DonationList from './DonationList';

import { ref, addDonation } from './firebase';

const Wrap = styled.div`
  padding: 1rem 0;
`;
const App = () => {
  const [session, setSession] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const handleDonate = async () => {
    try {
      const newDonation = await addDonation();
      console.log(newDonation);
    } catch (error) {
      console.error(error);
    }
  };

  const onMount = () => {
    ref.on('value', snapshot => {
      setSession({ loading: false, error: false, data: snapshot.val() });
    });
  };

  useEffect(() => {
    onMount();
  }, []);

  if (session.loading) {
    return <div>Loading...</div>;
  }

  return (
    <Wrap>
      <Container text>
        <DonationHeader />
        <DonationProgress raised={100}/>
        <DonationForm />
        <DonationList donations={session.data} />
      </Container>
    </Wrap>
  );
};

export default App;
