import { motion } from "framer-motion";
import { Linkedin, Github, Globe } from "lucide-react";
import AuthButton from "./AuthButton";

export const Navbar = () => {
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
    
export function HeroSection() {
        return (
            <div className="md:flex-row md:mx-[140px] md:pt-40 md:p-0 flex flex-col items-center justify-between pt-25 p-6">

                {/* Left box */}
                <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut",}}
                    className="md:w-1/3 md:text-right md:items-end w-full flex flex-col items-center mb-6"
                >
                    <h1 className="md:text-5xl text-4xl font-bold mb-6">
                        This is your <span className="text-[#02695A] md:text-7xl text-5xl">w</span>orld, 
                        <br />
                        this is your story 
                    </h1>

                    <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                    <p className="md:text-2xl text-gray-600 text-md">
                        Made your choice and fight for what you believe for.
                    </p>
                    </motion.div>
                </motion.div>

                {/* Middle box */}
                <div className="flex justify-center relative">
                    <a href="https://www.drivethrurpg.com/en/product/410108/fabula-ultima-ttjrpg" target="_blank" className="block w-full">
                        <div className="mx-auto w-[70%] md:hover:scale-110 hover:scale-105 hover:brightness-120 transform transition-all duration-300">
                            <img className="rounded-3xl overflow-hidden cursor-pointer w-full"
                                    src="/images/banners/bookcover.jpg"
                                    alt="Fabula Ultima Volume 1 Bookcover"
                                /> 
                        </div>
                    </a>
                </div>

                {/* Right box */}
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 1  }}
                    className="md:w-1/3 w-full flex flex-col items-start p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-6">
                        FABULA ULTIMA
                    </h2>
                    <p className="text-gray-600 text-md mb-3">
                        is a Tabletop Roleplaying Game inspired by <span className="text-[black] font-bold">Japanese-style console RPGs,</span> or JRPGs. In Fabula Ultima, you and your friends will tell epic stories of would-be heroes and fearsome villains, set in fantasy worlds brimming with magic, wondrous locations, and uniquely bizarre monsters!
                    </p>
                    <ol className="list-disc pl-5 text-gray-600">
                        <li>Create your own setting together</li>
                        <li>A simple and intuitive ruleset</li>
                        <li>A Bestiary</li>
                        <li>Fifteen Classes to mix and match</li>
                        <li>Everything the Game Master needs</li>
                        <li>360 full-color pages</li>
                    </ol>
                </motion.div>
            </div>
        );
    };

export const Footer = () => {
      return (
        <footer className="md:px-[140px] md:py-[30px] p-4 flex justify-between items-center bg-gray-100 text-gray-800 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold mr-4">
                Get in touch
            </span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-blue-600" />
            </a>
            <a href="https://github.com/PZ2KK" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-purple-600" />
            </a>
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
              <Globe className="w-5 h-5 hover:text-green-600" />
            </a>
          </div>
          <a href="/" className="underline hover:text-gray-500 font-bold">
            <h1>Home page</h1>
          </a>
        </footer>
      );
    };
    
    