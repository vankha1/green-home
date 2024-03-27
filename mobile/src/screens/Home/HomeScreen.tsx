import { FlatList, Image } from "react-native";
import styles from "./styles";
import Header from "../../components/Header/Header";
import EnviromentCard from "../../components/EnviromentCard/EnviromentCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  humiditySelector,
  luminositySelector,
  moistureSelector,
  temperatureSelector,
} from "../../redux/selector";
import { updateTemperatureArray } from "../../redux/slice/temperatureSlice";
import { useEffect } from "react";
import { updateMoistureArray } from "../../redux/slice/moistureSlice";
import { updateLuminosityArray } from "../../redux/slice/luminositySlice";
import { updateHumidityArray } from "../../redux/slice/humiditySlice";

interface EnviromentCardType {
  id: string;
  nameSensor: string;
  nameDevice: string;
  bgColor: string;
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  data: number;
}

const temperatureArray: number[] = [];

const HomeScreen = ({ navigation }: any) => {
  const temperatureState = useSelector(temperatureSelector);
  const moistureState = useSelector(moistureSelector);
  const humidityState = useSelector(humiditySelector);
  const luminosityState = useSelector(luminositySelector);

  const dispatch = useDispatch();

  const data: EnviromentCardType[] = [
    {
      id: "1",
      nameSensor: "Temperature",
      nameDevice: "Fan Speed",
      bgColor: "#5fc698",
      iconName: "fan",
      data: temperatureState.temperature,
    },
    {
      id: "2",
      nameSensor: "Soil Moisture",
      nameDevice: "Water pump",
      bgColor: "#69bfca",
      iconName: "water-alert",
      data: moistureState.moisture,
    },
    {
      id: "3",
      nameSensor: "Luminosity",
      nameDevice: "Ceiling light",
      bgColor: "#dfd067",
      iconName: "ceiling-light",
      data: luminosityState.luminosity,
    },
    {
      id: "4",
      nameSensor: "Humidity",
      nameDevice: "Fan Speed",
      bgColor: "#f5a890",
      iconName: "air-humidifier",
      data: humidityState.humidity,
    },
  ];

  useEffect(() => {
    dispatch(updateTemperatureArray({ value: temperatureState.temperature }));
  }, [temperatureState.temperature]);

  useEffect(() => {
    dispatch(updateMoistureArray({ value: moistureState.moisture }));
  }, [moistureState.moisture]);

  useEffect(() => {
    dispatch(updateLuminosityArray({ value: luminosityState.luminosity }));
  }, [luminosityState.luminosity]);

  useEffect(() => {
    dispatch(updateHumidityArray({ value: humidityState.humidity }));
  }, [humidityState.humidity]);

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={
        <>
          <Image
            source={require("../../../assets/images/profile.png")}
            style={styles.profileImage}
          />
          <Header navigation={navigation} />
        </>
      }
      data={data}
      renderItem={({ item }) => (
        <EnviromentCard
          data={item.data}
          nameSensor={item.nameSensor}
          nameDevice={item.nameDevice}
          bgColor={item.bgColor}
          iconName={item.iconName}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export const tempArrayChart = temperatureArray;
export default HomeScreen;
