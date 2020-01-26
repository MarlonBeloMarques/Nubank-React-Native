import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Annotation, Description } from './styles';

export default function Main() {
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChanged(event) {

  }
  
  return (
    <Container>
      <Header />

      <Content>

        <Menu />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}>
          
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0 , 400],
                outputRange: [-50, 0, 400],
                extrapolate: 'clamp'
              }),
            }],
          }}>
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
                Transferência de R$ 20,00 recebida de Edileusa Socorro V. hoje às 06:00h.
            </Annotation>
            </CardFooter>
          </Card>
        
        </PanGestureHandler>
      
      </Content>

      <Tabs />
    </Container>
  )
}