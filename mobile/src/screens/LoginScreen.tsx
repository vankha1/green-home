import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../components/Input";

const LoginScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <ScrollView contentContainerStyle={[]}>
      <Input value={email} onChange={setEmail} placeholder={"Email"} />
      <Input
        value={password}
        onChange={setPassword}
        password
        placeholder={"Password"}
      />
    </ScrollView>
  );
};

export default LoginScreen;
