import React from 'react'
import { Service } from '../models'
import { getServices } from '../utils/getServices'

export const useGetServices = () => {
  const [services, setServices]: any = React.useState([])
  React.useEffect(() => {
    const fetchServices = async () => {
      const services: any = await getServices()
      setServices(services)
    }
    fetchServices()
  }, [])
  return {
    services
  }
}
