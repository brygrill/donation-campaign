import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  Segment,
  Form,
  Button,
  Header,
  Message,
  Label,
} from 'semantic-ui-react';

import Success from './Success';

const DonationForm = ({ handleSubmit, names }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const nameErr = _.includes(names, name);

  const onSuccess = success => {
    setSuccess(success);
    setTimeout(() => {
      setSuccess(false);
    }, 8000);
  };
  const onSubmit = async e => {
    e.preventDefault();
    const { success } = await handleSubmit(name, amount);
    if (success) {
      onSuccess(success);
      setName('');
      setAmount('');
    } else {
      setError(true);
    }
  };

  return (
    <Segment basic padded>
      <Header>Add Your Donation</Header>
      <Form error={error} onSubmit={onSubmit}>
        {success && (
          <Success
            msg="Ring the Bell!"
            gif="https://media.giphy.com/media/3Z11sCBiALCEyX9YUk/giphy.gif"
          />
        )}
        {/* <Message
          info
          hidden={!success}
          content={

          }
        /> */}
        <Message error header="Uh oh." content="Something went wrong!" />
        <Form.Input
          label="Name"
          placeholder="Name"
          name="name"
          value={name}
          error={nameErr}
          onChange={(e, p) => setName(p.value)}
        />
        {nameErr && (
          <Label
            basic
            pointing
            style={{ marginTop: '0', marginBottom: '1rem' }}
          >
            That name has been added already!
          </Label>
        )}

        <Form.Input
          label="Amount"
          placeholder="$100"
          name="amount"
          value={amount}
          type="number"
          onChange={(e, p) => setAmount(p.value)}
        />
        <Button type="submit" disabled={!name || !amount || nameErr}>
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
