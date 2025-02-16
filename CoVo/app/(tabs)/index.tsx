import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.welcome}>Welcome, Logan</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>home screen</Text>
        <Link href = "/(tabs)/events" style = {styles.button}>
          Go to listed events
      </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
      fontSize: 40, 
      padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#dad7cd',
  },
  headerContainer: {
    flex: 1
  }, 

  textContainer: {
    alignItems: 'center',
    flex: 1
  },
  text: {
    color: '#000',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#000',
  },
});