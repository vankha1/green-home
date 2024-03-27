import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "./styles";
import { COLORS } from "../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { logout } from "../../redux/slice/loginSlice";
import { useDispatch } from "react-redux";

const SettingScreen = () => {
  const [pressed, setPressed] = useState<boolean>(false);
  const dispatch = useDispatch()
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/profile.png")}
          style={styles.img}
        />
        <Text style={[styles.username, { color: COLORS.gray }]}>Van Kha</Text>
      </View>

      <View style={styles.info}>
        <View style={styles.infoTitle}>
          <MaterialCommunityIcons size={30} name="information" />
          <Text style={styles.infoText}>Thông tin phần mềm</Text>
        </View>
        <Text style={styles.content}>
          Đây là phần mềm quản lý nhà kính do nhóm chúng tôi thực hiện !! Còn
          còn nhiều chỗ chưa hoàn thiện nhưng vẫn đáp ứng những chức năng cơ bản
          nhất.
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Pressable
          onPress={() => {
            setPressed(!pressed);
            dispatch(logout());
            navigation.navigate("HomeScreen" as never); // string "Login" must be defined in the navigation. In this case, this navigation is AuthNavigation.tsx
          }}
        >
          <MaterialCommunityIcons
            name="logout"
            color={COLORS.buttonBg}
            size={50}
            style={pressed ? styles.onPress : null}
          />
        </Pressable>
        <Text style={{ color: COLORS.buttonBg, fontSize: 20 }}>Log out</Text>
      </View>
    </View>
  );
};
export default SettingScreen;
