import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import numeral from 'numeral';
import { Segment, List, Header } from 'semantic-ui-react';

const DonationList = ({ donations }) => {
  console.log(donations);
  if (!_.isEmpty(donations)) {
    return (
      <Segment basic>
        <Header>Donations So Far</Header>
        <List divided relaxed>
        {_.map(donations, d => {
          return (
            <List.Item key={d.key}>
              <Header sub>{d.name}</Header>
              <span>{numeral(d.amount).format('$0,0.00')}</span>
            </List.Item>
          );
        })}
        </List>
      </Segment>
    );
  }
  return null;
};

DonationList.propTypes = {
  donations: PropTypes.array.isRequired,
};

export default DonationList;
