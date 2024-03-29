import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    col1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        marginLeft: 20,
        gap: -5,
    },
    header__warning: {
        color: 'yellow',
    },
    header__alert: {
        color: 'yellow',
    },
    header__read: {
        color: COLORS.gray2,
    },
    button: {
        color: 'red',
    },
})

export default styles
