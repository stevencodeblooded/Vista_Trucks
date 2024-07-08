import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RentingForm = () => {
  const [formData, setFormData] = useState({
    fname: '',
    cname: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleFormSubmission = (e) => {
    e.preventDefault()

    toast.success('Form Submitted Successfully')
  }

  return (
    <div className="px-3 py-20">
      <ToastContainer theme="colored" />
      <section className="max-w-4xl mx-auto">
        <div>
          <div className="flex items-center gap-2 mb-10">
            <FontAwesomeIcon icon={faCheck} className="text-xl text-red-600" />
            <h2 className="text-2xl font-semibold">How to rent</h2>
          </div>
          <form onSubmit={handleFormSubmission} className="max-w-2xl mx-auto flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="fname" className="font-semibold">Full name</label>
                <input type="text" name="fname" id="fname" required value={formData.fname} onChange={handleChange} className="border border-black rounded focus:outline-red-600 px-3 py-2" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="cname" className="font-semibold">Company Name</label>
                <input type="text" name="cname" id="cname" required value={formData.cname} onChange={handleChange} className="border border-black rounded focus:outline-red-600 px-3 py-2" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-semibold">Email</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="border border-black rounded focus:outline-red-600 px-3 py-2" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="font-semibold">Phone</label>
                <input type="number" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="border border-black rounded focus:outline-red-600 px-3 py-2" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-semibold">Message</label>
              <textarea name="message" id="message" required value={formData.message} onChange={handleChange} rows={3} className="border px-3 py-2 border-black rounded focus:outline-red-600"></textarea>
            </div>
            <button className='bg-red-600 hover:bg-red-700 w-full sm:w-fit mt-6 mx-auto transition-all px-12 py-2 rounded-lg text-white font-semibold'>Send a message</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default RentingForm