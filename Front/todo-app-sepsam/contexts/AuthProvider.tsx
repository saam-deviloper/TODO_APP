import { router } from "expo-router";
import { createContext, ReactNode, useState } from "react";
import { Alert } from "react-native";

interface UserInfo {
  username: string;
  password: string;
}
export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  //   VARIABLES
  const [users, setUsers] = useState<any>([
    { username: "admin", password: "admin" },
  ]);
  const [session, setSession] = useState<UserInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // METHODS
  const signIn = (userInfo: UserInfo) => {
    setIsLoading(true);

    const userIsRegisterd = users.find(
      (item: any) =>
        item.username.toUpperCase() === userInfo.username.toUpperCase()
    );
    // if user not registerd before 
    if (!userIsRegisterd) {
      Alert.alert("username with this id not found,try to signup");
      router.push("/register");
      setIsLoading(false);
      return;
    }
    // if username and password are OK
    if (
      userIsRegisterd.password.toUpperCase() === userInfo.password.toUpperCase()
    ) {
      setTimeout(() => {
        setSession(userInfo);
        setIsLoading(false);
      }, 3000);
      router.push("(App)");
    }
    // if password was incorrect 
    if(userIsRegisterd.password.toUpperCase() !== userInfo.password.toUpperCase()) {
      setIsLoading(false);
      Alert.alert("username or password is incorrect");
    }
    else setIsLoading(false);
  };

  const signOut = () => {
    // Implementation of signOut
    setIsLoading(true);
    // Simulate sign-out
    setTimeout(() => {
      setSession(null);
      setIsLoading(false);
    }, 1000);
    router.push("/");
  };
  const signUp = (userInfo: UserInfo) => {
    setUsers([...users, userInfo]);
    Alert.alert("Signup completed");
    router.push("/");
  };
  return (
    <AuthContext.Provider
      value={{ signIn, signOut, session, isLoading, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// export const useAuth = () => {
//   const context = useContext(AuthCtx);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
