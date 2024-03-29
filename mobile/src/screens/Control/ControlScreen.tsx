import { FlatList, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { View } from "react-native";
import Header from "../../components/Header/Header";
import ControlCard from "../../components/ControlCard/ControlCard";
import ControlSlider from "../../components/ControlSlider/ControlSlider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import socket from "../../utils/socket";
import { useState } from "react";
interface ControlCardType {
  id: string;
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  state: boolean;
}

const DATA: ControlCardType[] = [
  {
    id: "Led",
    iconName: "lightbulb",
    state: true,
  },
];

interface ControlSliderType {
  id: string;
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  onChange: (speed: number) => void;
}

const ControlScreen = () => {
  const [state, setState] = useState<boolean>(false);
  const [fanSpeed, setFanSpeed] = useState<number>(0);
  const [waterPump, setWaterPump] = useState<number>(0);
  const navigation = useNavigation();

  const handleClickLight = () => {
    const data = {
      from: "client",
      to: "ledController",
      data: {
        status: state ? 0 : 1,
      },
    };
    socket.emit("transmission", data);
  };

  const handleClickFan = (speed: number) => {
    const data = {
      from: "client",
      to: "fanController",
      data: {
        command: speed,
      },
    };
    socket.emit("transmission", data);
  };

  const handleClickWaterPump = (speed: number) => {
    const data = {
      from: "client",
      to: "waterpumpController",
      data: {
        command: speed,
      },
    };
    socket.emit("transmission", data);
  };

  const data0: ControlSliderType[] = [
    {
      id: "Pump",
      iconName: "water-pump",
      onChange: (speed: number) => handleClickWaterPump(speed),
    },
    {
      id: "Fan",
      iconName: "fan",
      onChange: (speed: number) => handleClickFan(speed),
    },
  ];

  const renderItem = ({
    item,
  }: {
    item: ControlCardType | ControlSliderType;
  }) => {
    if ("state" in item) {
      return (
        <ControlCard
          deviceName={item.id}
          iconName={item.iconName}
          state={state}
          onPress={() => {
            setState((prev) => !prev);
            handleClickLight();
          }}
        />
      );
    } else {
      return (
        <ControlSlider
          deviceName={item.id}
          iconName={item.iconName}
          value={fanSpeed}
          onChange={item.onChange}
        />
      );
    }
  };

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={
        <>
          <View style={styles.navbar}>
            <TouchableOpacity
              style={{ marginTop: 20 }}
              onPress={() => navigation.goBack()}
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color="#34291D"
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Controls</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.greeting}>Good morning, Mr. Simith</Text>
            <Text style={styles.greeting}>March 14, 2024</Text>
            <Text style={styles.greeting}>7:10 AM</Text>
          </View>
        </>
      }
      data={[...DATA, ...data0]}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<Text>No device found</Text>}
    />
  );
};

export default ControlScreen;
