import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { COLORS } from "../../constants";

interface EnviromentCardProps {
  bgColor: string;
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
}

const EnviromentCard = ({ bgColor, iconName }: EnviromentCardProps) => {
  const [state, setState] = useState<boolean>(false);

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.info}>
        <Text style={{ color: "#fff", fontSize: 16 }}>Temparature</Text>
        <Text style={{ color: "#fff", fontSize: 48 }}>23</Text>
        <Text style={{ color: "#fff", fontSize: 14 }}>{"\u00B0"}C</Text>
      </View>
      <View style={{ height: 100, width: 2, backgroundColor: "#FFFFFFB3" }} />
      <View style={styles.info}>
        <Text style={{ color: "#fff", fontSize: 16 }}>Fan Speed</Text>
        <View style={styles.line}>
          <MaterialCommunityIcons name="alert" size={16} color="white" />
          <Text style={{ color: "#fff", marginHorizontal: 5 }}>
            15 - 30 {"\u00B0"}C
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setState(!state)}
        >
          <View style={styles.line}>
            <MaterialCommunityIcons
              name={iconName}
              size={20}
              color={COLORS.gray}
            />
            <Text
              style={{
                color: COLORS.gray,
                fontWeight: "700",
                marginHorizontal: 7,
              }}
            >
              {state ? "ON" : "OFF"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default EnviromentCard;
