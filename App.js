import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';

import themes from './src/themes';

import Home from './src/Home';

export default function App() {
  // dark, light or null
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || theme.dark;
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}