import { StyleSheet, View, Text, Image } from 'react-native';

function OldPrice({ price, date, pourcentage, state, key }) {
  return (
      <View style={styles.card} key={key}>
        <View style={styles.image}>
            {
                state == 'bull' 
                ? <Image style={styles.image.img} source={require('./bull.png')} />
                : <Image style={styles.image.img} source={require('./bear.png')} />
            }
        </View>
        <View style={styles.date}>
            <Text style={styles.date.text}>{date}</Text>
            {
                state == 'bull' 
                ? <Text style={[styles.pourcentage, styles.bull]}>{pourcentage}</Text>
                : <Text style={[styles.pourcentage, styles.bear]}>{pourcentage}</Text>
            }

        </View>
        <View style={styles.price}>
            <Text style={styles.price.text}>{price}</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 20,
        marginBottom: 2
    },
    image: {
        flex:1,
        
        img: {
            width: 50,
            height: 50,
            resizeMode: 'contain',
        }
    },
    date: {
        flex: 2,
        text: {
            color: '#03314B',
            fontWeight: '700',
            fontSize: 20
        },
    },
    pourcentage: {
        color: '#1DCC98',
            fontWeight: '600',
            fontSize: 18
    },
    price: {
        text: {
            fontWeight: '700',
            color: '#03314B',
            fontSize: 20
        }
    },
    bear: {
        color: '#FF9C9E',
    },
    bull: {
        color: '#1DCC98',
    }

});


export default OldPrice;