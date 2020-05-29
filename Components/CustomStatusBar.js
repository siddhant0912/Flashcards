import React from 'react';
import { StatusBar, View } from 'react-native';
import Constants from 'expo-constants';
import {orange2} from '../Utils/colors'

function CustomStatusBar({...props}) {
  return (
    <View style={{height: Constants.statusBarHeight, backgroundColor:'#2B2B2B'}}>
      <StatusBar backgroundColor='#2B2B2B' />
    </View>
  );
}

export default CustomStatusBar;
