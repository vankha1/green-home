import { Dimensions, StyleSheet } from 'react-native'
import { COLORS } from '../../constants'
var maxWidth = Dimensions.get('window').width //full width
var maxHeight = Dimensions.get('window').height //full height
const styles = StyleSheet.create({
    container: {
        width: maxWidth,
        height: maxHeight,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 30,
    },
    header: {
        width: maxWidth - 40,
        marginTop: 100,
        flexDirection: 'column',
        gap: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    img: {
        width: 90,
        height: 90,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 32,
        lineHeight: 38,
    },
    onPress: {
        color: COLORS.gray2,
    },
    info: {
        width: maxWidth - 40,
        height: 230,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 20,
    },
    infoTitle: {
        width: 225,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoText: {
        flexDirection: 'column',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 24,
    },
    content: {
        color: COLORS.gray,
        fontSize: 20,
        lineHeight: 24,
        marginLeft: 60,
    },
})

export default styles
