import React, { useState } from "react";
import { View, Switch } from "react-native";

interface ToggleSwitchProps {
  deviceState?: boolean;
  onPress?: () => void;
}

const ToggleSwitch = ({ deviceState = false, onPress }: ToggleSwitchProps) => {
  return (
    <View>
      <Switch
        trackColor={{ false: "#767577", true: "#47bda6" }}
        thumbColor={deviceState ? "#ebfcf9" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onPress}
        value={deviceState}
        style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
      />
    </View>
  );
};

export default ToggleSwitch;
