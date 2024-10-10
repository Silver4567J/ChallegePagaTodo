import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import ListaBancosScreen from './src/screens/ListaBancos';

export default function App() {
  return (
    <SafeAreaView styles={styles.container}>
      <Text style={styles.title}>Desafio React Native!</Text>
      <ListaBancosScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%'
  },
  title: {
    textAlign: 'center',
    fontSize: 30
  }
});
