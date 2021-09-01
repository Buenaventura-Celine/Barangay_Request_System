import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const Slide = ({item}) =>{
    const { title, desc } = item
    return(
        <View style={[styles.slide]}>
            <Text>{title}</Text>
            <Text>{desc}</Text>
        </View>
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

export default Slide;