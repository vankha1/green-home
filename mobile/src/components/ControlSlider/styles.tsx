import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        width:'95%',
        backgroundColor: '#FFFEFE',
        alignSelf: 'center',
        marginTop: 20,
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:30,
        paddingRight:30,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 20,
    },
    topContent:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    info:{
    },
    deviceName:{
        color:'#5FC698',
        fontSize: 24,
        fontWeight: 'bold',
    },
    dateModify:{
        fontSize: 10,
        fontWeight: 'normal',
        marginLeft: 25,
    },
    line: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})

export default styles