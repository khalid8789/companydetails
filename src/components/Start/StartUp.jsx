import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Details } from "./../../Details";
import Pie from "./PieHolder";
const StartUp= () => {
  
  return (
    <section className="mx-6 overflow-auto rounded-lg shadow scroll-smooth">
      <div className="grid grid-cols-[425px_minmax(900px,_1fr)] gap-5 ">
        <div className="bg-white h-[440px] rounded-lg shadow-md">
          <h1 className=" text-gray-700 pl-4 pt-4 text-lg">
            why do you create a startUp?
          </h1>
          <p className=" text-gray-400 pl-4">Trends</p>
          <Pie />
          <div className="flex items-center ml-2 md:justify-center gap-4">
            <div className="grid gap-1">
              <div className="w-[10px] h-[10px] rounded-full bg-[#E289F2]"></div>
              <h1 className="text-xs">DUNNO</h1>
            </div>
            <div className="grid gap-1">
              <div className="w-[10px] h-[10px] rounded-full bg-purple-700"></div>
              <h1 className="text-xs">I'm Boring</h1>
            </div>
            <div className="grid gap-1">
              <div className="w-[10px] h-[10px] rounded-full bg-[#503795]"></div>
              <h1 className="text-xs">Money</h1>
            </div>
            <div>
              <div className="w-[10px] h-[10px] rounded-full bg-[#B085FF]"></div>
              <h1 className="text-xs">Fun</h1>
            </div>
          </div>
        </div>

        <div className="bg-white h-[440px] rounded-lg shadow-md">
          <h1 className="text-gray-700 p-[18px] text-lg">Employees</h1>

          <div className="border-2 p-[18px] h-[350px] m-4 rounded-lg">
            <table className="w-full border-collapse text-left text-gray-400">
              <thead>
                <tr className="border-b mb-6 font-light">
                  <th>Employee</th>
                  <th>Last Login</th>
                  <th>Department</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="border-b">
                {Details.map((data, i) => (
                  <tr key={i} className="border-b">
                    <td className="flex items-center gap-2 ">
                      <div className="w-[20px] h-[20px] overflow-hidden rounded-full">
                        <img src={data.img} alt="" />
                      </div>
                      <div>
                        <h1 className="text-sm text-black">{data.employee}</h1>
                        <div className="text-xs text-gray-400">
                          {data.email}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="text-sm text-black">{data.lastLogin}</div>
                      <div className="text-xs text-gray-400">
                        {data.timeFrame}
                      </div>
                    </td>
                    <td className="text-sm mt-6 text-black">
                      {data.department}
                    </td>
                    {data.status === "Active" ? (
                      <td className="mt-6 text-emerald-600">{data.status}</td>
                    ) : (
                      <td className="mt-6 text-rose-600">{data.status}</td>
                    )}
                    <td className="mt-6">
                      <IoIosArrowDown />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartUp;