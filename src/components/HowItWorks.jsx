import { howCards } from "../constants"
import styles from "../style"

const Card = ({ pic, label, index}) => (
    <div className="max-w-[300px] max-h-[500px] rounded overflow-hidden shadow-lg">
        <img src={pic} className="w-full"/>
        <div class="px-6">
            <div class="font-medium font-poppins text-xl mb-2 w-full text-center">{label}</div>
        
        </div>
    </div>
)

const HowItWorks = () => 
  (
    
    <div className="w-full text-center bg-white my-6">
        <h1 className="text-bold font-poppins">How it Works</h1>
        <section className={`flex md:flex-row flex-col bg-white ${styles.paddingX}`}>
        <div className="w-full flex sm:flex-row  flex-col justify-between">
            {howCards.map((card, index) => (
                <Card key={card.id} {...card} index={index} />
            ))}
            
        </div>
        </section>
    </div>
  )


export default HowItWorks