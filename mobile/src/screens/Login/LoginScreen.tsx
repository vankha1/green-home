import { Image, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import Input from "../../components/Input/Input";
import styles from "./styles";
import Button from "../../components/Button/Button";
import { COLORS } from "../../constants/theme";
import { icons } from "../../constants";
import { useSelector } from "react-redux";
import { loginSelector } from "../../redux/selector";
import socket from "../../utils/socket";

const LoginScreen = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigation = useNavigation();

  const { isLogin, invalidAccount } = useSelector(loginSelector);

  useEffect(() => {
    if (isLogin) {
      navigation.navigate("HomeScreen" as never); // HomeScreen here must be the same as the name attribute in Stack.Screen in AuthNavigation.tsx
    }
  }, [isLogin]);

  const handleLogin = () => {
    console.log("Checkhere", username, password);
    setUsername("");
    setPassword("");
    let data = {
      from: "client",
      to: "authController",
      data: {
        username,
        password,
      },
    };
    socket.emit("transmission", data); // emit transmission and it'll be listened at index.ts file in backend
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {
          backgroundColor: COLORS.mainBackground,
        },
      ]}
    >
      <View style={styles.generalTitleWrapper}>
        <Text style={styles.firstTitle}>Welcome</Text>
        <Text style={styles.secondTitle}>Sign in to continue</Text>
      </View>

      <View style={styles.loginForm}>
        <Input value={username} onChange={setUsername} placeholder={"Email"} />
        <Input
          value={password}
          onChange={setPassword}
          password
          placeholder={"Password"}
        />
      </View>
      {invalidAccount && (
        <Text style={{ fontSize: 16, color: "red", fontWeight: "bold" }}>
          Username or password is invalid
        </Text>
      )}

      <View style={styles.btnContainer}>
        <Text style={styles.startedText}>Get Started</Text>
        <Button isLogin={true} onPress={() => handleLogin()}>
          <Image
            source={icons.rightarrow}
            style={styles.loginBtnImage}
            resizeMode="contain"
          />
        </Button>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
