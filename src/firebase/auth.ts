import { signInWithEmailAndPassword,signOut } from "firebase/auth";
import {auth} from './config'
export const login = (email:string, password:string) => {
    
    
    return signInWithEmailAndPassword(auth,email,password)

}

export const logout = () => {
  
  signOut(auth)
      .then(()=>{
          console.log('Logout exitoso')
          window.location.pathname = '/'
      })
      .catch((error)=>{
          console.log('ha habido un error')
      })
  ;
}