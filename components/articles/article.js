import React ,{useState,useEffect,Component} from 'react';

import { View,Image,Platform, ListView,Text,BackHandler,TouchableHighlight,Alert,TouchableWithoutFeedback,ActivityIndicator,Picker,ImageBackground,TouchableOpacity,Dimensions,StyleSheet,Modal,ScrollView,TextInput,FlatList} from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import test from '../../assets/json/test.json'





var {height, width} = Dimensions.get('window');

const Foodcard = () => {


  const [articleResponse, setarticleResponse] = useState(test);
  
  useEffect(() => {
    console.log('json',articleResponse)
    
  }, []);

 

  function renderCard(item, index) {

        return (
          
          <View style={styles.wrapper}>
             <Image style={styles.image} source={{uri:item.imageUrl}}/>
             <Text  style={styles.item}>{item.Ingredient}</Text>
             <Text  style={styles.sub_item} numberOfLines={2} ellipsizeMode='tail' >{item["Short text"]}</Text>
          </View>
            
        )
    }

   

  return (

    <View>
    {articleResponse ? 
        <FlatList  
          data={articleResponse} 
          numColumns={2}
          columnWrapperStyle={styles.row}
          renderItem={({ item, key }) => renderCard(item, key)}
          showsVerticalScrollIndicator={false}

         />  
         :
         <Text style={styles.loader}>Loading...</Text>

    }

        
    </View>

    );
};

const styles = StyleSheet.create({
  
  row:{
      flex:1,
      justifyContent: "space-around"
  },
 
  image:{
    width:width/2.2,
    height:height/5
  },

  item: {
    fontSize:14,
    color:'black',
    alignItems:'center',
    width:width/2.2,
  },
  sub_item:{
    fontSize:11,
    color:'grey',
    alignItems:'center',
    width:width/3,

  },
  
  loader:{
    marginTop:height/3,
    color:'blue',
    fontSize:16
  },
  wrapper:{
    backgroundColor:'yellow',
    margin:5,
    padding:5
  }
 
  
});


export default Foodcard;
