import { Image, Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./styles";
import { icons } from "../../constants";
import { useState } from "react";

interface InputProps {
  value: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  password?: boolean;
}

const Input = (props: InputProps) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChange}
        secureTextEntry={!isVisiblePassword && props.password}
        style={[styles.input]}
      />
      {props.password ? (
        <Pressable
          style={styles.visiblePasswordWrapper}
          onPress={() => setIsVisiblePassword(!isVisiblePassword)}
        >
          {!isVisiblePassword && (
            <Image
              source={icons.hiddenPassword}
              style={styles.visiblePassword}
            />
          )}
          {isVisiblePassword && (
            <Image
              source={icons.visiblePassword}
              style={styles.visiblePassword}
            />
          )}
        </Pressable>
      ) : (
        ""
      )}
    </View>
  );
};

export default Input;
