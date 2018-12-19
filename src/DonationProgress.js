import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Progress, Statistic } from 'semantic-ui-react';
import styled from 'styled-components';
import _ from 'lodash';

import Success from './Success';

const goal = 750;

const StatWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -1rem;
`;

const DonationProgress = ({ raised }) => {
  const calc = _.round((raised / goal) * 100);
  const perc = calc > 100 ? 100 : calc;
  return (
    <Segment padded basic textAlign="center">
      {perc >= 100 && (
        <div style={{ paddingBottom: '1rem' }}>
          <Success
            msg="We Did It!"
            gif="https://media.giphy.com/media/HhQBQurwmemRy/giphy.gif"
          />
        </div>
      )}
      <Progress
        percent={perc}
        autoSuccess
        indicating
        // label={`${perc}% Raised`}
        progress
      />
      <StatWrap>
        <Statistic size="tiny">
          <Statistic.Value>{`$${raised}`}</Statistic.Value>
          <Statistic.Label>Raised</Statistic.Label>
        </Statistic>
        <Statistic size="tiny">
          <Statistic.Value>{`$${goal}`}</Statistic.Value>
          <Statistic.Label>Goal</Statistic.Label>
        </Statistic>
      </StatWrap>
    </Segment>
  );
};

DonationProgress.propTypes = {
  raised: PropTypes.number.isRequired,
};

export default DonationProgress;
