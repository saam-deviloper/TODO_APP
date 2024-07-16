import { ThemedText } from "@/components/ThemedText";
import ThemedTextInput from "@/components/ThemedTextInput";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { Dimens } from "@/constants/Dimens";
import { AuthContext } from "@/contexts/AuthProvider";
import { Link } from "expo-router";
import React, { useContext, useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

const login = () => {
  //  VARIABLES
  const theme = useColorScheme() ?? "light";
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const { signIn, isLoading } = useContext(AuthContext);
  return (
    <>
      <KeyboardAvoidingView
        style={{
          display: "flex",
          // padding: 8,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: Dimens.HEIGHT - 30,
          width: Dimens.WIDTH,
          backgroundColor:
            theme === "light"
              ? Colors.light.background
              : Colors.dark.background,
        }}
      >
        <ThemedText style={{ fontSize: 28, fontStyle: "italic", padding: 5 }}>
          Login
        </ThemedText>
        <ThemedView
          style={{
            width: "80%",
            justifyContent: "space-around",
            alignItems: "center",
            height: "50%",
          }}
        >
          {/* <Text>username</Text> */}
          <ThemedTextInput
            placeHolder="username"
            style={{
              borderWidth: 1,
              borderColor: "grey",
              width: "100%",
              height: 50,
              borderRadius: 5,
              paddingHorizontal: 8,
            }}
            onChangeText={(username) =>
              setUserInfo({ ...userInfo, username: username })
            }
          />
          {/* <Text>password</Text> */}
          <ThemedTextInput
            placeHolder="password"
            passwordRules={"*"}
            style={{
              borderWidth: 1,
              borderColor: "grey",
              width: "100%",
              height: 50,
              borderRadius: 5,
              paddingHorizontal: 8,
            }}
            onChangeText={(password) =>
              setUserInfo({ ...userInfo, password: password })
            }
          />
          <TouchableOpacity
            style={{
              width: "100%",
              backgroundColor: "green",
              height: 50,
              borderRadius: 5,
            }}
            onPress={() => signIn(userInfo)}
            disabled={isLoading}
          >
            <ThemedText
              style={{
                textAlign: "center",
                marginVertical: "auto",
                fontSize: 22,
                color: "white",
              }}
            >
              Login
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
        <View>
          <ThemedText>
            Dont have an account?{" "}
            <Link href={{ pathname: "register" }}>
              <ThemedText
                style={{
                  fontWeight: "bold",
                  fontSize: 22,
                  fontStyle: "italic",
                  color: "green",
                }}
              >
                Register
              </ThemedText>
            </Link>
          </ThemedText>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default login;
