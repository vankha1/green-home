import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
// import color from '../../styles/color'

const styles = StyleSheet.create({
  container: {
    width: "80%",
    borderWidth: 0,
    borderColor: "#A2A9B8",
    position: "relative",
    // backgroundColor: 'white',
  },
  input: {
    paddingHorizontal: 0,
    height: 45,
    // backgroundColor: 'white',
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.gray2,
    fontSize: SIZES.medium,
  },
  visiblePasswordWrapper: {
    position: "absolute",
    right: 0,
    top: 12,
    width: 25,
    height: 25
  },
  visiblePassword: {
    width: 20,
    height: 20,
  },
});

export default styles;
