import { collection, doc, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
import { Service } from '../models'
import { markdownToHtml } from './markdownToHtml'

const getServicesData = async () => {
  const services: Service[] = []
  const snapShot = await getDocs(collection(db, 'services'))
  snapShot.forEach((doc: any) => {
    const service = doc.data()
    services.push(service)
  })
  return services
}

const parseServicesDescription = async (services: Service[]) => {
  return await new Promise((resolve, reject) => {
    services.forEach(async (service) => {
      const html = await markdownToHtml(service.description)
      service.description = html
      if (services.indexOf(service) === services.length - 1) {
        resolve(services)
      }
    })
  })
}

const getServices = async () => {
  const servicesData = await getServicesData()
  const services = await parseServicesDescription(servicesData)
  return services
}

export { getServices }
