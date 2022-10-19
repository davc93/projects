import { getAuth, signOut } from "firebase/auth"



export const logout = () => {

    const auth = getAuth()
    signOut(auth)
        .then(()=>{
            console.log('Logout exitoso')
        })
        .catch((error)=>{
            console.log('ha habido un error')
        })
    ;
}