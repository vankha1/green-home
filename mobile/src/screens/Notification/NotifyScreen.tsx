import * as React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { NotifyElement } from "../../redux/slice/notifySlice";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import NotifyCard from "../../components/NotifyCard/NotifyCard";
import { useSelector } from "react-redux";
import { notifyListSelector } from "../../redux/selector";

const NotifyScreen = (): JSX.Element => {
  const navigator = useNavigation();
  const list = useSelector(notifyListSelector);

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigator.goBack()}
        >
          <MaterialCommunityIcons name="arrow-left" size={30} color="#34291D" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
      <ScrollView contentContainerStyle={styles.notify}>
        {list.length > 0 &&
          list.map((element: NotifyElement, i: number) => (
            <NotifyCard
              key={i}
              type={element.title}
              message={element.message}
              id={i}
              isRead={element.isRead}
            />
          ))}
        {list.length == 0 && (
          <Text style={[styles.text]}>Không có thông báo mới</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default NotifyScreen;
