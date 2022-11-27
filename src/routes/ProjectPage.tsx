import { ProjectDetail } from '../components/ProjectDetail'
import {useParams} from 'react-router-dom'
export const ProjectPage = () => {
  // project.name.replaceAll('-',' ')
  const {slug} = useParams()
  return (
    <main >
      <section className='p-4 lg:p-8'>
        <ProjectDetail slug={slug}/>
      </section>
    </main>
  )
}
