import { motion } from "framer-motion";
import BookSlider from "../BookSlider";

function HeroSection() {
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
                <BookSlider/>

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

export default HeroSection;


    
    