import { StyleSheet, View, Text, Image } from 'react-native';

function Prediction({ price, pourcentage }) {
  return (
      <View style={styles.prediction}>
        <View style={styles.left}>
          <Text style={styles.title}>Next prediction</Text>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.pourcentage}>{pourcentage}</Text>
        </View>
        <Image style={styles.image} source={require('./gold.png')} />       
      </View>
  );
}

const styles = StyleSheet.create({
  prediction: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#032A41',
    borderRadius: 20,
    justifyContent: 'space-between',
    padding: 25,
    alignItems: 'center'
  },
  left: {
    flexDirection: 'column',
    alignContent: 'center'
  },
  title: {
    fontFamily: 'Inter_light',
    color: '#7999B3',
    fontSize: 18,
    fontWeight: '300'
  },
  price:{
    fontFamily: 'Inter',
    color: '#fff',
    fontSize: 30,
    fontWeight: '500'
  },
  pourcentage: {
    fontFamily: 'Inter',
    color: '#1CCB96',
    fontSize: 14,
    textAlign: 'right'
  },
  image: {
    resizeMode: 'contain',
  }
});


export default Prediction;