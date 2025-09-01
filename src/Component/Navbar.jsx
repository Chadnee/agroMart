import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import logo from "../assets/images/logo.jpg";
import { FaHome, FaList } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import { SiProcesswire } from "react-icons/si";
import { FaFaceLaughBeam } from "react-icons/fa6";

const Navbar = () => {
  const [openSubmenu, setOpenSubMenu] = useState(false); // kept as boolean as you wanted
  
  const submenuRef = useRef(null);

  useEffect(() => {
      const handleClickOutside = (event) => {
        if(submenuRef.current && !submenuRef.current.contains(event.target)){
            setOpenSubMenu(false); //closed when click outside
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mouseDown", handleClickOutside)
  },[])
  const navItem = [
    { id: "hero", label: "Hero", icon:<FaHome /> },
    { id: "category", label: "Category", icon:<TbCategory2 /> },
    { id: "Process", label: "Process", icon:<SiProcesswire /> },
    { 
      id: "overview", label: "Overview", icon:<FaFaceLaughBeam />,
      subMenu: [
        { id: "about", label: "About", icon:<FaFaceLaughBeam /> },
        { id: "highLights", label: "Highlights", icon:<FaFaceLaughBeam /> }
      ]
    },
  ];

  return (
    <div className='flex  justify-between items-center font-serif max-w-screen-2xl backdrop-blur-sm bg-transparent bg-opacity-20 shadow-md fixed top-0 md:px-16 lg:px-16 px-3 py-3 left-0 w-full z-10'>
      <div className='lg:flex md:flex hidden'>
        <ul className='flex justify-between items-center space-x-6 text-cyan-800 font-semibold'>
          {navItem.map(item => (
            <li className='relative' key={item.id} ref={submenuRef}>
              {item.subMenu ? (
                <>
                  <button
                    onClick={() => setOpenSubMenu(prev => !prev)} // kept original boolean logic
                    className='text-[#357290] font-semibold flex gap-1 items-center'
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>

                  {openSubmenu && ( // changed from openSubmenu === true to just openSubmenu
                    <ul className='absolute left-0 mt-2 w-40 bg-sky-200 rounded-md shadow-lg p-2 space-y-2 z-50'>
                      {item.subMenu.map(sub => (
                        <li key={sub.id}>
                          <Link
                            className='text-[#357290] flex gap-1 items-center'
                            smooth={true}
                            duration={500}
                            to={sub.id.toLowerCase()} // added proper `to` attribute
                          >
                            <span>{sub.icon}</span>
                            <span>{sub.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  className='text-[#357290] font-semibold flex gap-1 items-center'
                  smooth={true}
                  duration={500}
                  to={item.id.toLowerCase()} // added proper `to` attribute
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
     
     <div className='visible md:hidden lg:hidden relative'>
        <div className=''>
            <FaList></FaList>
        </div>
        <div className='absolute t-2 left-0 z-50 w-full bg-sky-200'>
            <ul className='flex flex-col justify-start'>
                 {navItem.map(item => (
                <li className='relative' key = {item.id}>
                    {item.subMenu?(<div>
                        <button className='onCli'></button>
                    </div>) 
                    
                    : (<div>no</div>)}
                </li>
            ))}
            </ul>
        </div>
      </div>
     
      <div className='hidden'>
        <img className='md:h-[25px] lg:h-[25px] h-[20px] w-[70px] lg:w-full md:w-full border rounded-full' src={logo} alt="" />
      </div>
      
    </div>
  );
};

export default Navbar;
