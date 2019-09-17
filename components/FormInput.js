import React, {useState} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
} from 'react-native';

export default function FormInput({value, label, onChange, ...props}){
  return(
  <View style={{
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 3,
    borderColor: '#9e9',
    height: 50,
    backgroundColor:'rgba(255,255,255,.5)'
  }}>
    <Text style={{fontSize: 20, marginRight: 10, fontFamily:'cambay', marginBottom: 0}}>{label}</Text>
    <TextInput
      style={{fontSize: 20, flexGrow: 1, fontFamily:'cambay-bold'}}
      onChangeText={(text) => onChange(text)}
      value={value}
      {...props}
    />
  </View>
  )
}