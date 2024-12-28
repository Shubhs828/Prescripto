import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctors = () => {

  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const navigate = useNavigate();

  const {doctors} = useContext(AppContext)

  const applyFilter = () => {
    if(speciality){
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[doctors, speciality])

  return (
    <div>
        <p className='text-gray-600'>Browse through the doctors specialist.</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
          <div className='flex flex-col gap-4 text-sm text-gray-600'>
           <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-green-100 text-black" : ""}`} 
           onClick={()=> speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician') }>General physician</p>
           <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-green-100 text-black" : ""}`} 
           onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')}>Gynecologist</p>
           <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-green-100 text-black" : ""}`} 
           onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')}>Dermatologist</p>
           <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-green-100 text-black" : ""}`} 
           onClick={()=> speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')}>Pediatricians</p>
           <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-green-100 text-black" : ""}`}  
           onClick={()=> speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')}>Neurologist</p>
           <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-green-100 text-black" : ""}`}  
           onClick={()=> speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')}>Gastroenterologist</p>
          </div>

          <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {
              filterDoc.map((item, index)=>(
                <div onClick={()=> navigate(`/appointment/${item._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                    <img className='bg-green-100 hover:bg-blue-100 transition-all duration-500' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                            <p>Available</p>
                        </div>
                        <p>{item.name}</p>
                        <p>{item.speciality}</p>
                    </div>
                </div>

            ))
            }
          </div>
        </div>
    </div>
  )
}

export default Doctors
