import React from 'react';

import {
  Container, Top, Logo, Title,
} from './styles';

import {MaterialIcons as Icon} from '@expo/vector-icons';

import logo from '../../assets/Nubank_Logo.png';

export function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Fábio Abrantes</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  );
}
