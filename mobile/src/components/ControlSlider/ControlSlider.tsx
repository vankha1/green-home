import React from "react";
import {Text,View,Image, StyleSheet} from "react-native";
import styles from "./styles"
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ControlSlider = () => {
    return (
      <View style={styles.container}>
        <View style={styles.topContent}>
            <View style={styles.info}>
                <Text style={styles.deviceName}>Pump 1</Text>
                <Text style={styles.dateModify}> 9PM, March 14th, 2024</Text>
            </View>
            <MaterialCommunityIcons name="water-pump" size={50} color="#597166" />
        </View>
        <Text> This is slider</Text>
      </View>
    )
  }

export default ControlSlider