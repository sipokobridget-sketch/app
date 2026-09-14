import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native';
import { SectionList, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World, i can code on all phones!</Text>
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
  },
});
<View>
  <Text>Welcome to my app!</Text>
  <Text>Enter Name: </Text>
  <TextInput placeholder="Enter name" />
  <Text> Enter Surname:</Text>
  <TextInput placeholder=" surname" />
  <Button title="Add User" />
</View>

export default function App() {
  return (
    <View style={styles.container}>
      <Text>I found the App.tsx and my name is Bridget</Text>

      <Text> Hellp world, I can code now </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    paddingTop: 40,
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  },
});