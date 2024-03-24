import { FlatList, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { View } from "react-native";
import Header from "../../components/Header/Header";
import ControlCard from "../../components/ControlCard/ControlCard";
import ControlSlider from "../../components/ControlSlider/ControlSlider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
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
  /* {
    id: "Lamp 4",
    iconName: "lightbulb",
    state: false,
  },
  {
    id: "Lamp 5",
    iconName: "lightbulb",
    state: false,
  }, */
];

interface ControlSliderType {
  id: string;
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
}

const data0: ControlSliderType[] = [
  {
    id: "pump 1",
    iconName: "water-pump",
  },
  {
    id: "pump 2",
    iconName: "water-pump",
  },
  {
    id: "Fan system",
    iconName: "fan",
  },
];

const ControlScreen = () => {
  const navigation = useNavigation();
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
          state={item.state}
        />
      );
    } else {
      return <ControlSlider deviceName={item.id} iconName={item.iconName} />;
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
