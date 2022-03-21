import React from 'react';
import {
  interpolate,
  useAnimatedStyle,
  Extrapolate,
  SharedValue
} from 'react-native-reanimated';

import {MaterialIcons as Icon} from '@expo/vector-icons';

import {
  Container, TabsContainer, TabItem, TabText,
} from './styles';

interface Props{
  translateY:SharedValue<number>;
}

export function Tabs({translateY}:Props) {

  const tabsStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY:interpolate(
            translateY.value,
            [0,380],
            [0,30],
            Extrapolate.CLAMP
          ),
        }
      ],
      opacity:interpolate(
        translateY.value,
        [0,380],
        [1,.3],
        Extrapolate.CLAMP
      ),
    }
});

  return (
    <Container style={tabsStyle} >
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#FFF" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#FFF" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#FFF" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#FFF" />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
