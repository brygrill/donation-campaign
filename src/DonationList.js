import React from 'react';
import PropTypes from 'prop-types';

const DonationList = ({ donations }) => {
  console.log(donations);
  if (donations) {
    return <div>List</div>;
  }
  return null;
};

DonationList.propTypes = {
  donations: PropTypes.array.isRequired,
};

export default DonationList;
