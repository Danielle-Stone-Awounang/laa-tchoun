import React from 'react';
import { View,ImageBackground,Text,StyleSheet, TouchableOpacity,Image, TextInput,ScrollView} from 'react-native';
import { Octicons } from '@expo/vector-icons';

export default function SearchBar(){
    return(
        <View style = {styles.searchBar}>
                <TouchableOpacity style = {styles.iconSearch}>
                    <Octicons name="search" size={30} color="#9d9696" />
                </TouchableOpacity>
                <TextInput style = {styles.search} placeholder= "Rechercher" />
            </View>
    )
}

const styles = StyleSheet.create({
    
    searchBar: {
        marginHorizontal:20,
        backgroundColor:'#f3f2f2',
        flexDirection:'row',
        // backgroundColor:'white',
        borderRadius:10,
        width:"100%",
        height:40,
        marginVertical:20,
        marginHorizontal:'auto',
        padding:5
    },
    search:{
        marginHorizontal:20,
        color:'#9d9696',
        borderRadius:20,
        borderColor:'#f3f2f2',
        outLine:'none'
    },
})