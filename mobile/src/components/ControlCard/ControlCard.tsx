import React from "react";
import {Text,View,Image, StyleSheet} from "react-native";
import styles from "./styles"
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const ControlCard = () => {
    return (
      <View style={styles.container}> 
        <View style={styles.device}>
        <MaterialCommunityIcons name="lightbulb" size={50} color="#597166" />
          <View style={styles.info}>
            <Text style={styles.deviceName}>Lamp 1</Text>
            <Text style={styles.dateModify}> 9PM, March 14th, 2024</Text>
          </View>
        </View>
        <View>
            <ToggleSwitch/>
        </View>

      </View>
    )
  }

export default ControlCard