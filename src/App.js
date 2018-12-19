import React, { useState, useEffect } from 'react';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import styled from 'styled-components';

import DonationHeader from './DonationHeader';
import DonationProgress from './DonationProgress';
import DonationForm from './DonationForm';
import DonationList from './DonationList';

import { ref, fetchGoal, addDonation, formatData } from './firebase';

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

  const [goal, setGoal] = useState({
    goal: 0,
    loading: true,
  });

  const handleGoal = async () => {
    const goal = await fetchGoal();
    setGoal({ loading: false, goal });
  };

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

    handleGoal();
  };

  useEffect(() => {
    onMount();
  }, []);

  if (goal.loading) {
    return (
      <Dimmer active page inverted>
        <Loader inverted/>
      </Dimmer>
    );
  }

  return (
    <Wrap>
      <Container text>
        <DonationHeader />
        <DonationProgress
          goal={goal.goal || 750}
          raised={session.formatted.total}
        />
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
