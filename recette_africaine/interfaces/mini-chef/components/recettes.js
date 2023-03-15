import React from 'react';
import { View,ImageBackground,Text,StyleSheet, TouchableOpacity,Image, TextInput,ScrollView} from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function RecetteList(){
    return(
        <View>
           <View style = {styles.chef_lister}>
                <Text style = {styles.big_text}>Vos favoris</Text>
                <Text style = {styles.link}>Voir plus</Text>
            </View>

            <View style = {styles.container}>
                <ScrollView horizontal='true' showsHorizontalScrollIndicator={false}>
                <View>
                    <View style={styles.recette}>
                        <Image style={styles.recette_bg} source={{uri :'https://www.hotelfreesia.com/img/pile.jpg'}} ></Image>
                        <Text style={styles.recette_titre}>Pommes pilés</Text>
                        <Text style={styles.chef_nom}>Chef Bibiche</Text>
                        <Image style={styles.img} source={require('../../../assets/ressources/img4.jpg')}></Image>
                       
                    </View>
                <View style={styles.essayer}><Text style={{color:'white'}}>Essayer</Text></View>
                </View>

                <View>
                    <View style={styles.recette}>
                        <Image style={styles.recette_bg} source={{uri :'https://www.hotelfreesia.com/img/pile.jpg'}} ></Image>
                        <Text style={styles.recette_titre}>Pommes pilés</Text>
                        <Text style={styles.chef_nom}>Chef Bibiche</Text>
                        <Image style={styles.img} source={require('../../../assets/ressources/img4.jpg')}></Image>
                        
                    </View>
                <View style={styles.essayer}><Text style={{color:'white'}}>Essayer</Text></View>

            </View>
                </ScrollView>
            </View>

            <View>
                <Text style={styles.txt_titre}>Découvrir</Text>
            </View>

            <View  style = {styles.recette_card}>
                <View>
                    <Image  style = {styles.recette1} source={{uri :'https://www.hotelfreesia.com/img/pile.jpg'}} />
                    <Text style={styles.chef_name}>Chef Bibiche</Text>
                        <Text style={styles.recette_title}>Pommes pilés</Text>
                        <AntDesign style={styles.heart} name="heart" size={18} color="red" />
                        <AntDesign style={styles.start1} name="star" size={18} color="#FFD700" />
                        <AntDesign style={styles.start2} name="star" size={18} color="#FFD700" />
                       
                        <Image style={styles.imgch} source={require('../../../assets/ressources/img4.jpg')}></Image>
                </View>

                <View>
                    <Image  style = {styles.recette1} source={{uri :'https://www.hotelfreesia.com/img/pile.jpg'}} />
                    <Text style={styles.chef_name}>Chef Bibiche</Text>
                        <Text style={styles.recette_title}>Pommes pilés</Text>
                        <AntDesign style={styles.heart} name="heart" size={18} color="red" />
                        <AntDesign style={styles.start1} name="star" size={18} color="#FFD700" />
                        <AntDesign style={styles.start2} name="star" size={18} color="#FFD700" />
                       
                        <Image style={styles.imgch} source={require('../../../assets/ressources/img4.jpg')}></Image>
                </View>

                <View>
                    <Image  style = {styles.recette1} source={{uri :'https://www.hotelfreesia.com/img/pile.jpg'}} />
                    <Text style={styles.chef_name}>Chef Bibiche</Text>
                        <Text style={styles.recette_title}>Pommes pilés</Text>
                        <AntDesign style={styles.heart} name="heart" size={18} color="red" />
                        <AntDesign style={styles.start1} name="star" size={18} color="#FFD700" />
                        <AntDesign style={styles.start2} name="star" size={18} color="#FFD700" />
                       
                        <Image style={styles.imgch} source={require('../../../assets/ressources/img4.jpg')}></Image>
                </View>

                <View>
                    <Image  style = {styles.recette1} source={{uri :'https://www.hotelfreesia.com/img/pile.jpg'}} />
                    <Text style={styles.chef_name}>Chef Bibiche</Text>
                        <Text style={styles.recette_title}>Pommes pilés</Text>
                        <AntDesign style={styles.heart} name="heart" size={18} color="red" />
                        <AntDesign style={styles.start1} name="star" size={18} color="#FFD700" />
                        <AntDesign style={styles.start2} name="star" size={18} color="#FFD700" />
                       
                        <Image style={styles.imgch} source={require('../../../assets/ressources/img4.jpg')}></Image>
                </View>
                
                
            </View>
           

        </View>
    )
}

const styles = StyleSheet.create({
    
    chef_lister:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    big_text:{
        fontSize:24,
        fontWeight:'bold'
    },
    link:{
        color:"pink",
        cursor:'pointer',
        
    },
    chef_list:{
        marginVertical:15,
        flexDirection:'row',
        justifyContent:'space-between',
        textAlign:'center'
    },
    container_card:{
        flexDirection:'row'
    },
    recette:{
        width:150,
        height:150,
        marginRight:10,
        color:"white",
        marginTop:15,
        borderRadius:25,
        // overflow: 'hidden',
        textAlign:'center',
        
    },
    recette_bg:{
        borderRadius:20,
        width:150,
        height:150,
       
    },
    recette_titre:{
        fontWeight:'bold',
        marginTop:10,
        color:"white",
        // backgroundColor:'red',
        position:'absolute',
        top:'15%',
        fontSize:16,
        left:'20%',
        textShadowColor:'black',
    },
    img:{
        width:28,
        height:28,
        borderRadius:15,
        position:'absolute',
        left:3,
        top:3,
        cursor:'pointer'
    },
    chef_nom:{
        position:'absolute',
        top:3,
        left:'21%',
        fontSize:10,
        cursor:'pointer'
    },
    essayer:{
        backgroundColor:'#254d32',
        width:80,
        height:35,
        borderRadius:20,
        lineHeight:30,
        textAlign:'center',
        borderColor:'#ffff',
        borderWidth:4,
        position:'absolute',
        bottom:-4,
        left:'22%',
        cursor:'pointer'
    },
    recette1:{
        marginBottom:10,
        width: 122,
        height: 170,
        borderRadius:15,
        marginLeft:5
    },
      recette_card:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    
    recette_title:{
        fontWeight:'bold',
        marginTop:0,
        color:"white",
        // backgroundColor:'red',
        position:'absolute',
        top:'20%',
        fontSize:16,
        left:'10%',
        textShadowColor:'black',
    },
    txt_titre:{
        marginVertical:10,
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
        left:'25%',
        fontSize:10,
        cursor:'pointer'
    },
    heart:{
        position:'absolute',
        zIndex:3,
        right:3,
        top:3
    },
    start1:{
        position:'absolute',
        zIndex:3,
        bottom:10,
        left:10
    },
    start2:{
        position:'absolute',
        zIndex:3,
        bottom:10,
        left:30
    },
})