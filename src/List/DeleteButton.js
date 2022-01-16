import React from 'react';
import {Image, StyleSheet, Pressable} from 'react-native';

export default function DeleteButton({button, onPressFunc, keyItem}) {
  return (
    <Pressable style={button} onPress={() => onPressFunc(keyItem)}>
      <Image
        style={styles.image}
        source={require('../../assets/crossIcon.png')}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    height: 20,
    width: 20,
    alignItems: 'center',
  },
});
