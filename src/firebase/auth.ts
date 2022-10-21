import { getAuth, signInWithEmailAndPassword,signOut } from "firebase/auth";
import {app} from './config'
export const login = (email:string, password:string) => {
    
    const auth = getAuth(app)
    return signInWithEmailAndPassword(auth,email,password)

}

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