import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../firebase/config'
export const login = (email:string, password:string) => {
    
    const auth = getAuth(app)
    return signInWithEmailAndPassword(auth,email,password)

}