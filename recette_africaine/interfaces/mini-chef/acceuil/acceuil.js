import React from 'react';
import { View,ImageBackground,Text,StyleSheet, TouchableOpacity,Image, TextInput,ScrollView} from 'react-native';
import { Octicons } from '@expo/vector-icons';
import TopBar from '../components/topBar';
import SearchBar from '../components/searcBar';
import ChefList from '../components/chefList';
import RecetteList from '../components/recettes';
// import Actualite from '../components/decouvrir';

export default function AcceuilMiniChef(){
    return(
        <View style={styles.container}>
            <TopBar></TopBar>
            <SearchBar></SearchBar>
            <ChefList></ChefList>
            <RecetteList></RecetteList>
            {/* <Actualite></Actualite>  */}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10
    },
})