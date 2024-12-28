import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {

  const {docId} = useParams();
  const {doctors} = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)


  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)    
  }

  useEffect(()=>{
    fetchDocInfo()    
  },[doctors, docId])

  return docInfo && (
    <div>

      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-green-200 w-full sm:max-w-72 rounded-lg ' src={docInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80] sm:mt-0'>
        <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
          {docInfo.name}
          <img className='w-5' src={assets.verified_icon} alt="" />
        </p>
        <div className='flex items-center gp-2 text-sm mt-1 text-gray-600'>
          <p>{docInfo.degree} - {docInfo.speciality}</p>
          <button className='mx-2 py-0.5 px-2 border text-xs rounded-full bg-green-200'>{docInfo.experience}</button>
        </div>

        <div>
          <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
          <p className='mt-1 text-sm text-gray-600 max-w-[800px]'>{docInfo.about}</p>
        </div>

        <div className='mt-5 gap-4'>
          <div className='flex'>
          <p className=' font-medium text-gray-800'>Appointment Fee -</p>
          <p className=' font-medium text-red-500'> ${docInfo.fees}</p>
          </div>
        </div>
      </div>
      </div>
      <div className='sm:ml-72 sm:pl-4 mt-4'>
        <button className='bg-green-500 text-white text-sm font-medium px-14 py-3 rounded-lg my-6 hover:scale-90 transition-all duration-500'>Book Appointment</button>
      </div>
       
      <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>

    </div>
  )
}

export default Appointment
