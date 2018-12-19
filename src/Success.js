import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Header, Image } from 'semantic-ui-react';
const SuccessWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Success = ({msg, gif}) => {
  return (
    <SuccessWrap>
      <Header>{msg}</Header>
      <Image
        centered
        rounded
        size="medium"
        src={gif}
      />
    </SuccessWrap>
  );
};

Success.propTypes = {
  msg: PropTypes.string.isRequired,
  gif: PropTypes.string.isRequired,
};

export default Success;
