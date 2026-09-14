import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Hello World, i can code on all phones!</Text>
      <Text style={styles.welcomeText}>I found the App.tsx and my name is Bridget</Text>
      <Text style={styles.welcomeText}>Hellp world, I can code now</Text>

      <View style={styles.formContainer}>
        <Text>Welcome to my app!</Text>
        <Text>Enter Name: </Text>
        <TextInput placeholder="Enter name" />
        <Text>Enter Surname:</Text>
        <TextInput placeholder="surname" />
        <Button title="Add User" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  formContainer: {
    width: '100%',
    maxWidth: 320,
    marginTop: 20,
  },
  welcomeText: {
    paddingTop: 10,
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  },
});