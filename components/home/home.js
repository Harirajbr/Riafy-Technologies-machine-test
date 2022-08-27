import React ,{useState,useEffect,Component} from 'react';

import { View,Image,Platform, ListView,Text,BackHandler,TouchableHighlight,Alert,TouchableWithoutFeedback,ActivityIndicator,Picker,ImageBackground,TouchableOpacity,Dimensions,StyleSheet,Modal,ScrollView,TextInput,FlatList} from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foodcard from '../articles/article.js';





var {height, width} = Dimensions.get('window');



const Home = () => {

  useEffect(() => {

    
  }, []);


  
  return (

    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_text}>Search</Text>
        </View>
        <View style={styles.searchbar}>
          <Ionicons name={'search'} style={styles.search_icon}/>
          <Text style={styles.food_search_label}>Food name</Text>
        </View>
        <View style={{marginTop:20,width:width,backgroundColor:'#f7f7f7'}}><Foodcard/></View>
      
    </View>

    );
};


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    backgroundColor:'white'
  },
  header: {
    
    height:height/20,
    width:width/1.1,
    borderBottomWidth:2,
    borderColor:'#30384d',
    alignItems:'flex-start',
    marginTop:10,
    paddingHorizontal:10,
  },
  header_text:{
    color:'#30384d',
    fontWeight:'bold',
    fontSize:16,
    marginTop:5,
    fontFamily:'Montserrat'
  },
  searchbar:{
    backgroundColor:'#f7f7f7',
    width:width/1.2,
    height:height/18,
    alignItems:'center',
    flexDirection:'row',
    borderRadius:5,
    marginTop:5


  },
  search_icon:{
    margin:10,
    color:'#30384d',
    fontSize:17

  },
  food_search_label:{
    paddingLeft:20,
    color:'#7e8a9a',
    fontSize:12
  }
 
  
});



export default Home;



