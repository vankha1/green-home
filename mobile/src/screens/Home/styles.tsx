import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20 ,
    },
    profileImage: {
        width: 50,
        height: 50,
        position: 'absolute',
        borderRadius: 25,
        marginTop: 40,
        right: 20
    },
    header : {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25,
    },
})

export default styles;