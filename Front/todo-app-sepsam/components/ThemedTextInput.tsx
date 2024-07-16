import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { StyleSheet, TextInput, useColorScheme } from "react-native";

const ThemedTextInput = ({
  style,
  lightColor,
  darkColor,
  type = "default",
  placeHolder = "type...",
  ...props
}) => {
  const theme = useColorScheme() ?? "light"; // Move this inside the component
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <TextInput
      placeholder={placeHolder}
      placeholderTextColor={
        theme === "light" ? Colors.light.text : Colors.dark.text
      }
      style={[{ color }, type === "default" ? styles.default : style]}
      {...props}
    />
  );
};

export default ThemedTextInput;

const styles = StyleSheet.create({
  default: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "grey",
    width: "100%",
    height: 50,
    paddingHorizontal: 8,
  },
});
