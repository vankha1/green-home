import React from "react";
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import {
  DailyHumiChart,
  DailyTempChart,
  DailySoMoChart,
  DailyLumiChart,
} from "../../components/DailyChart/DailyChart";
import Header from "../../components/Header/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const data = [
  { id: "temp", name: "Temperature", chart: <DailyTempChart /> },
  { id: "humi", name: "Humidity", chart: <DailyHumiChart /> },
  { id: "somo", name: "Soil Moisture", chart: <DailySoMoChart /> },
  { id: "lumi", name: "Luminosity", chart: <DailyLumiChart /> },
];

export default function Statistics() {
    const navigator = useNavigation()
  const renderItem = ({
    item,
  }: {
    item: { id: string; name: string; chart: React.ReactNode };
  }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      {item.chart}
    </View>
  );
  return (
    <View style={styles.container}>
        <TouchableOpacity style={{ marginLeft: 20, marginTop: 20}} onPress={() => navigator.goBack()} > 
			<MaterialCommunityIcons name="arrow-left" size={30} color="#34291D" />
		</TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}


