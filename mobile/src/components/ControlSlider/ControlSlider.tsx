import React from "react";
import {Text,View,Image, StyleSheet} from "react-native";
import styles from "./styles"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Slider from '@react-native-community/slider';
interface ControlSliderProps {
  deviceName: string;
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
}

const ControlSlider = ({deviceName,iconName}: ControlSliderProps) => {
    return (
      <View style={styles.container}>
        <View style={styles.topContent}>
            <View style={styles.info}>
                <Text style={styles.deviceName}>{deviceName}</Text>
                <Text style={styles.dateModify}> 9PM, March 14th, 2024</Text>
            </View>
            <MaterialCommunityIcons name={iconName} size={50} color="#597166" />
        </View>
        <Slider
            style={{width: 280, height: 20}}
            minimumValue={0.3}
            maximumValue={1}
            minimumTrackTintColor="#23B371"
            maximumTrackTintColor="#000000"
            thumbTintColor="#47BDA6"

          />
      </View>
    )
  }

export default ControlSlider
