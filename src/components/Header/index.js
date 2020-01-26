import React from 'react';

import { Container, Top, Logo, Title } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logoImage from '~/assets/Nubank_Logo.png';

export default function Header() {
  return (
    <Container>
        <Top>
            <Logo source={logoImage}/>
            <Title>Marlon</Title>
        </Top>
        <Icon name="keyboard-arrow-down" size={20} color="#FFF"></Icon>
    </Container>
  )
}