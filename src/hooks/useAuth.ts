import React from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/config";


export const useAuth = () => {

    const [isAuth, setIsAuth] = React.useState(false);
    const auth = getAuth(app);
    onAuthStateChanged(auth,(user)=>{
        if(user){
            setIsAuth(true)
        } else {

            setIsAuth(false)
        }
    })
    


    return {
        isAuth
    }
    
}