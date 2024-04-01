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
import {
  addNotify,
  fanStatus,
  luminosityStatus,
  soilMoistureStatus,
  temperatureStatus,
} from "../../redux/slice/notifySlice";
import useNotifications from "../../hook/useNotification";

interface EnviromentCardType {
  id: string;
  nameSensor: string;
  nameDevice: string;
  bgColor: string;
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  data: number;
  measure: string;
  lowerLimit: number;
  upperLimit: number;
}

const temperatureArray: number[] = [];

const HomeScreen = ({ navigation }: any) => {
  const temperatureState = useSelector(temperatureSelector);
  const moistureState = useSelector(moistureSelector);
  const humidityState = useSelector(humiditySelector);
  const luminosityState = useSelector(luminositySelector);

  const { schedulePushNotification } = useNotifications();

  const dispatch = useDispatch();

  const data: EnviromentCardType[] = [
    {
      id: "1",
      nameSensor: "Temperature",
      nameDevice: "Fan Speed",
      bgColor: "#5fc698",
      iconName: "fan",
      data: temperatureState.temperature,
      measure: "\u00B0C",
      lowerLimit: 15,
      upperLimit: 35,
    },
    {
      id: "2",
      nameSensor: "Soil Moisture",
      nameDevice: "Water pump",
      bgColor: "#69bfca",
      iconName: "water-alert",
      data: moistureState.moisture,
      measure: "%",
      lowerLimit: 45,
      upperLimit: 85,
    },
    {
      id: "3",
      nameSensor: "Luminosity",
      nameDevice: "Ceiling light",
      bgColor: "#dfd067",
      iconName: "ceiling-light",
      data: luminosityState.luminosity,
      measure: "LUX",
      lowerLimit: 15,
      upperLimit: 200,
    },
    {
      id: "4",
      nameSensor: "Humidity",
      nameDevice: "Fan Speed",
      bgColor: "#f5a890",
      iconName: "air-humidifier",
      data: humidityState.humidity,
      measure: "%",
      lowerLimit: 20,
      upperLimit: 80,
    },
  ];

  useEffect(() => {
    const sendNotify = async (title: string, message: string) => {
      await schedulePushNotification(title, message);
      dispatch(addNotify({ title, message }));
    };

    if (
      temperatureState.temperature < 13 ||
      temperatureState.temperature > 35
    ) {
      sendNotify("Warning", "Nhiệt độ vượt quá giới hạn !!!");
      dispatch(temperatureStatus({ status: false }));
    }
    dispatch(updateTemperatureArray({ value: temperatureState.temperature }));
  }, [temperatureState.temperature]);

  useEffect(() => {
    const sendNotify = async (title: string, message: string) => {
      await schedulePushNotification(title, message);
      dispatch(addNotify({ title, message }));
    };

    if (moistureState.moisture < 45 || moistureState.moisture > 85) {
      sendNotify("Warning", "Độ ẩm đất vượt quá giới hạn !!!");
      dispatch(soilMoistureStatus({ status: false }));
    }
    dispatch(updateMoistureArray({ value: moistureState.moisture }));
  }, [moistureState.moisture]);

  useEffect(() => {
    const sendNotify = async (title: string, message: string) => {
      await schedulePushNotification(title, message);
      dispatch(addNotify({ title, message }));
    };

    if (luminosityState.luminosity < 15 || luminosityState.luminosity > 200) {
      sendNotify("Warning", "Cường độ vượt quá giới hạn !!!");
      dispatch(luminosityStatus({ status: false }));
    }
    dispatch(updateLuminosityArray({ value: luminosityState.luminosity }));
  }, [luminosityState.luminosity]);

  useEffect(() => {
    const sendNotify = async (title: string, message: string) => {
      await schedulePushNotification(title, message);
      dispatch(addNotify({ title, message }));
    };

    if (humidityState.humidity < 20 || humidityState.humidity > 80) {
      sendNotify("Warning", "Tốc độ quạt vượt quá giới hạn !!!");
      dispatch(fanStatus({ status: false }));
    }
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
          measure={item.measure}
          lowerLimit={item.lowerLimit}
          upperLimit={item.upperLimit}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export const tempArrayChart = temperatureArray;
export default HomeScreen;
