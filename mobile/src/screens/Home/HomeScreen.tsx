import {
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import Header from "../../components/Header/Header";

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/images/profile.png')}
        style={styles.profileImage}
      />
      <Header navigation={navigation}/>
      <View style={styles.header}>
        <Text>Home</Text>
      </View>
    </View>
  );
};
export default HomeScreen;
