import React from 'react';
import {MaterialIcons as Icon} from '@expo/vector-icons';

import { PanGestureHandler, State } from 'react-native-gesture-handler';
import {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  Extrapolate,
  interpolate,
  withTiming,
  withSpring, // tipo de animação mais suave
} from 'react-native-reanimated';

import {Header} from '../../components/Header';
import {Tabs} from '../../components/Tabs';
import {Menu} from '../../components/Menu';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
  SafeAreaView,
} from './styles';

export function Main() {
  const translateY = useSharedValue(0);
  
  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.posY = translateY.value;
    },
    onActive(event, ctx: any) {
       translateY.value = ctx.posY + event.translationY;     
    },
    onEnd(_, ctx: any) {
      if(translateY.value >= 100 && ctx.posY === 0){
        translateY.value = withTiming(380,{duration:500});
      }else if (translateY.value < 100 && ctx.posY === 0) {
        translateY.value = withTiming(0,{duration:500});
      }else if (translateY.value > 280 && ctx.posY === 380){
        translateY.value = withTiming(380,{duration:500});
      }else if(translateY.value < 280 && ctx.posY === 380){
        translateY.value = withTiming(0,{duration:500});
      }
      
    },
  });

  const cardStyle = useAnimatedStyle(()=>{
    return {
      transform: [
        {
          translateY: interpolate(
            translateY.value,
            [-350,0,380],
            [-50,0,380],
            Extrapolate.CLAMP
          )
        }
      ]
    }
  });

  return (
    <SafeAreaView>
      <Container>
        <Header />
        <Content>
          <Menu translateY={translateY}/>

          <PanGestureHandler
            onGestureEvent={onGestureEvent}
            onHandlerStateChange={()=>{}}
          >
            <Card style={cardStyle}>
              <CardHeader>
                <Icon name="attach-money" size={28} color="#666" />
                <Icon name="visibility-off" size={28} color="#666" />
              </CardHeader>
              <CardContent>
                <Title>Saldo disponível</Title>
                <Description>R$ 197.611,65</Description>
              </CardContent>
              <CardFooter>
                <Annotation>
                Transferência de R$ 20,00 recebida de Fábio Abrantes Diniz hoje às 06:00h
                </Annotation>
              </CardFooter>
            </Card>
          </PanGestureHandler>

        </Content>

        <Tabs translateY={translateY}/>
      </Container>
    </SafeAreaView>
  );
}
