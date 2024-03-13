import { Text, View } from "react-native";
import styles from "./styles";
import Header from "../../components/Header/Header";

const HomeScreen = ({ navigation } : any) => {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <Text>HomeScreen</Text>
    </View>
  );
};
export default HomeScreen;
