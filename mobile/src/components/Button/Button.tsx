import { Pressable } from "react-native";
import styles from "./styles";
import { useState } from "react";

interface ButtonProps {
  children: JSX.Element | JSX.Element[];
  isLogin: boolean;
  onPress?: () => void;
}

const Button = (props: ButtonProps) => {
  const [pressed, setPressed] = useState<boolean>(false);

  return (
    <Pressable
      onPress={() => {
        setPressed(!pressed);
        props.isLogin && props.onPress ? props.onPress() : null;
      }}
      style={[
        styles.container,
        props.isLogin ? styles.containerLogin : null,
        pressed ? styles.onPress : null,
      ]}
    >
      {props.children}
    </Pressable>
  );
};
export default Button;
