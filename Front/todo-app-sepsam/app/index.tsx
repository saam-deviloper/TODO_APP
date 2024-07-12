import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Dimens } from "@/constants/Dimens";
import { Link } from "expo-router";
import { useContext } from 'react';
import { AuthContext } from "@/contexts/AuthProvider";

const login = () => {
  //  VARIABLES
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const {signIn,session,isLoading} =  useContext(AuthContext);
  useEffect(()=>{console.log(session,'effect')},[session])
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
          Login
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
              backgroundColor: "green",
              height: 50,
              borderRadius: 5,
            }}
            onPress={()=>signIn(userInfo)}
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
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>
            Dont have an account?{" "}
            <Link href={{ pathname: "register" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 22,
                  fontStyle: "italic",
                  color: "green",
                }}
              >
                Register
              </Text>
            </Link>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default login;


