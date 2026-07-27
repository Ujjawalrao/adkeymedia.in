import React from 'react'
import noProfile from '../assets/props/noProfile.jpg'

function TestimonialCard({ name, designation, testimonial, image }) {

    if(!image || image.trim() === '') {
        image = noProfile;
    }
    
  return (
    <div className="mx-auto lg:mx-0 max-w-[350px] lg:w-[280px] h-[300px] rounded-xl p-4 flex flex-col justify-between hover:scale-101 duration-300 ease-in-out bg-white bg-cover bg-top hover:bg-center">
      <p className=" text-lg rounded-sm p-2 ">"{testimonial}"</p>

      <div className='flex gap-4 items-center'>
        <div className='rounded-full w-13 h-13 overflow-hidden bg-gray-400/70 flex justify-center items-center' >
          <img
            className='rounded-full w-12 h-12 object-center object-cover hover:scale-110 duration-300 ease-in-out'
            src={image}
            alt={name}
           />
        </div>
        <div>
          <h1 className="font-bold text-lg">{name}</h1>
          <p className="text-[#86268E] text-sm">{designation}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard