import { Stack } from "expo-router";

export default function MainLayout() {
  return (
    <Stack
      initialRouteName="mainPage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="mainPage" />
    </Stack>
  );
}
