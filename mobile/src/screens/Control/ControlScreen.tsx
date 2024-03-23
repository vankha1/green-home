import { ScrollView } from "react-native-gesture-handler";
import { COLORS } from "../../constants/theme";
import styles from "./styles";
import { Image, View, Text } from "react-native"
import Header from "../../components/Header/Header";
import ControlCard from "../../components/ControlCard/ControlCard";
import ControlSlider from "../../components/ControlSlider/ControlSlider";
const ControlScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {
          backgroundColor: COLORS.mainBackground,
        },
      ]}
    >
      <View>
        <Header navigation={navigator}/>
        <ControlCard/>
        <ControlSlider/>
      </View>
      
    </ScrollView>
  );
}

export default ControlScreen;
