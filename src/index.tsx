import { Text, View } from 'react-native';
import React from 'react';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export function BlobImage(styles: any) {
  return (
    <View style={styles}>
      <Text>this is a test package</Text>
    </View>
  );
}
