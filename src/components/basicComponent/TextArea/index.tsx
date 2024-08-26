import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface TextAreaProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  style?: any;
}

const TextArea: React.FC<TextAreaProps> = ({ value, onChangeText, placeholder, style }) => {
  return (
    <TextInput
      style={style}
      multiline
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default TextArea;
