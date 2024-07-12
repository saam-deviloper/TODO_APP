import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router/stack";
import * as SplashScreen from "expo-splash-screen";
import { useContext, useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Slot } from "expo-router";
import { AuthContext, AuthProvider } from "@/contexts/AuthProvider";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function RootLayoutContent() {
  const colorScheme = useColorScheme();
  const { session } = useContext(AuthContext);
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {/* <AuthProvider> */}
      {/* <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        </Stack> */}
      <Stack
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={session ? "(App)" : "login"}
      >
        {/* Optionally configure static options outside the route.*/}
        {/* <Stack.Screen name="(App)" options={{ headerShown: false }} /> */}

        {session ? (
          <Stack.Screen name="(App)" options={{ headerShown: false }} />
        ) : (
          <>
            <Stack.Screen name="login" options={{}} />
            <Stack.Screen name="register" options={{}} />
          </>
        )}
      </Stack>
      {/* </AuthProvider> */}
    </ThemeProvider>
  );
}
export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutContent />
    </AuthProvider>
  );
}
