import React ,{useState,useEffect,Component} from 'react';

import { View,Image,Platform, ListView,Text,BackHandler,TouchableHighlight,Alert,TouchableWithoutFeedback,ActivityIndicator,Picker,ImageBackground,TouchableOpacity,Dimensions,StyleSheet,Modal,ScrollView,TextInput,FlatList} from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';





var {height, width} = Dimensions.get('window');

const Articlecard = () => {


  const [articleResponse, setarticleResponse] = useState(null);
  
  useEffect(() => {
    fetch('https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=mZRsL6fhU0pAIbE3M2GHc71xZL1AbJre')
      .then(results => results.json())
      .then(data => {
        console.log("api_response", data.results);   
        setarticleResponse(data.results);
        
      });
  }, []);

 

  function renderCard(item, index) {
        return (
            <View style={styles.itemcardContainer}>

               <View style={styles.card}>
                   <View style={styles.circleview}>
                     <FontAwesome name={'circle'} style={styles.circle}  />
                   </View> 
                   <View style={styles.description}>
                     <Text numberOfLines={2} ellipsizeMode='tail' style={styles.item}>{item.title}</Text>
                     <Text numberOfLines={2} ellipsizeMode='tail' style={styles.subtext}>{item.byline}</Text>
                     <View style={styles.calendarview}>
                       <FontAwesome name={'calendar-o'} style={styles.calendar}  />
                       <Text  ellipsizeMode='tail' style={styles.date}>{item.published_date}</Text>
                     </View> 
                   </View>  
                   <TouchableOpacity style={styles.arrowview}>
                     <FontAwesome name={'angle-right'} style={styles.arrow}  />
                   </TouchableOpacity>
               </View>  
            </View> 
        )
    }

    function renderSeparator(){
      return(
        <View style={styles.cardseperator}>
        </View>
        )
    }

  return (

    <View style={styles.container}>
    {articleResponse ? 
        <FlatList  
          data={articleResponse}  
          renderItem={({ item, key }) => renderCard(item, key)}
          ItemSeparatorComponent={()=>renderSeparator()}
          showsVerticalScrollIndicator={false}
         />  
         :
         <Text style={styles.loader}>Loading...</Text>


    }

        
    </View>

    );
};

const styles = StyleSheet.create({
  itemcardContainer: {
    height:height/5,
    backgroundColor:'#fafafa',
    alignItems:'center',
    width:width/1.05,

  },
  card:{
    alignItems:'center',
    flexDirection:'row',
  },

  item: {
    
    fontSize:14,
    color:'black',
    alignItems:'center',

  },
 
  circle:{
    color:'#9a9a9a',
    fontSize:40
  },
  arrow:{
    color:'#9a9a9a',
    fontSize:25
  },
  calendar:{
    color:'#9a9a9a',
    fontSize:15
  },
  subtext:{
    paddingTop:15,
    color:'#9a9a9a',
    padding:3

  },
  date:{
    color:'#9a9a9a',
    fontSize:12,
    marginLeft:5,
    alignItems:'flex-end',

  },
  cardseperator:{
    height:10
  },
  description:{
    height:height/5,
    width:width*2/3,
    justifyContent:'center'
  },
  circleview:{
    height:height/5,
    justifyContent:'center',
    width:width/8,
    alignItems:'center'
  },
  calendarview:{
    flexDirection:'row',
    width:width/1.5,
    justifyContent:'flex-end'
  },
  arrowview:{
    height:height/5,
    justifyContent:'center',
    width:width/8,
    alignItems:'center'
  },
  loader:{
    marginTop:height/3,
    color:'blue',
    fontSize:16
  }
 
  
});


export default Articlecard;
