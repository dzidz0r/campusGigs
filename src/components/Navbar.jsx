import Button from "./Button"
import Logo from "./Logo"

const Navbar = () =>  (
    <nav className=" w-full flex py-3 justify between items-center navbar">
        <div className=" w-full flex justify-between">
            <div><Logo /></div>
            <div className="top-[10px] rounded-[50px] bg-black 
                            w-[120px] h-10 flex flex-row p-2.5 box-border 
                            items-center justify-center text-white">
                <b className="relative font-poppins">Post a Job</b>
            </div>
        </div>
        
        
       {/* <div className="absolute bg-thistle top-[60px] left-[0px] w-screen h-1 overflow-hidden"></div> */}
    </nav>
  )


export default Navbar