import styles from "../style";
import {hiring, coffee_shop, supermarket_workers} from "../assets"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const HeroSection = () => 
   (
    <section id='home' className={`flex md:flex-row flex-col bg-white`}>

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins ss:text-[62px] text-[52px]">
          Find your perfect <br />
          part-time job
          <span className="text-thistle block"> on campus</span>
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[350px] -mt-10`}>
        Find a job on your school campus that fits with your academic schedule
        </p>

        
        <Link to="/search">
        <div className=" rounded-[39.95px] bg-black w-[240.52px] h-[76.71px] flex flex-row box-border items-center justify-center text-[28.77px] text-white">
          <div className="relative font-medium font-poppins">Search Now</div>
        </div>
        </Link>
        
        
      </div>

      <div className="flex flex-row justify-around pl-3">
        
        <div>
        <img src={hiring} alt="hiring" className="w-[100%] h-[500px] relative"/>
        </div>
        
        <div className="flex flex-col">
        <img src={coffee_shop} alt="hiring" className="w-[100%] h-[300px] relative"/>
        <img src={supermarket_workers} alt="hiring" className="w-[100%] h-[300px] relative"/>
        </div>

      </div>

      

    </section>
  )


export default HeroSection