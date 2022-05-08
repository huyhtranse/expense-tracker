import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextType, Props } from "../interface";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserSessionPersistence
  // browserLocalPersistence,
} from "firebase/auth";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any>({});
  const [ isAuth, setIsAuth ] = useState<boolean>(false);

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscibe();
  }, []);

  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email: string, password: string) {
    return setPersistence(auth, browserSessionPersistence).then(() =>
      signInWithEmailAndPassword(auth, email, password)
    ).catch((err: any) => console.log('login', err.message));
  }
  function logout() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleAuthProvider);
  }

  return (
    <AuthContext.Provider value={{ user, isAuth, setIsAuth, signUp, login, logout, googleSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthConsumer = AuthContext.Consumer;
