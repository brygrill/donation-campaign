import React from 'react';
import { Header, Button, Segment, Image } from 'semantic-ui-react';
import styled from 'styled-components';

import aclu from './assets/ACLU.png';

const links = {
  home: 'https://www.aclu.org/',
  donate:
    'https://action.aclu.org/give/fund-every-fight-ahead?ms_aff=NAT&initms_aff=NAT&ms=1812XX_yearend_banner&initms=1812XX_yearend_banner&ms_chan=web&initms_chan=web&cid=7014A000001jl4UQAQ',
};

const HeaderWrap = styled.div`
  padding: 1rem 0;
`;

const Link = ({ url, content, color }) => {
  return (
    <a style={{ color }} href={url} rel="noopener noreferrer" target="_blank">
      {content}
    </a>
  );
};

const DonationHeader = () => {
  return (
    <HeaderWrap>
      <Header as="h1" style={{ fontSize: '3rem', fontWeight: '300' }}>
        Crestview Christmas
        <Header.Subheader>2018 Donation Campaign</Header.Subheader>
      </Header>
      <Image size="large" src={aclu} rounded centered />
      <Segment raised size="big">
        This year we are donating to the{' '}
        <Link url={links.home} content="ACLU" />. After you donate, please add
        your name below so we can track our progress. Thank you and Merry
        Christmas!
      </Segment>
      <Button primary size="big" fluid>
        <Link url={links.donate} content="DONATE" color="#fff" />
      </Button>
    </HeaderWrap>
  );
};

export default DonationHeader;
