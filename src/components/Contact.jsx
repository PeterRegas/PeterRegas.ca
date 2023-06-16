import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <form method='POST' action="https://getform.io/f/3a7c0c64-9501-4823-a2a8-5ccc838369d7" className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or send me an email at pregas@hotmail.ca</p>
            </div>
            <input className='bg-[rgb(158,179,245)] placeholder-blue-900 p-2' type="text" placeholder='Enter Your Name' name='name' />
            <input className='my-4 p-2 bg-[rgb(158,179,245)] placeholder-blue-900' type="email" placeholder='Enter Your Email' name='email' />
            <textarea className='bg-[rgb(158,179,245)] placeholder-blue-900 p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact