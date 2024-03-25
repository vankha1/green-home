import {
  FlatList,
  Image,
  ListRenderItem,
  ScrollView,
  View,
} from "react-native";
import styles from "./styles";
import Header from "../../components/Header/Header";
import EnviromentCard from "../../components/EnviromentCard/EnviromentCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface EnviromentCardType {
  id: string;
  nameSensor: string;
  nameDevice: string;
  bgColor: string;
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
}

const data: EnviromentCardType[] = [
  {
    id: "1",
    nameSensor: "Temperature",
    nameDevice: "Fan Speed",
    bgColor: "#5fc698",
    iconName: "fan",
  },
  {
    id: "2",
    nameSensor: "Soil Moisture",
    nameDevice: "Water pump",
    bgColor: "#69bfca",
    iconName: "water-alert",
  },
  {
    id: "3",
    nameSensor: "Luminosity",
    nameDevice: "Ceiling light",
    bgColor: "#dfd067",
    iconName: "ceiling-light",
  },
  {
    id: "4",
    nameSensor: "Fan System",
    nameDevice: "Fan Speed",
    bgColor: "#f5a890",
    iconName: "air-humidifier",
  },
];

const HomeScreen = ({ navigation }: any) => {
  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={
        <>
          <Image
            source={require("../../../assets/images/profile.png")}
            style={styles.profileImage}
          />
          <Header navigation={navigation} />
        </>
      }
      data={data}
      renderItem={({ item }) => (
        <EnviromentCard
          nameSensor={item.nameSensor}
          nameDevice={item.nameDevice}
          bgColor={item.bgColor}
          iconName={item.iconName}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
export default HomeScreen;
