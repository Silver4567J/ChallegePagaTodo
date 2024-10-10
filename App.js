import { StyleSheet, Text, View } from 'react-native';
import ListaBancosScreen from './src/screens/ListaBancos';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola, empezamos el desafio!</Text>
      <ListaBancosScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
