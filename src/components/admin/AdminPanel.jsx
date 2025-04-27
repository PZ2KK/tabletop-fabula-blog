import { SlNotebook, SlFolder } from "react-icons/sl";
import { IoPerson } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { PiPassword } from "react-icons/pi";
import { GoLinkExternal } from "react-icons/go";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

const AdminPanel = () => {
  const menu = [
    { label: 'Article management', icon: <SlNotebook />, path: 'article'},
    { label: 'Category management', icon: <SlFolder />, path: 'category'},
    { label: 'Profile', icon: <IoPerson />, path: 'profile'},
    { label: 'Notification', icon: <IoNotifications />, path: 'notification'},
    { label: 'Reset password', icon: <PiPassword />, path: 'resetpassword'},
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login')
  };

return (
  <div className="flex bg-[#EFEEEB] h-screen">
      <div className="w-64 flex flex-col">
        {/* logo */}
        <div className="px-8 py-16">
            <img
              className=" pb-6"
              src='/images/logos/logo.png'
              alt="logo"
            />
          <p className="text-[#F2B68C] font-semibold text-[20px]">Admin panel</p>
        </div>

        {/* Menu */}
        <div className="space-y-1">
          {menu.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setActiveIndex(index)
                navigate(`/admin/${item.path}`)
              }}
              className={cn(
                'flex items-center px-4 py-4 cursor-pointer transition-color duration-300 ease-in-out',
                {
                  'bg-[#DAD6D1] text-gray-800 font-semibold pl-9': index === activeIndex,
                  'hover:bg-[#DAD6D1] text-gray-600': index !== activeIndex,
                }
              )}
            >
              <span className="mr-2 inline">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
        
        {/* Bottom Menu */}
        <div className="mt-auto pb-2">
          <button
            onClick={() => navigate('/')}
            className="flex items-center w-full text-left px-4 py-4 hover:bg-[#DAD6D1] text-gray-600 cursor-pointer"
          >
            <GoLinkExternal />
            <span className="ml-2">Return to Blog</span>
          </button>

          <hr className="border-gray-300" />

          <button
            onClick={handleLogout}
            className="flex items-center w-full text-left px-4 py-4 hover:bg-[#DAD6D1] text-gray-600 cursor-pointer"
          >
            <CiLogout />
            <span className="ml-2">Log out</span>
          </button>
        </div>
      </div>
  </div>
)};

export default AdminPanel