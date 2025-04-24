import { SlNotebook, SlFolder } from "react-icons/sl";
import { IoPerson } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { PiPassword } from "react-icons/pi";
import { FiExternalLink } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const menu = [
    { label: 'Article management', icon: <SlNotebook />, active: true },
    { label: 'Category management', icon: <SlFolder />, active: false},
    { label: 'Profile', icon: <IoPerson />, active: false },
    { label: 'Notification', icon: <IoNotifications />, active: false },
    { label: 'Reset password', icon: <PiPassword />, active: false },
  ];

const navigate = useNavigate();

return (
  <div className="flex bg-[#EFEEEB]">
      <div className="w-64 flex flex-col">
        {/* logo */}
        <div className="px-8 py-16">
          <a href="#" className="scroll-smooth" rel="noopener noreferrer">
            <img
              className="md:w-[100%] w-[100%]"
              src='/images/logos/logo.png'
            />
          </a>
          <p className="text-[#F2B68C] font-semibold text-[20px]">Admin panel</p>
        </div>

        {/* Menu */}
        <ul className="">
          {menu.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center px-4 py-4 ${
                  item.active ? 'bg-[#DAD6D1] text-gray-800 font-semibold' : 'hover:bg-[#DAD6D1] text-gray-600'
                }`}
              >
                <span className="mr-2 inline">{item.icon}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Logout */}
        <div className="mt-auto ">
            <ul className="">
              <li>
                <a href="/" className="flex items-center px-4 py-4 hover:bg-[#DAD6D1] text-gray-600">
                  <FiExternalLink/>
                  <span className="ml-2"> hh. website </span>
                </a>
              </li>
              <hr className="border-gray-300" />
              <li>
                <a href="/logout" className="flex items-center px-4 py-4 hover:bg-[#DAD6D1] text-gray-600">
                  <CiLogout />
                  <span className="ml-2"> Log out </span>
                </a>
              </li>
            </ul>
        </div>
      </div>
  </div>
)};

export default AdminPanel