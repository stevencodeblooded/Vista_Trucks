import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const RentingSteps = () => {
  return (
    <div className="px-3 py-20">
      <section className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-14">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-xl text-red-600" />
            <h2 className="text-2xl font-semibold">How to rent</h2>
          </div>
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <div>
              <h1 className="text-5xl font-bold mb-3">1</h1>
              <p className="text-lg">Choose from our available equipment</p>
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-3">2</h1>
              <p className="text-lg">Speak to one of our representatives</p>
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-3">3</h1>
              <p className="text-lg">Fill out paperwork online</p>
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-3">4</h1>
              <p className="text-lg">Pick up your equipment</p>
            </div>
          </div>
          <Link to={'contact'} className='bg-red-600 hover:bg-red-700 w-full text-center transition-all sm:w-fit mx-auto px-12 py-2 rounded-lg text-white font-semibold'>Contact Us</Link>
        </div>
      </section>
    </div>
  )
}

export default RentingSteps