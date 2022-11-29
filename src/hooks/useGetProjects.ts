import React from 'react'

import { getCompleteProjects } from '../utils/getProjects'
export const useGetProjects = () => {
  const [projects, setProjects]: any = React.useState([])
  const [loading, setLoading]: any = React.useState()
  const [error, setError]: any = React.useState(null)
  React.useEffect(() => {
    const getProjects = async () => {
      setLoading(true)
      try {
        const projects = await getCompleteProjects()
        setProjects(projects)
        setLoading(false)
      } catch (error) {
        setError('Error')
        setLoading(false)
      }
    }

    getProjects()
  }, [])

  return {
    projects,
    loading,
    error
  }
}
