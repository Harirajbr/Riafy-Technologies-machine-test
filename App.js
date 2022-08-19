import React ,{useState,useEffect} from 'react';
import type {Node} from 'react';
import { View,Image,Platform, ListView,Text,BackHandler,TouchableHighlight,Alert,TouchableWithoutFeedback,ActivityIndicator,Picker,ImageBackground,TouchableOpacity,Dimensions,StyleSheet,Modal,ScrollView,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/home/home';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

var {height, width} = Dimensions.get('window');

const App: () => Node = () => {
  
  return (

      <NavigationContainer>
        <Home/>
      </NavigationContainer>
  
    
  );
};



export default App;
