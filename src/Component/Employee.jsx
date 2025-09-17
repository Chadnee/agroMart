import React from "react";

const Employee = () => {
  return (
    <div className="mx-10">
      <div className="flex w-full items-center gap-8">
        <div className="flex flex-col w-4/12 items-start justify-center space-4">
          <p className="flex gap-1">
            <span className="text-3xl text-[#55a931]">
              <FaCanadianMapleLeaf></FaCanadianMapleLeaf>
            </span>
            <span className=" text-white text-start">
              Our Employee
            </span>
          </p>
          <p className="text-4xl font-bold">Meet with Our Employees</p>
          <p className="text-stone-400">Employees are the heart of every company. With teamwork, honesty, and creativity, they drive success, improve services, and shape a stronger future.</p>
        </div>

        <div className="w-8/12"></div>
      </div>
    </div>
  );
};

export default Employee;
