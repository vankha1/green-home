import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 80,
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 10,
        marginTop: 25,
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    greeting: {
        color: COLORS.gray,
        fontSize: 16,
    },
    buttonWrapper: {
        alignSelf: 'flex-end'
    }
})


export default styles