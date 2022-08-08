import { View, StyleSheet, Image, Text } from "react-native";

const months = [
    'January', 'February', 'March', 
    'April', 'May', 'June', 
    'July', 'August', 'September', 
    'October', 'November', 'December'
];

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth()); //January is 0!
var yyyy = today.getFullYear();

today = dd + ' ' + months[mm];

function Header() {
    return( 
        <View style={styles.row}>
            <Image style={styles.logo} source={require('./logo.png')} />
            <Text style={styles.title}>Gold Predictor</Text>
            <Text style={styles.date}>{today}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginBottom: 20,
        marginTop: 10
    },  
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginRight: 15
    },
    title: {
        flex: 2,
        color: '#032A41',
        fontSize: 18,
        fontWeight: '600'
    },
    date: {
        color: '#7E93A0',

    }

})

export default Header;