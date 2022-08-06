import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import Prediction from './components/prediction'
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    'Inter': require('./assets/font/Inter-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  } else

  return (
    <SafeAreaView style={styles.container}>
      <Prediction price={'$10,000.00'} pourcentage={'3%'} />
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

});
