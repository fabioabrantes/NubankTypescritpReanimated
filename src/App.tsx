import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Routes} from './routes';

export default function App() {
  return (
    <>
      <StatusBar translucent style="light" backgroundColor="#8B10AE" />
      <Routes />
    </>
  );
}

