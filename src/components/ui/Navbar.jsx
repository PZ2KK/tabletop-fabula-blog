import AuthButton from "./AuthButton";

const Navbar = () => {
        return (
            <nav className="md:mx-0 md:px-[140px] md:py-[14px] fixed top-0 z-99 bg-white w-full shadow-md px-6 py-3">
                  <div className="w-full flex justify-between items-center">
    
                        {/* logo */}
                        <div className="relative">
                          <a href="#" className="scroll-smooth">
                            <img
                            className="md:w-[30%] w-[20%]"
                            src='/images/logos/logo.png'
                            />
                          </a>
                        </div>
                        
                        {/* checkbox */} 
                        <input type="checkbox" id="menu-toggle" className="hidden peer"/>
                        <label for="menu-toggle" className="md:hidden text-[#1A1A2C] hover:text-[#1374F6] cursor-pointer">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeWidth="2" d="M4 4h20 M4 12h20 M4 20h20"></path>
                          </svg>
                        </label>
                  
                        {/*mobile navbar*/}
                        <ul className="hidden peer-checked:flex gap-3 py-6 w-full flex-col items-center absolute bg-white shadow-2xl top-12 left-0 z-10 transition ease-in-out duration-300">
                          <li className="w-full px-3">
                            <AuthButton text="Log in" type="login"/>
                          </li>
                          <li className="w-full px-3">
                            <AuthButton text="Sign up" type="signup"/>
                          </li>
                        </ul>
                  
                        {/* desktop navbar */}
                        <ul className="hidden md:flex items-center text-[16px] font-semibold md:gap-[10px] gap-[16px]">
                          <li>
                            <AuthButton text="Log in" type="login"/>
                          </li>
                          <li>
                            <AuthButton text="Sign up" type="signup"/>
                          </li>
                        </ul>
                  </div>
            </nav>
        );
    };

export default Navbar;