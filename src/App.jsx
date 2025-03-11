import './App.css';
import "tailwindcss";
import Navbar from './componenets/ui/Navbar';

// function HeroSection() {
//   return (
//       <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
//       <div className="text-center md:text-left">
//         <h1 className="text-3xl md:text-5xl font-bold">Stay Informed, Stay Inspired</h1>
//         <p className="mt-4 text-gray-600">
//           Discover a World of Knowledge at Your Fingertips. Your Daily Dose of Inspiration and Information.
//         </p>
//       </div>

//       <div className="w-full md:w-1/3">
//         <img
//           src="/path/to/your/image.png"
//           alt="Author"
//           className="rounded-lg shadow-lg w-full"
//         />
//       </div>

//       <div className="w-full md:w-1/3">
//         <p className="text-gray-400">~Author</p>
//         <h2 className="text-xl font-semibold">Thompson P.</h2>
//         <p className="text-gray-600 mt-2">
//           I am a pet enthusiast and freelance writer who specializes in animal behavior and care.
//           With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.
//         </p>
//         <p className="text-gray-600 mt-2">
//           When I’m not writing, I spend time volunteering at my local animal shelter, helping cats find loving homes.
//         </p>
//       </div>
//     </div>
//   );
// };

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        {/* <HeroSection /> */}
      </div>
    </>
  );
};

export default App
