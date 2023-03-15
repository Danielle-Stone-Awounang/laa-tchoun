import React from 'react';
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native'
import { TouchableOpacity } from 'react-native';

export default function AcceuilChef(){
    return(
        <View style={styles.container}>
            <View style={styles.topbar}>
                <Text style={styles.greeting}>Hi Jeanne</Text>
                <TouchableOpacity style={styles.profil}></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topbar:{
        justifyContent:'space-between'
    },
    profil:{
        width:50
    }
})