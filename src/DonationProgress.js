import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Progress, Statistic } from 'semantic-ui-react';

const goal = 750;

const DonationProgress = ({ raised }) => {
  return (
    <Segment padded basic textAlign="center">
      <Statistic.Group widths={2}>
        <Statistic>
          <Statistic.Value>{`$${raised}`}</Statistic.Value>
          <Statistic.Label>Raised</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{`$${goal}`}</Statistic.Value>
          <Statistic.Label>Goal</Statistic.Label>
        </Statistic>
      </Statistic.Group>
      <Progress percent={(raised/goal)} autoSuccess indicating />
    </Segment>
  );
};

DonationProgress.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default DonationProgress;
