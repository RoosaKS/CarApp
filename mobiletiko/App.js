import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  const buttonPressed = () => {
    Alert.alert("Hello", "You typed: " + text);
  }
  return (
    <View style={styles.container}>
      <TextInput 
        style={{width:200, borderColor: 'gray', borderWidth:1}}
        onChangeText={text => setText(text)}
      />
      <Button title ="Press me" onPress={buttonPressed} color='black'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
