import React from 'react';
import { View,ImageBackground,Text,StyleSheet, TouchableOpacity,Image, TextInput,ScrollView} from 'react-native';
import { Octicons } from '@expo/vector-icons';

export default function ChefList(){
    return(
        <View>
             <View style = {styles.chef_lister}>
                <Text style = {styles.big_text} >Meilleur chefs</Text>
                <Text style = {styles.link}>Voir plus</Text>
            </View>

            <View style = {styles.chef_list}>
                <ScrollView horizontal='true' showsHorizontalScrollIndicator={false}>
                    
                <View>
                    <Image style={styles.imgchef} source={require('../../../assets/ressources/img2.jpg')}></Image>
                    <Text>Alain</Text>
                </View>
                <View>
                    <Image style={styles.imgchef} source={require('../../../assets/ressources/img3.jpg')}></Image>
                    <Text>Bibiche</Text>
                </View>
                <View>
                    <Image style={styles.imgchef} source={require('../../../assets/ressources/img4.jpg')}></Image>
                    <Text>Patric</Text>
                </View>
                <View>
                    <Image style={styles.imgchef} source={require('../../../assets/ressources/img5.jpg')}></Image>
                    <Text>Michel</Text>
                </View>
                </ScrollView>
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
    imgchef:{
        width:65,
        height:65,
        borderRadius:25,
        marginHorizontal:5,
        cursor:'pointer'
    },
})