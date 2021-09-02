import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';
import { 
    useFonts,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
} from '@expo-google-fonts/montserrat'
import { AppLoading } from 'expo';

export default function Slide({item}) {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular, Montserrat_200ExtraLight, Montserrat_300Light
    });

    const { title, desc, image} = item
    if(!fontsLoaded){
        return (
            <>
                <AppLoading/>
            </>
        )
    }
    return (
        <>
            <View style={[styles.slide]}>
                <Text style={styles.title}>{title}</Text>
                <Image style={styles.image} source={image}/>
                <Text style={styles.desc}>{desc}</Text>
                
            </View>
        </>
    )
}

const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({
    slide:{
        width, height,
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        paddingTop: 180
    },
    image:{
        width: 300,
        height: 300,
        paddingBottom: 10
    },
    title:{
        fontFamily:'Montserrat_400Regular',
        fontSize: 36,
        fontWeight: "900"
    },
    desc:{
        fontFamily:'Montserrat_200ExtraLight',
        fontSize: 15,
        fontWeight: "900"
    }
});