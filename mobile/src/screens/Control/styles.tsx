import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: COLORS.mainBackground
    },
    profileImage: {
        width: 50,
        height: 50,
        position: 'absolute',
        borderRadius: 25,
        marginTop: 40,
        right: 0
    },
})

export default styles;