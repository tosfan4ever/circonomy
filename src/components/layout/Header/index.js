import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/img/logo.png';

import { Header, Ul, Li, LogoImg, ConnectButton } from './Header.styles';

const AppHeader = () => (
  <Header>
    <LogoImg src={logo} />
    <Ul>
      <Li>
        <Link to="/">Explore Circles</Link>
      </Li>
      <Li>
        <Link to="/about">Enter Bazaar</Link>
      </Li>
      <Li>
        <Link to="/about">Engage Circle</Link>
      </Li>
    </Ul>
    <ConnectButton>Connect</ConnectButton>
    <label htmlFor="check">
      <input type="checkbox" id="check"/>
      <span></span>
      <span></span>
      <span></span>
    </label>
  </Header>
);

export default AppHeader;
