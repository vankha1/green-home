import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/theme'

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        borderRadius: 8,
        backgroundColor: COLORS.buttonBg
    },
    containerLogin: {
        width: 80,
        height: 60,
    },
    onPress: {
        backgroundColor: COLORS.secondary
    },

    addBtn: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: COLORS.buttonBg,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles