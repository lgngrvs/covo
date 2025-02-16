import { Stack } from "expo-router";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function RootLayout() {

  GoogleSignin.configure({iosClientId: '56256122369-vj3el9qil0v0qaakhjb5opci6onegqj5.apps.googleusercontent.com'});

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
      <Stack.Screen name="+not-found"/>
    </Stack>
  );
}
