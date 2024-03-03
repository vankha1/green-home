import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

var maxWidth = Dimensions.get('window').width //full width
var maxHeight = Dimensions.get('window').height //full height

const styles = StyleSheet.create({
    container: {
        height: maxHeight,
        alignItems: 'flex-start',
        position: 'relative',
    },
    generalTitleWrapper: {
        position: 'absolute',
        top: maxHeight / 4,
        paddingHorizontal: 36
    },
    firstTitle: {
        fontWeight: 'bold',
        fontSize: SIZES.xxxLarge,
    },
    secondTitle: {
        fontSize: SIZES.medium,
        color: COLORS.gray2
    },
    loginForm: {
        position: 'absolute',
        bottom: maxHeight / 2.2,
        width: maxWidth - 5,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
    },
    btnContainer: {
        position: 'absolute',
        bottom: maxHeight / 5,
        right: 10,
        paddingHorizontal: 36,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    loginBtnImage: {
        width: "100%",
        height: "100%"
    },
    startedText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: COLORS.buttonBg,
        padding: 5,
    },
})

export default styles