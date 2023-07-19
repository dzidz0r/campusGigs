import styles from "./style"
import Navbar from "./components/Navbar"

import { HeroSection, Footer, HowItWorks} from "./components"


const App = () => (
  <div className='w-full overflow-hidden bg-white'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <HeroSection/>
        </div>
    </div>

    <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <HowItWorks/>
        </div>
    </div>

    <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer/>
        </div>
    </div>

    
    

  </div>
  
)


export default App