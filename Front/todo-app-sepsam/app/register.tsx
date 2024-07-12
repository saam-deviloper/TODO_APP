import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React, { useContext, useState } from "react";
import { Link, router } from "expo-router";
import { Dimens } from "@/constants/Dimens";
import { AuthContext } from "@/contexts/AuthProvider";

const Register = () => {
  // VARIABLES
  const { signUp, session, isLoading } = useContext(AuthContext);
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
        }}
      >
        <Text style={{ fontSize: 28, fontStyle: "italic", marginTop: 0 }}>
          Signup
        </Text>
        <View
          style={{
            width: "80%",
            justifyContent: "space-around",
            alignItems: "center",
            height: "50%",
          }}
        >
          {/* <Text>username</Text> */}
          <TextInput
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
          <TextInput
            placeholder="password"
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
            <Text
              style={{
                textAlign: "center",
                marginVertical: "auto",
                fontSize: 22,
                color: "white",
              }}
            >
              Signup
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>
            Already have an account?{" "}
            <Link href={{ pathname: "/" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 22,
                  fontStyle: "italic",
                  color: "green",
                }}
              >
                Login
              </Text>
            </Link>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Register;
