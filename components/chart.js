import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";


function Chart() {
    return(
        <View>
            <Text style={styles.title}>History</Text>
            <View style={btn.row}>
                <Pressable style={btn.box}><Text style={btn.text}>1D</Text></Pressable>
                <Pressable style={[btn.box, btn.btnActive]}><Text style={[btn.textActive]}>1W</Text></Pressable>
                <Pressable style={btn.box}><Text style={btn.text}>1M</Text></Pressable>
                <Pressable style={btn.box}><Text style={btn.text}>1Y</Text></Pressable>
                <Pressable style={btn.box}><Text style={btn.text}>ALL</Text></Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color : '#032A41',
        fontSize: 25,
        paddingLeft: 25,
        fontWeight: '600',
        paddingTop: 20,
    },
});

const btn = StyleSheet.create({
    row: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, 
    box:{
        flex: 1,
        padding: 5
    },
    btnActive: {
        backgroundColor: '#1CCB96',
        borderRadius: 20
    },
    text: {
        color: '#A9AEB6',
        textAlign: 'center',
    },  
    textActive: {
        color: '#fff',
        textAlign: 'center',
    }
});

export default Chart;