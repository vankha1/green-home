import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        marginTop: 20
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    }, 
    line: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#FFFFFF1A',
        padding: 5,
        borderRadius: 5,
        marginTop: 5
    }
})

export default styles