import { collection, doc, getDocs } from "firebase/firestore"
import React from "react"
import { db } from "../firebase/config"

export const useGetServices = () => {
    const [services, setServices] = React.useState([])
    React.useEffect(()=>{
        const getServices = () => {
            const services:any = []
            getDocs(collection(db,'services'),)
            .then((res)=>{
                res.forEach((service)=>{
                    services.push(service.data())
                })
                
            })
            setServices(services)
            
        }
        getServices()

    },[])
    return {
        services
    }
}   

