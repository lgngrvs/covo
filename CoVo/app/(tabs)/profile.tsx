import { Text, View, StyleSheet} from 'react-native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';



export default function ProfileScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>profile screen</Text>
        <GoogleSigninButton
  size={GoogleSigninButton.Size.Wide}
  color={GoogleSigninButton.Color.Dark}
  onPress={() => {
    // initiate sign in
  }}>;</GoogleSigninButton>
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