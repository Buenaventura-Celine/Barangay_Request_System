import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Welcome from './app/Welcome';


export default function App() {
  const[loading, setLoading] = useState(true);
  const[isFirstTimeLoad, setIsFirstTimeLoad] = useState(false);

  //AsyncStorage if this already loaded or not
  //if yes render the actual app
  //if not then we are going to display this welcome screen

  const checkForFirstTimeLoaded = async () =>{
    const result = await AsyncStorage.getItem('isFirstTimeOpen');
    if(result === null) setIsFirstTimeLoad(true);
    setLoading(false);
  }

  useEffect(() =>{
    checkForFirstTimeLoaded()
  }, [])


  const slides = [
    {
        key: 1,
        title: 'Register',
        desc: 'provide us your details',
        image: require('./components/images/welcome_1.png')
    },
    {
        key: 2,
        title: 'Request',
        desc: 'select the documents you need',
        image: require('./components/images/welcome_2.png')
    },
    {
        key: 3,
        title: 'Receive',
        desc: 'anything will be right at your hand',
        image: require('./components/images/welcome_3.png')
    }
  ];

  const handleDone = () => {
    setIsFirstTimeLoad(false);
    AsyncStorage.setItem('isFirstTimeOpen', 'no');
  };

  if (loading) return null;

  if (isFirstTimeLoad) return (
    <>
      <StatusBar hidden/>
      <Welcome onDone={handleDone} slides={slides}/>
    </>
  );

  if(!isFirstTimeLoad) return (
    <View>
      <Text>Login Page</Text>
    </View>
  )
    
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
