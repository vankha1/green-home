import { StyleSheet,StatusBar } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: COLORS.mainBackground,
        marginTop: StatusBar.currentHeight || 0,
    },
    navbar:{
        flexDirection: 'row'
    },
    header:{
        marginTop: 25,
        marginLeft: 10,
    },
    headerTitle:{
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 5,
        marginTop: 20,
    },
    greeting: {
        color: COLORS.gray,
        fontSize: 16,
    },
})

export default styles;