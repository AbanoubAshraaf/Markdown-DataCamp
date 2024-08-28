import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => (
  <View style={styles.buttonContainer}>
    <Button title={title} onPress={onPress} />
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
});

export default CustomButton;
