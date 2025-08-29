import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {

    const navItem = [
       { id: "hero", label: "Hero"},
       { id: "category", label: "Category"},
       { id: "whyUs", label: "Why Us"},
       { id: "Process", label: "Process"}
    ]
    // const navItem =  <>
    //   <li className='text white font bold'><Link to = "hero" smooth = {true} duration={500}>Hero</Link></li>
    //   <li className='text white font bold'><Link to = "feature" smooth = {true} duration={500}>Feature</Link></li>
    //   <li className='text white font bold'><Link to = "whyUs" smooth = {true} duration={500}>Why us</Link></li>
    //   <li className='text white font bold'><Link to = "process" smooth = {true} duration={500}>Process</Link></li>
      
    // </>

    return (
        <div className='flex justify-between max-w-screen-2xl backdrop-blur-sm shadow-md fixed  top-0 px-10 py-3 left-0 w-full z-50'>
            <h3 className='text-3xl font-bold'>
                <span className='text-white'>@gro</span><span className='text-red-800'>M</span><span className='text-white'>art</span>
                </h3>
            <div>
              <ul className='flex justify-between space-x-6 text-cyan-800 font-semibold'>
              {navItem.map(item => <li className='text white font bold' key={item.id}><Link to = {item.id} smooth = {true} duration={500}>{item.label}</Link></li>)}
              </ul>
            </div>
        </div>
    );
};

export default Navbar;