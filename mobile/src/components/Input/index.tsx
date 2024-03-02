import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

interface InputProps {
  value: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  password?: boolean;
}

const Input = (props: InputProps) => {
  return (
    <View>
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChange}
        secureTextEntry={props.password}
      />
    </View>
  );
};

export default Input;
