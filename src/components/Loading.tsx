import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../const/theme';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={48} color={COLORS.primary} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
