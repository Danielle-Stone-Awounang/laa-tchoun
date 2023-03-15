import React from 'react';
import { View,ImageBackground,Text,StyleSheet, TouchableOpacity,Image, TextInput,ScrollView} from 'react-native';
import { Octicons } from '@expo/vector-icons';

export default function TopBar(){
    return(
        <View style={styles.topbar}>
                <Text style={styles.greeting}>Hi Jeanne</Text>
                <TouchableOpacity style={styles.profil}>
                    <Image style={styles.img} source={require('../../../assets/ressources/img1.jpg')}></Image>
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    topbar:{
        justifyContent:'space-between',
          marginTop:26,
          width:"100%",
          flexDirection:'row',
        //   backgroundColor:'red',
          lineHeight:50,
          justifyContent:'space-between',
    },
    greeting:{
        lineHeight:"100%"
    },
    profil:{
        width:50,
    },
    img:{
        width:50,
        height:50,
        borderRadius:15,
        
    },
})