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
  bgColor: string;
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
}

const data: EnviromentCardType[] = [
  {
    id: "1",
    bgColor: "#5fc698",
    iconName: "fan",
  },
  {
    id: "2",
    bgColor: "#69bfca",
    iconName: "water-alert",
  },
  {
    id: "3",
    bgColor: "#dfd067",
    iconName: "ceiling-light",
  },
  {
    id: "4",
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
        <EnviromentCard bgColor={item.bgColor} iconName={item.iconName} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
export default HomeScreen;
