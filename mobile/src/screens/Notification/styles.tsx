import { StatusBar, StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.mainBackground,
    marginTop: StatusBar.currentHeight || 0,
  },
  navbar: {
    flexDirection: "row",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 20,
  },
  notify: {
    alignItems: "center",
    padding: 10,
  },
  text: {
    marginTop: 20,
  },
});

export default styles;
