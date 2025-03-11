
const Navbar = () => {
    return (
        <nav className="md:mx-0 md:px-[140px] md:py-[14px] fixed top-0 z-99 bg-white w-full shadow-md px-6 py-3">
              <div className="w-full flex justify-between items-center">

                    {/* logo */}
                    <div className="relative">
                      <a href="#" className="scroll-smooth">
                        <img
                        className="md:w-[30%] w-[20%]"
                        src='src\assets\images\logos\logo.png'
                        />
                      </a>
                    </div>
                    
                    {/* checkbox */} 
                    <input type="checkbox" id="menu-toggle" className="hidden peer"/>
                    <label for="menu-toggle" className="md:hidden text-[#1A1A2C] hover:text-[#1374F6] cursor-pointer">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-width="2" d="M4 4h20 M4 12h20 M4 20h20"></path>
                      </svg>
                    </label>
              
                    {/*mobile navbar*/}
                    <ul className="hidden peer-checked:flex w-full flex-col items-center absolute bg-white top-13 left-0 transition-all ease-in-out duration-300 rounded-lg shadow-lg z-10">
                      <li className="w-full">
                        <button href="" className="text-black bg-white hover:bg-gray-200 font-bold p-4 w-full cursor-pointer">
                          Log in
                        </button>
                      </li>
                      <li className="w-full">
                        <button href="" className="text-white bg-[#01473C] font-bold p-4 cursor-pointer w-full rounded-b-lg hover:bg-[#69C5C0] transition duration-300">
                          Sign up
                        </button>
                      </li>
                    </ul>
              
                    {/* desktop navbar */}
                    <ul className="hidden md:flex items-center text-[16px] font-semibold md:gap-[10px] gap-[16px]">
                      <li>
                        <button href="" className="text-black bg-white font-bold py-[12px] px-[40px] cursor-pointer w-full rounded-full border border-[#01473C] hover:text-white hover:bg-[#02695A] transition duration-300">
                          Log in
                        </button>
                      </li>
                      <li>
                        <button href="" className="text-white bg-[#02695A] font-bold py-[12px] px-[40px] cursor-pointer w-full rounded-full transition hover:bg-[#69C5C0]  duration-300">
                          Sign up
                        </button>
                      </li>
                    </ul>
              </div>
        </nav>
    );
  };

export default Navbar;