import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Platform } from 'react-native';
import Grid from './screens/Grid/Grid';
import { ContextProvider } from './store/Context';

export default function App() {
  return (
    <SafeAreaView style={[styles.container, styles.droidSafeArea]}>
      <ContextProvider>
        <Grid />
      </ContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(36, 40, 47)',
  },
  droidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 30 : 0
  }
});
