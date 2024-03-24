import * as React from "react";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { removeNotify, setIsRead } from "../../redux/slice/notifySlice";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/*
    NotifyCard component:
        type: 'warning' | 'alert',
        message: string
*/

const NotifyCard = (props: {
  id: number;
  type: string;
  message: string;
  isRead: boolean;
}): JSX.Element => {
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeNotify({ id }));
  };

  const handleFocus = (id: number) => {
    dispatch(setIsRead({ id }));
  };

  return (
    <Pressable style={styles.container} onPress={() => handleFocus(props.id)}>
      <View style={styles.col1}>
        {props.type === "Warning" && !props.isRead && (
          <MaterialCommunityIcons
            name="fridge-industrial-alert"
            size={30}
            width={30}
            height={30}
          />
        )}
        {props.type === "Warning" && props.isRead && (
          <MaterialCommunityIcons
            name="fridge-industrial-alert"
            size={30}
            width={30}
            height={30}
          />
        )}
        {props.type === "Alert" && !props.isRead && (
          <MaterialCommunityIcons
            name="fridge-industrial-alert"
            size={30}
            width={30}
            height={30}
          />
        )}
        {props.type === "Alert" && props.isRead && (
          <MaterialCommunityIcons
            name="fridge-industrial-alert"
            size={30}
            width={30}
            height={30}
          />
        )}
        <View style={styles.content}>
          <Text
            style={[
              { fontWeight: "bold", fontSize: 20, color: "black" },
              props.type === "Warning"
                ? styles.header__warning
                : styles.header__alert,
              props.isRead ? styles.header__read : null,
            ]}
          >
            {props.type === "Warning" ? "Cảnh báo" : "Báo động"}
          </Text>
          <Text
            style={[
              { fontWeight: "bold", fontSize: 16, color: "black" },
              props.isRead ? styles.header__read : null,
            ]}
            numberOfLines={2}
          >
            {props.message}
          </Text>
        </View>
      </View>
      <Pressable onPress={() => handleRemove(props.id)}>
        <MaterialCommunityIcons name="cancel" size={30} width={30} height={30} />
      </Pressable>
    </Pressable>
  );
};

export default NotifyCard;
