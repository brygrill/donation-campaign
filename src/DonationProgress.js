import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Progress, Statistic } from 'semantic-ui-react';
import styled from 'styled-components';

const goal = 750;

const ProgressWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const DonationProgress = ({ raised }) => {
  return (
    <Segment padded basic textAlign="center">
      <ProgressWrap>
        <Statistic size='small'>
          <Statistic.Value>{`$${raised}`}</Statistic.Value>
          <Statistic.Label>Raised</Statistic.Label>
        </Statistic>
        <Statistic size='small'>
          <Statistic.Value>{`$${goal}`}</Statistic.Value>
          <Statistic.Label>Goal</Statistic.Label>
        </Statistic>
      </ProgressWrap>
      <Progress percent={raised / goal} autoSuccess indicating />
    </Segment>
  );
};

DonationProgress.propTypes = {
  raised: PropTypes.number.isRequired,
};

export default DonationProgress;
