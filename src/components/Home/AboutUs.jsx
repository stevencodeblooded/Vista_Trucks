import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import truck1 from '../../assets/vistaTruck1.jpeg'
import truck2 from '../../assets/vistaTruck2.jpeg'
import truck3 from '../../assets/truck-vista4.jpg'

const AboutUs = () => {
  return (
    <div className="px-3 py-20 bg-gray-100">
      <section className="max-w-4xl mx-auto">
        <div>
          <div className="flex items-center gap-2 mb-10">
            <FontAwesomeIcon icon={faCheck} className="text-xl text-red-600" />
            <h2 className="text-2xl font-semibold">About Us</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-12">
              <p className="text-gray-600">
                Lorem Ipsum has not only successfully survived five centuries
                without noticeable change, but has also entered electronic
                design. It was popularized in modern times by the publication of
                Letraset sheets containing Lorem Ipsum sample sheets in the
                1960s, and, more recently, by electronic typesetting programs
                like Aldus PageMaker which use Lorem Ipsum in their
                templates
              </p>
              <div className="flex items-center justify-around">
                <div className="flex flex-col gap-2 items-center">
                  <h3 className="text-2xl font-bold text-red-600">10</h3>
                  <p className="font-semibold text-sm text-center">Years on <br />market</p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <h3 className="text-2xl font-bold text-red-600">300+</h3>
                  <p className="font-semibold text-sm text-center">Units <br /> leased</p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <h3 className="text-2xl font-bold text-red-600">100+</h3>
                  <p className="font-semibold text-sm">Units sold</p>
                </div>
              </div>
            </div>
            <div className='h-full'>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img src={truck3} alt="truck" className='rounded-md h-full object-cover hover:opacity-90' />
                <div className="flex flex-col gap-2">
                  <img src={truck1} alt="truck" className='rounded-md object-cover hover:opacity-90' />
                  <img src={truck2} alt="truck" className='rounded-md object-cover hover:opacity-90' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs