import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.blueSquare}>
        <Text style={styles.buttonText}>Button</Text>
      </View>
      

      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueSquare: {
    backgroundColor: 'lightblue',
    borderColor: 'blue',
    borderWidth: 5,
  },
  buttonText: {
    fontSize: 50,
    fontWeight: 'bold',
  }
});
