import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { useState } from "react";
interface ControlSliderProps {
  deviceName: string;
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  value: number;
  onChange: (speed: number) => void;
}

const ControlSlider = ({ deviceName, iconName, value, onChange }: ControlSliderProps) => {
  const [sliderValue, setSliderValue] = useState(value);

  const handleSliderChange = (newValue: number) => {
    setSliderValue(newValue);
    onChange(newValue);
  };
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
        style={{ width: "100%", height: 20 }}
        minimumValue={1}
        maximumValue={120}
        minimumTrackTintColor="#23B371"
        maximumTrackTintColor="#000000"
        thumbTintColor="#47BDA6"
        onValueChange={handleSliderChange}
        value={sliderValue}
        step={1}
      />
      <Text style={{ textAlign: "center", fontSize: 13 }}>{Math.round(sliderValue)}</Text>

    </View>
  );
};

export default ControlSlider;
