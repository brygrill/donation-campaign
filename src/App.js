import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';

import DonationHeader from './DonationHeader';
import DonationProgress from './DonationProgress';
import DonationForm from './DonationForm';
import DonationList from './DonationList';

import { ref, addDonation, formatData } from './firebase';

const Wrap = styled.div`
  padding: 1rem 0;
`;
const App = () => {
  const [session, setSession] = useState({
    data: null,
    formatted: null,
    loading: true,
    error: null,
  });

  const handleDonate = async (name, amount) => {
    try {
      await addDonation(name, amount);
      return { success: true, error: false };
    } catch (error) {
      return { success: false, error };
    }
  };

  const onMount = () => {
    ref.on('value', snapshot => {
      const data = snapshot.val();
      setSession({
        loading: false,
        error: false,
        data,
        formatted: formatData(data),
      });
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
        <DonationProgress raised={session.formatted.total} />
        <DonationForm
          handleSubmit={handleDonate}
          names={session.formatted.names}
        />
        <DonationList donations={session.formatted.list} />
      </Container>
    </Wrap>
  );
};

export default App;
