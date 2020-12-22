// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from './Loading'
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './Weather';

{/* <StatusBar style="auto" /> */}

// weather api key
const API_KEY = "d53a53a1085f8a0d1795e949cabbaff7";

 export default class extends React.Component {
   state = {
     isLoading: true
   };

   getWeather = async (latitude, longitude) => {
    // const { data } = await axios.get(
    //   `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    // );
    // console.log({data})
    const { 
      data: {
        main: {temp},
        weather
      } } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({ 
      isLoading: false, 
      condition: weather[0].main, 
      temp
    });
   };

   getLocation = async() => {
     try {
      await Location.requestPermissionsAsync();
      const { 
        coords: {latitude, longitude} 
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading : false });
     } catch (error){
       Alert.alert("Can't find you.", "So sad");
       console.log(error);
     }
   };

   componentDidMount(){
     this.getLocation();
   };

  render(){
    const { isLoading, condition, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}


