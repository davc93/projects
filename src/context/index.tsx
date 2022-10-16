import React from "react";


export const context = React.createContext({});

export const ContextProvider = ({children}:any) => {


    return (
        <context.Provider value={{
            auth:false
        }}>
            {children}
        </context.Provider>
    )
}