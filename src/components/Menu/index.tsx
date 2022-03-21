import React from 'react';
import {
  interpolate,
  useAnimatedStyle,
  Extrapolate,
  SharedValue
} from 'react-native-reanimated';

import QRCode from 'react-native-qrcode-svg';

import {MaterialIcons as Icon} from '@expo/vector-icons';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './styles';

interface Props{
  translateY:SharedValue<number>;
}

export function Menu({translateY}:Props) {

  const menuStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        translateY.value,
        [0, 150],
        [0, 1],
      ),
    };
  });

  return (
    <Container style={menuStyle}>
      <Code>
        <QRCode
          value="https://github.com/fabioabrantes"
          size={80}
          color="#fff"
          backgroundColor="#8B10AE"
        />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
