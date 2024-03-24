import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        width:'95%',
        backgroundColor: '#FFFEFE',
        alignSelf: 'center',
        marginTop: 20,
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20,
    },
    device:{
        flexDirection: 'row',
    },
    info:{
        justifyContent: 'space-between',
        marginLeft: 10,
        
    },
    deviceName:{
        color:'#5FC698',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    dateModify:{
        fontSize: 10,
        fontWeight: 'normal',
    },
    button: {
        backgroundColor: '#FFFFFF1A',
        padding: 5,
        borderRadius: 5,
        marginTop: 5
    },
    line: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    switch:{
        justifyContent: 'space-between'
    }
})

export default styles