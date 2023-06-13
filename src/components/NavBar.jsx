import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'
const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '80px'}} />
        </div>
        
        
        {/*menu*/}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Resume</li>
                <li>Open Source Contributions</li>
            </ul>

        {/*Hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        {/*mobile menu*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full bg-[#0a192f] flex flex-col justify-center items-center' }>
            <li className='py-6 text 4xl'>Home</li>
            <li className='py-6 text 4xl'>About</li>
            <li className='py-6 text 4xl'>Projects</li>
            <li className='py-6 text 4xl'>Resume</li>
            <li className='py-6 text 4xl'>Open Source Contributions</li>
        </ul>
        {/*Socials*/}
        <div className='hidden'></div>
    </div>
  )
}

export default NavBar