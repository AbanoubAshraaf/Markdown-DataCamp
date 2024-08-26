import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

const SafeAreaWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default SafeAreaWrapper;
