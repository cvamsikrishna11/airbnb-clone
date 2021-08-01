import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Amplify from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native'

import config from './aws-exports'



Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

import Router from './src/navigation/Router';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
}

export default withAuthenticator(App);