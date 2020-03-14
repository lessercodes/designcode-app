import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components';

import Card from './components/Card';
import Logo from './components/Logo';
import { NotificationIcon } from './components/Icons';

export default function App() {
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView >
          <TitleBar>
            <Avatar source={require('./assets/avatar.jpg')} />
            <Title>Welcome back,</Title>
            <Name>Meng</Name>
            <NotificationIcon
              style={{ position: 'absolute', right: 20, top: 5 }}
            />
          </TitleBar>
          <ScrollView
            horizontal={true}
            style={{ padding: 20, paddingLeft: 12, paddingTop: 30 }}
          >
            <Logo
              image={require('./assets/logo-framerx.png')}
              text="Framer X"
            />
            <Logo
              image={require('./assets/logo-figma.png')}
              text="Figma"
            />
          </ScrollView>
          <Subtitle>Continue Learning</Subtitle>
          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            <Card
              title="Styled Components"
              caption="React Native"
              subtitle="5 of 12 sections"
              image={require('./assets/background2.jpg')}
              logo={require('./assets/logo-react.png')}
            />
            <Card
              title="Styled Components"
              caption="React Native"
              subtitle="5 of 12 sections"
              image={require('./assets/background2.jpg')}
              logo={require('./assets/logo-react.png')}
            />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container >
  );
}

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;