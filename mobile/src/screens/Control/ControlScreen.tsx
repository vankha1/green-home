import {FlatList } from "react-native-gesture-handler";
import styles from "./styles";
import {  View, } from "react-native"
import Header from "../../components/Header/Header";
import ControlCard from "../../components/ControlCard/ControlCard";
import ControlSlider from "../../components/ControlSlider/ControlSlider";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ControlCardType {
  id: string;
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  state: boolean;
}

const DATA: ControlCardType[] = [
  {
    id: "Lamp 1",
    iconName: "lightbulb",
    state: true,
  },
  {
    id: "Lamp 2",
    iconName: "lightbulb",
    state: false,
  },
  {
    id: "Lamp 3",
    iconName: "lightbulb",
    state: false,
  },
];

const ControlScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <ControlCard deviceName={item.id} iconName={item.iconName} state={item.state} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default ControlScreen;
