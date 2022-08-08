import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Prediction from './components/prediction'
import OldPrice from './components/oldPrice'
import Header from './components/header'
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    'Inter_light': require('./assets/font/Inter-Light-BETA.ttf'),
    'Inter': require('./assets/font/Inter-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  } 

  var oldPrices = [];
  var resultOldPrices = [
    { date: '20.10.2022', price: '$10,000.00', pourcentage: '3%', state: 'bull' },
    { date: '21.10.2022', price: '$11,000.00', pourcentage: '2%', state: 'bear' },
    { date: '22.10.2022', price: '$9,500.00',  pourcentage: '5%', state: 'bear' },
    { date: '23.10.2022', price: '$12,000.00', pourcentage: '4%', state: 'bull' },
    { date: '24.10.2022', price: '$10,000.00', pourcentage: '6%', state: 'bear'},
    { date: '24.10.2022', price: '$10,000.00', pourcentage: '6%', state: 'bear'},
    { date: '24.10.2022', price: '$10,000.00', pourcentage: '6%', state: 'bear'},
    { date: '24.10.2022', price: '$10,000.00', pourcentage: '6%', state: 'bear'},
  ];

  resultOldPrices.reverse();

  for(let i = 0; i < resultOldPrices.length; i++) {
    oldPrices.push(
      <OldPrice 
        price={resultOldPrices[i].price} 
        pourcentage={resultOldPrices[i].pourcentage} 
        date={resultOldPrices[i].date} 
        state={resultOldPrices[i].state}
        key={i}
      />
    )
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Prediction price={'$10,000.00'} pourcentage={'3%'} />
      <ScrollView>
        {oldPrices}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    margin: 20,
  },
  Header: {
    opacity:0,
  }

});
