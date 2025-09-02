import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/images/logo.jpg";
import { FaHome, FaList } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import { SiProcesswire } from "react-icons/si";
import { FaFaceLaughBeam } from "react-icons/fa6";

const Navbar = () => {
  const [openSubmenu, setOpenSubMenu] = useState(false); // kept as boolean as you wanted
  const [openMobileSubmenu, setOpenMobileSubMenu] = useState(false); // kept as boolean as you wanted
  const [toggle, setToggle] = useState(false);
  const submenuRef = useRef(null);
  const toggleRef = useRef(null)


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setOpenSubMenu(false); //closed when click outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
     const handleToggleOutside = (event) => {
        if(toggleRef.current && !toggleRef.current.contains(event.target)) {
            setToggle(false);
        }
     }
     document.addEventListener("mousedown", handleToggleOutside);
     return () => document.removeEventListener("mousedown", handleToggleOutside);
      }, [])
  const navItem = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "category", label: "Category", icon: <TbCategory2 /> },
    {
      id: "overview",
      label: "Overview",
      icon: <FaFaceLaughBeam />,
      subMenu: [
        { id: "about", label: "About", icon: <FaFaceLaughBeam /> },
        { id: "highLights", label: "Highlights", icon: <FaFaceLaughBeam /> },
      ],
    },
    { id: "process", label: "Process", icon: <SiProcesswire /> },
  ];

  return (
    //via-[#52a6d0]
    <div className="flex lg:flex-row-reverse md:flex-row-reverse justify-between items-center font-serif max-w-screen backdrop-blur-sm bg-gradient-to-tr from-[#4b73b0] via-[#77bee1] to-[#26a7ed] shadow-lg fixed top-0 md:px-16 lg:px-16 py-3 left-0 w-full z-10">
      {/* <div className="flex lg:flex-row-reverse md:flex-row-reverse justify-between items-center font-serif max-w-screen-2xl backdrop-blur-sm bg-gradient-to-tr from-[#5c97f01a] via-[#5c97f01a] to-[#26a7ed1a] shadow-md fixed top-0 md:px-16 lg:px-16 py-3 left-0 w-full z-10"> */}
      <div className="lg:flex md:flex hidden justify-end gap-48 w-1/2">
        <ul className="flex justify-between items-center space-x-6 text-cyan-800 font-semibold">
          {navItem.map((item) => (
            <li className="relative" key={item.id} ref={submenuRef}>
              {item.subMenu ? (
                <>
                  <button
                    onClick={() => setOpenSubMenu((prev) => !prev)} // kept original boolean logic
                    className="text-[#1e4f68] font-semibold flex gap-1 items-center"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>

                  {openSubmenu && ( // changed from openSubmenu === true to just openSubmenu
                    <ul className="absolute left-0 mt-2 w-40 bg-sky-200 rounded-md shadow-lg p-2 space-y-2 z-50">
                      {item.subMenu.map((sub) => (
                        <li key={sub.id}>
                          <a
                            className="text-[#1e4f68] flex gap-1 items-center cursor-pointer"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            href={`#${sub.id}`}
                          >
                            <span>{sub.icon}</span>
                            <span>{sub.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a
                  className="text-[#1e4f68] font-semibold flex gap-1 items-center cursor-pointer"
                  smooth={true}
                  duration={500}
                  to={item.id} // added proper `to` attribute
                  offset={-80}
                  href={`#${item.id}`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
        <button
          className="text-[#1e4f68] font-semibold border-3 border-amber-800 relative px-10 text-[17px] py-1 rounded-md shadow-lg 
            duration-1000 easy-in-out hover:bg-amber-800 hover:text-white hover:shadow-lg hover:scale-105"
        >
          Contact
        </button>
      </div>

      <div className="block md:hidden lg:hidden relative w-full" ref={toggleRef}>
        <button onClick= {() => setToggle((prev) => !prev)} className="cursor-pointer pl-3">
          <FaList></FaList>
        </button>
        {
            toggle && 
            <div className="absolute -top-3 min-h-3/4 left-0 min-w-screen  z-50  text-[#1e4f68] shadow-lg bg-gradient-to-tr from-[#4b73b0] via-[#77bee1] to-[#26a7ed]">
          <ul className="flex flex-col w-full gap-3">
            {navItem.map((item) => (
              <li className="relative px-6 py-2 cursor-pointer" key={item.id}>
                {item.subMenu ? (
                  <div>
                    <button
                      onClick={() => setOpenMobileSubMenu((prev) => !prev)}
                      className="text-[#1e4f68] font-semibold gap-48  flex justify-between rounded items-center cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <span>{openMobileSubmenu ? "▲" : "▼"}</span>
                    </button> <hr className="min-w-screen text-[#2f9bd1] " />
                    {/* submenu */}
                    {openMobileSubmenu && (
                      <ul className="ml-6 mt-2 flex flex-col gap-1">
                        {item.subMenu.map((sub) => (
                          <li
                            key={sub.id}
                            className="cursor-pointer"
                          >
                             <a
                      smooth={true}
                      duration={500}
                      to={item.id} // added proper `to` attribute
                      offset={-80}
                      href={`#${sub.id}`}
                      className="text-[#1e4f68] cursor-pointer font-semibold w-full flex gap-48 cursor-pointer py-2 items-center"
                    >
                      <span>{sub.label}</span>
                      <span>{sub.icon}</span>
                    </a> <hr className="min-w-screen text-[#2f9bd1] " />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <div>
                    <a
                      smooth={true}
                      duration={500}
                      to={item.id} // added proper `to` attribute
                      offset={-80}
                      href={`#${item.id}`}
                      className="text-[#1e4f68] font-semibold w-full flex gap-48 cursor-pointer py-2 items-center"
                    >
                      <span>{item.label}</span>
                      <span>{item.icon}</span>
                    </a>
                    <hr className="min-w-screen text-[#2f9bd1] " />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        }
      </div>

      <div className="w-1/2">
        <h3 className="font-serif uppercase lg:text-3xl md:text-3xl text-xl pr-3 md:pr-0 lg:pr-0">
          <span className="">Agro</span>
          <span className="text-amber-800">M</span>
          <span className="">Art</span>
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
//text-[#357290]
