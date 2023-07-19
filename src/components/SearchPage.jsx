import JobCard from './JobCard'
import Navbar from './Navbar'
import { jobData } from '../constants'

const SearchPage = () => 
  (
    <div>
    <Navbar />
    <div class="mb-6 mt-10 flex w-full justify-center">
        <div class="relative mb-4 flex w-[500px] flex-wrap items-stretch">
            <input
            type="search"
            class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border-[2px] border-solid border-neutral-300 
            bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 
            outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 
            focus:shadow-[inset_0_0_0_1px_rgb(207,192,247)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Job title or Company name"
            aria-label="Search"
            aria-describedby="button-addon1" />

            
            <button
            class="relative z-[2] flex items-center rounded-r bg-thistle px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white 
            shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:bg-thistle focus:shadow-lg 
            focus:outline-none focus:ring-thistle-300 active:bg-thistle-800 active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5">
                <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd" />
            </svg>
            </button>
        </div>
    </div>

    <div className='pl-5'>
        {jobData.map((item, index) => (
            <JobCard key={item.id} {...item} index={index} />
        ))}
    </div>
    </div>
  )


export default SearchPage