const Navbar = () => {
    return (
        <nav class="md:mx-0 md:px-[140px] md:py-[14px] fixed top-0 z-99 bg-white p-[6px] w-full shadow-md">
              <div class="w-full flex justify-between items-center px-4">
                <div class="relative">
                  <a href="#" class="scroll-smooth">
                    <h1 class="md:text-2xl text-md">hh</h1>
                  </a>
                </div>
                
                {/* checkbox */} 
                <input type="checkbox" id="menu-toggle" class="hidden peer"/>
                <label for="menu-toggle" class="md:hidden text-[#1A1A2C] hover:text-[#1374F6] cursor-pointer">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-width="2" d="M4 4h20 M4 12h20 M4 20h20"></path>
                  </svg>
                </label>
          
                {/*mobile navbar*/}
                <ul class="hidden peer-checked:flex w-full flex-col items-center absolute bg-white top-13 left-0 transition-all ease-in-out duration-300 rounded-lg shadow-lg z-10">
                  <li class="w-full">
                    <button href="" class="text-black bg-white hover:bg-gray-200 font-bold p-4 w-full cursor-pointer">
                      Log in
                    </button>
                  </li>
                  <li class="w-full">
                    <button href="" class="text-white bg-[#01473C] hover:bg-[#69C5C0] font-bold p-4 cursor-pointer w-full rounded-b-lg">
                      Sign up
                    </button>
                  </li>
                </ul>
          
                {/* desktop navbar */}
                <ul class="hidden md:flex items-center text-[16px] font-semibold md:gap-[10px] gap-[16px]">
                  <li>
                    <button href="" class="text-black bg-white hover:bg-gray-200 font-bold py-[12px] px-[40px] cursor-pointer w-full rounded-full border border-black">
                      Log in
                    </button>
                  </li>
                  <li>
                    <button href="" class="text-white bg-[#01473C] hover:bg-[#69C5C0] font-bold py-[12px] px-[40px] cursor-pointer w-full rounded-full">
                      Sign up
                    </button>
                  </li>
                </ul>
              </div>
        </nav>
    );
  };

export default Navbar;