import { Image, Text, View } from "react-native";
import styles from "./styles";
import Button from "../Button/Button";
import { icons } from "../../constants";

const Header = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title]}>Welcome !!!</Text>

        <View>
          <Text style={styles.greeting}>Good morning, Mr. Simith</Text>
          <Text style={styles.greeting}>March 14, 2024</Text>
          <Text style={styles.greeting}>7:10 AM</Text>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button isLogin={false} addBtn>
          <Image source={icons.plusIcon} style={styles.icon} />
        </Button>
      </View>
    </View>
  );
};
export default Header;
