import { Text, View, StyleSheet} from 'react-native';


export default function ProfileScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>profile screen</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dad7cd',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#344e41',
    },
  });