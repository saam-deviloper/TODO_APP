import { router } from "expo-router";
import { createContext, ReactNode, useContext, useState } from "react";
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
      (item: any) => item.username.toUpperCase() === userInfo.username.toUpperCase()
    );
    if(!userIsRegisterd) {Alert.alert('user not signup before');router.push('/register');return}
    if (userIsRegisterd.password.toUpperCase() === userInfo.password.toUpperCase()) {
      setTimeout(() => {
        setSession(userInfo);
        setIsLoading(false);
      }, 3000);
      router.push("(App)");
    }
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
    Alert.alert('Signup completed')
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
