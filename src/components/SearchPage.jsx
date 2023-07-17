import JobCard from './JobCard'
import Navbar from './Navbar'
import { jobData } from '../constants'

const SearchPage = () => 
  (
    <div>
    <Navbar />
    <>
        {jobData.map((item, index) => (
            <JobCard key={item.id} {...item} index={index} />
        ))}
    </>
    </div>
  )


export default SearchPage