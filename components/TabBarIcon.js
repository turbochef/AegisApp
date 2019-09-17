import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../constants/Colors'


export default function TabBarIcon(props) {
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? colors.highlightColor : colors.tabIconDefault}
    />
  );
}
