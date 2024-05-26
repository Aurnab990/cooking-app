import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth/cordova";

export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({children}) =>{
    const [user, setUser] = useState([""]);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout = () => {
        return signOut(auth);
      };
    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser =>{
            // console.log(currentUser);
            setUser(currentUser);
        });
        return ()=>{
            return unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        googleLogin,
        createUser,
        signIn,
        signOut,
    
    }

    return [
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    ]
}
export default Authprovider;