import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [fontsLoaded] = useFonts({
    'Inter_900Black': require('@expo-google-fonts/inter/900Black/Inter_900Black.ttf'),
    'CraftyGirls-Regular': require('./assets/fonts/CraftyGirls-Regular.ttf'),
  });

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Hello</Text>
        <Text style={styles.subtitleText}>my name is</Text>
        <View style={styles.nameContainer}>
          <TextInput
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            style={styles.nameText}
            placeholderTextColor="#999"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Inter_900Black',
    flex: 1,
    backgroundColor: '#df0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 90,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  subtitleText: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center'
  },
  nameContainer: {
    width: '100%',
    height: '55%',
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 70,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'CraftyGirls-Regular'
  }
});
