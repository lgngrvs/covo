import { Text, View, StyleSheet} from 'react-native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';


export default function ProfileScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>profile screen</Text>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => {
            const signIn = async () => {
              try {
                await GoogleSignin.hasPlayServices();
                const response = await GoogleSignin.signIn();
                if (isSuccessResponse(response)) {
                  setState({ userInfo: response.data });
                } else {
                  // sign in was cancelled by user
                }
              } catch (error) {
                if (isErrorWithCode(error)) {
                  switch (error.code) {
                    case statusCodes.IN_PROGRESS:
                      // operation (eg. sign in) already in progress
                      break;
                    case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                      // Android only, play services not available or outdated
                      break;
                    default:
                    // some other error happened
                  }
                } else {
                  // an error that's not related to google sign in occurred
                }
              }
            };
          }}
        />;


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