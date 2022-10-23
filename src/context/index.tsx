import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/config";
import { useGetProjects } from "../hooks/useGetProjects";


export const context = React.createContext({});

export const ContextProvider = ({children}:any) => {
    const projects = useGetProjects();
    const [isAuth, setIsAuth] = React.useState(false);
    const auth = getAuth(app);

    const toggleDark = () => {

        window.document.documentElement.classList.toggle('dark')
    }
    onAuthStateChanged(auth,(user)=>{
        if(user){
            setIsAuth(true)
        } else {

            setIsAuth(false)
        }
    })

    return (
        <context.Provider value={{
            isAuth,
            projects,
            toggleDark
        }}>
            {children}
        </context.Provider>
    )
}