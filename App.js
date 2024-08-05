import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

    <View style={styles.subContainer}>
      <Text style={styles.textStyle}>Test Text</Text>
    </View>

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
  subContainer:{
    width: 200,
    height: 150,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 25,
    borderWidth:10,
    borderColor:"red"
  },
  textStyle: {
    color:'black',
    fontWeight:'bold',
    fontSize:32
  }
});
