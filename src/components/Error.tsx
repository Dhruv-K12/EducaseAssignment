import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, TEXT } from '../const/theme';
import { ErrorProps } from '../types/component.type';

const Error = ({ message = 'Something went wrong', onRetry }: ErrorProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚠️ Error</Text>
      <Text style={styles.message}>{message}</Text>
      {onRetry && (
        <TouchableOpacity style={styles.button} onPress={onRetry}>
          <Text style={styles.buttonText}>Retry</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...TEXT.h1,
  },
  message: {
    ...TEXT.h3,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  buttonText: {
    ...TEXT.caption,
    color: COLORS.background,
  },
});
