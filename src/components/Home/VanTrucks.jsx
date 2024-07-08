import truck1 from '../../assets/truck-vista1.jpg'
import truck2 from '../../assets/truck-vista2.jpg'
import truck3 from '../../assets/truck-vista3.jpg'
import truck4 from '../../assets/truck-vista4.jpg'
import truck5 from '../../assets/truck-vista5.jpg'
import truck6 from '../../assets/truck-vista6.jpg'
import truck7 from '../../assets/truck-vista7.jpg'
import truck8 from '../../assets/truck-vista8.jpg'

const VanTrucks = () => {
  return (
    <div>
      <section>
        <div className='grid grid-cols-2 md:grid-cols-4'>
          <img src={truck1} alt="truck" className='h-72 object-cover hover:opacity-90' />
          <img src={truck2} alt="truck" className='h-72 object-cover hover:opacity-90' />
          <img src={truck3} alt="truck" className='h-72 object-cover hover:opacity-90' />
          <img src={truck4} alt="truck" className='h-72 object-cover hover:opacity-90' />
          <img src={truck5} alt="truck" className='h-72 object-cover hover:opacity-90' />
          <img src={truck6} alt="truck" className='h-72 object-cover hover:opacity-90' />
          <img src={truck7} alt="truck" className='h-72 object-cover hover:opacity-90' />
          <img src={truck8} alt="truck" className='h-72 object-cover hover:opacity-90' />
        </div>
      </section>
    </div>
  )
}

export default VanTrucks