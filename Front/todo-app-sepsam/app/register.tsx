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
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

const Register = () => {
  // VARIABLES
  const { signUp } = useContext(AuthContext);
  const theme = useColorScheme() ?? "light";
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

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
        <ThemedText
          style={{
            fontSize: 28,
            fontStyle: "italic",
            marginTop: 0,
            padding: 5,
          }}
        >
          Signup
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
            placeholder="username"
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
              backgroundColor: "dodgerblue",
              height: 50,
              borderRadius: 5,
            }}
            onPress={() => {
              signUp(userInfo);
            }}
            // disabled={isLoading}
          >
            <ThemedText
              style={{
                textAlign: "center",
                marginVertical: "auto",
                fontSize: 22,
                color: "white",
              }}
            >
              Signup
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
        <View>
          <ThemedText>
            Already have an account?{" "}
            <Link href={{ pathname: "/" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 22,
                  fontStyle: "italic",
                  color: "dodgerblue",
                }}
              >
                Login
              </Text>
            </Link>
          </ThemedText>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Register;
