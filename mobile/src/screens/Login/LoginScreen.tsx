import { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

import Input from "../../components/Input/Input";
import styles from "./styles";
import { Image, Text, View } from "react-native";
import Button from "../../components/Button/Button";
import { COLORS } from "../../constants/theme";
import { icons } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigation = useNavigation();

  const isLogin = true;

  // useEffect(() => {
  //   if (isLogin) {
  //     navigation.navigate("Home" as never);
  //   }
  // }, []);

  const handleLogin = () => {
    console.log("Checkhere", email, password);
    navigation.navigate("HomeScreen" as never); // HomeScreen here must be the same as the name attribute in Stack.Screen in AuthNavigation.tsx
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
        <Input value={email} onChange={setEmail} placeholder={"Email"} />
        <Input
          value={password}
          onChange={setPassword}
          password
          placeholder={"Password"}
        />
      </View>

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
