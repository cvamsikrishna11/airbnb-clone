import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import Router from './src/navigation/Router';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
}
