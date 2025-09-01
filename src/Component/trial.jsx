import React, { useState } from 'react';

const Trial = () => {
    const [submenuOpen, setSubmenuOpen]= useState(false)
    return (
       <div className="w-full max-w-xs mx-auto bg-gray-900 text-white rounded-lg shadow-lg p-4">
      {/* Main Menu */}
      <ul className="flex flex-col gap-2">
        {/* Menu 1 */}
        <li className="px-4 py-2 rounded hover:bg-gray-700 cursor-pointer">
          Menu 1
        </li>

        {/* Menu 2 (with Submenu) */}
        <li>
          <div
            className="flex justify-between items-center px-4 py-2 rounded hover:bg-gray-700 cursor-pointer"
            onClick={() => setSubmenuOpen(!submenuOpen)}
          >
            <span>Menu 2</span>
            <span className="ml-2">{submenuOpen ? "▲" : "▼"}</span>
          </div>

          {/* Submenu */}
          {submenuOpen && (
            <ul className="ml-6 mt-2 flex flex-col gap-1">
              <li className="px-4 py-2 rounded hover:bg-gray-700 cursor-pointer">
                Submenu 1
              </li>
              <li className="px-4 py-2 rounded hover:bg-gray-700 cursor-pointer">
                Submenu 2
              </li>
            </ul>
          )}
        </li>

        {/* Menu 3 */}
        <li className="px-4 py-2 rounded hover:bg-gray-700 cursor-pointer">
          Menu 3
        </li>
      </ul>
    </div>
    );
};

export default Trial;