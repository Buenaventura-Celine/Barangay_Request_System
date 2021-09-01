import React from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions } from 'react-native';
import Slide from './Slide';

const Welcome = ({slides = []}) =>{
    if(!slides || !slides.length) return null;
    return(
        <FlatList 
            horizontal
            pagingEnabled
            data={slides} 
            keyExtractor={(item) => item.key.toString()} 
            renderItem={({item}) => <Slide item={item}/>} 
        />
    )
}


const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({
    slide:{
        width, height,
        justifyContent: 'center',
        alignItems:'center'
    },
});

export default Welcome;