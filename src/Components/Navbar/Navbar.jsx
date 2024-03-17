import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineMenuOpen } from "react-icons/md";

const Navbar = () => {
  return (
    <div >
      <div className="navbar   max-w-screen-xl mx-auto">
        <div className="md:navbar-start w-full">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" hover:bg-green-100 rounded-lg py-1 px-3 mr-2 lg:hidden"
            >
              <MdOutlineMenuOpen className="text-3xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-4"
            >
              {/* mobile navbar  */}
              <li className="text-[16px] font-medium capitalize cursor-pointer">
                Home
              </li>
              <li className="text-[16px] font-medium capitalize cursor-pointer">
                Recipes
              </li>
              <li className="text-[16px] font-medium capitalize cursor-pointer">
                About
              </li>
              <li className="text-[16px] font-medium capitalize cursor-pointer">
                Search
              </li>
            </ul>
          </div>
          <button className="md:text-2xl outline-none font-bold text-xl ">
            Recipe Calories
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* desktop navbar  */}
          <ul className="menu menu-horizontal px-1 gap-8">
            <li className="text-[16px] font-medium capitalize cursor-pointer">
              Home
            </li>
            <li className="text-[16px] font-medium capitalize cursor-pointer">
              Recipes
            </li>
            <li className="text-[16px] font-medium capitalize cursor-pointer">
              About
            </li>
            <li className="text-[16px] font-medium capitalize cursor-pointer">
              Search
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-8">
            <div className="md:flex hidden items-center gap-3 bg-gray-100 rounded-full px-2 py-2">
              <CiSearch className="text-xl  text-gray-500" />
              <input
                className="bg-transparent outline-none"
                type="text"
                placeholder="Search"
              />
            </div>
            <div>
              <FaRegCircleUser className="w-8 h-8 rounded-full p-[6px]   text-black font-light bg-green-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
