import { Link } from 'react-router-dom';
import inventoryTruck1 from '../../assets/Inventory_truck1.png'
import inventoryTruck2 from '../../assets/Inventory_truck2.png'
import inventoryTruck3 from '../../assets/Inventory_truck3.png'

const InventoryTrucks = () => {
  return (
    <div className='bg-gray-100 pt-12 lg:pt-0 pb-24 px-3'>
      <section className="max-w-4xl mx-auto">
        <div>
          <div className="grid grid-cols 1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="px-7 py-12 lg:-mt-20 bg-white shadow-md hover:shadow-red-950 shadow-gray-500 rounded-md flex flex-col items-center">
              <img
                src={inventoryTruck1}
                alt="Inventory Truck"
                className="mb-6"
              />
              <h3 className="text-lg font-semibold mb-3">Trucks</h3>
              <p className="text-xs text-center">
                Used and new semi trucks for sale or lease
              </p>
            </div>
            <div className="px-7 py-12 lg:-mt-20 bg-white shadow-md shadow-gray-500 hover:shadow-red-950 rounded-md flex flex-col items-center">
              <img
                src={inventoryTruck2}
                alt="Inventory Truck"
                className="mb-6"
              />
              <h3 className="text-lg font-semibold mb-3">
                Heave Haul Trailers
              </h3>
              <p className="text-xs text-center">
                48” and 53” Flatbed and Step deck trailers for sale or rent
              </p>
            </div>
            <div className="px-7 py-12 lg:-mt-20 bg-white shadow-md shadow-gray-500 hover:shadow-red-950 rounded-md flex flex-col items-center">
              <img
                src={inventoryTruck3}
                alt="Inventory Truck"
                className="mb-6"
              />
              <h3 className="text-lg font-semibold mb-3">Reefer Trailers</h3>
              <p className="text-xs text-center">
                Used and new reefer trailers for sale or rent
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-12 relative z-10">
            <Link to={'inventory'} className="bg-gray-800 hover:bg-gray-950 w-full text-center sm:w-fit transition-all px-10 py-2 rounded-lg text-white font-semibold">View Inventory</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InventoryTrucks;
