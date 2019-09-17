import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from '../constants/Colors'


export default function({onPress, name}) {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.highlightColor,
    paddingHorizontal: 5,
    paddingVertical: 3,
    flex: 1,
    borderRadius: 4,
    flexGrow: 1,
    elevation: 4,
  },
  buttonText: {
    textAlign: 'center',
    padding: 6,
    fontFamily:'cambay-bold',
    fontSize: 17,
    color: colors.buttonText
  }
});
