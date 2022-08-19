import React ,{useState,useEffect,Component} from 'react';

import { View,Image,Platform, ListView,Text,BackHandler,TouchableHighlight,Alert,TouchableWithoutFeedback,ActivityIndicator,Picker,ImageBackground,TouchableOpacity,Dimensions,StyleSheet,Modal,ScrollView,TextInput,FlatList} from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Articlecard from '../articles/article.js';




var {height, width} = Dimensions.get('window');

const Home = () => {

  useEffect(() => {
    
  }, []);


  
  return (

    <View style={styles.container}>
        <View style={styles.header}>
          <Fontisto name={'nav-icon-a'} style={styles.hamberger_icon}/>
          <Text style={styles.text}>NY Times Most Popular</Text>
          <Ionicons name={'search'} style={styles.search_icon}/>
          <Fontisto name={'more-v-a'} style={styles.dot_icon}/>
        </View>
      <View styles={{marginTop:20}}><Articlecard/></View>
    </View>

    );
};


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#eeeeee',
    alignItems:'center'
  },
  header: {
    backgroundColor:'#70e5c3',
    height:height/10,
    width:width/1.05,
    borderTopWidth:2,
    borderColor:'#335fa8',
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
    paddingHorizontal:10,
  },
  hamberger_icon:{
    fontSize:15,
    color:'white',
  },
  search_icon:{
    fontSize:20,
    color:'white',
  },
  dot_icon:{
    fontSize:18,
    color:'white',
  },
  text:{
    color:'white',
    fontSize:20
  }
  
});


export default Home;



