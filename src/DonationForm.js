import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Segment,
  Form,
  Button,
  Header,
  Message,
  Image,
} from 'semantic-ui-react';

const SuccessWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DonationForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();
    const { success } = await handleSubmit(name, amount);
    if (success) {
      setSuccess(success);
      setName('');
      setAmount('')
    } else {
      setError(true);
    }
  };

  return (
    <Segment basic padded>
      <Header>Add Your Donation</Header>
      <Form error={error} onSubmit={onSubmit}>
        <Message
          info
          hidden={!success}
          content={
            <SuccessWrap>
              <Header>Ring the Bell!</Header>
              <Image
                centered
                rounded
                size="medium"
                src="https://media.giphy.com/media/3Z11sCBiALCEyX9YUk/giphy.gif"
              />
            </SuccessWrap>
          }
        />
        <Message
          error
          header="Uh oh."
          content="Something went wrong!"
        />
        <Form.Input
          label="Name"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e, p) => setName(p.value)}
        />
        <Form.Input
          label="Amount"
          placeholder="$100"
          name="amount"
          value={amount}
          type="number"
          onChange={(e, p) => setAmount(p.value)}
        />
        <Button type="submit" disabled={!name && !amount}>
          Save
        </Button>
      </Form>
    </Segment>
  );
};

DonationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default DonationForm;
