import { createUserWithEmailAndPassword, onAuthStateChanged , signOut, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React,{createContext,useEffect,useState,useContext} from "react";
import { auth, db } from "../firebase";



export const AuthContext = createContext();
export const AuthProvider =({children})=>{


    const [user,setUser] = useState({});

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    
    const uData= (email,weight,height,pushUp,pullUp,squat)=>{
        const adduser = doc(db,"userData" , email);
        setDoc(adduser,{
          email:email,
          weight:weight,
          height:height,
          pushUp: pushUp,
          pullUp: pullUp,
          squat: squat,
          
        });
      }

    const logout = () =>{
       return signOut(auth)
    }

    const signin = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
     }
        useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
                console.log(currentUser);
                setUser(currentUser);
            })
                return ()=>{
                    unsubscribe();
                }
        },[])

    return(
        <AuthContext.Provider value={{createUser , user, logout, signin,uData}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () =>{
    return useContext(AuthContext)
}