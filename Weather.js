import React from "react";
import {StyleSheet, View, Text} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Weather({temp}){
    return (
        <View style={styles.container}>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name="weather-sunny" size={96} color="black" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer} ></View>
        </View>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequeired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Haze", 
        "Mist", 
        "Dust", 
        "Clouds"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})