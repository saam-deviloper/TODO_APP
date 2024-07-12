import { Stack } from "expo-router";

export default function MainLayout() {
  return (
    <Stack
      initialRouteName="/(App)"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(App)" />
    </Stack>
  );
}
