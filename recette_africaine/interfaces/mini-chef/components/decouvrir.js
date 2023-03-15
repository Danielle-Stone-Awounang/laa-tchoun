import React from "react";
import { View,ImageBackground,Text,StyleSheet, TouchableOpacity,Image, TextInput,ScrollView } from "react-native-web";

export default function Actualite(){
    return(
        <View>
            <View>
                <Text style={styles.txt_titre}>Découvrir</Text>
            </View>
            
                <ScrollView showsVerticalScrollIndicator={false}>
                
                <View style={styles.container_card}>

                    <View style={styles.card1}>

                        <Image style={styles.recette_bg} source={{uri :'https://www.hotelfreesia.com/img/pile.jpg'}} ></Image>
                        <Text style={styles.chef_name}>Chef Bibiche</Text>
                        <Text style={styles.recette_title}>Pommes pilés</Text>
                        <Image style={styles.imgch} source={require('../../../assets/ressources/img4.jpg')}></Image>

                    </View>

                    <View style={styles.card2}>
                        <Image style={styles.recette_bg} source={{uri :'https://www.hotelfreesia.com/img/pile.jpg'}} ></Image>
                    </View>

                </View>
                </ScrollView>
            </View>
        
    )
}

const styles = StyleSheet.create({
    recette_bg:{
        width:'45%',
        height:'150px',
        marginVertical:5,
        borderRadius:20,
        
    },
    container_card:{
        flexDirection:'row'
    },
    recette_title:{
        fontWeight:'bold',
        marginTop:0,
        color:"white",
        // backgroundColor:'red',
        position:'absolute',
        top:'20%',
        fontSize:16,
        left:'1%',
        textShadowColor:'black',
    },
    txt_titre:{
        marginVertical:20,
        fontSize:24,
        fontWeight:'bold'
    },
    
    imgch:{
        width:28,
        height:28,
        borderRadius:15,
        position:'absolute',
        left:3,
        top:4,
        cursor:'pointer'
    },
    chef_name:{
        position:'absolute',
        top:4,
        left:'12%',
        fontSize:10,
        cursor:'pointer'
    },
    card1:{
        with:5
    }
})