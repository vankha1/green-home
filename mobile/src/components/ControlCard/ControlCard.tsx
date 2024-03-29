import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import styles from "./styles";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ControlCardProps {
  deviceName: string;
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  state: boolean;
  onPress: () => void;
}
const ControlCard = ({ deviceName, iconName, state, onPress }: ControlCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.device}>
        <MaterialCommunityIcons name={iconName} size={50} color={state ? "#47bda6" : "#597166"} />
        <View style={styles.info}>
          <Text style={styles.deviceName}>{deviceName}</Text>
          <Text style={styles.dateModify}> 9PM, March 14th, 2024</Text>
        </View>
      </View>
      <View style={styles.switch}>
        <ToggleSwitch deviceState={state} onPress={onPress}/>
      </View>
    </View>
  );
};

export default ControlCard;
