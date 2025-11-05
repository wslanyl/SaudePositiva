import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export default function Input({ placeholder, value, onChangeText, secureTextEntry }) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={colors.textLight}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 8,
    padding: 12,
    marginVertical: 6,
    fontSize: 15,
    color: colors.textDark,
  },
});
