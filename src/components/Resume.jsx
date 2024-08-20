import React from 'react'
import resume from '../assets/PeterRegasResume.pdf'
function Resume() {
  return (
    <div name='resume' className='w-full h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Resume
          </p>
          <p className='py-6'>// Check out my Resume</p>
        </div>
        <object data={resume} type="application/pdf" width="100%" height="100%">
            <p> Some ad-blockers may prevent this from loading here is the alternative link https://tinyurl.com/y4xc2as3 <a href={resume}></a></p>
        </object>
      </div>
      
    </div>
  )
}

export default Resume