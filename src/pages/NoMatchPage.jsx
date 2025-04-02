import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { HiOutlineExclamationCircle } from "react-icons/hi2";

const NoMatchPage = () => {
  const navigate = useNavigate();
  return (
        <>
            <div className="min-h-screen flex flex-col cabin-font">
                <Navbar />
                <div className="flex flex-col flex-grow items-center justify-center bg-white">
                  <div className="flex flex-col items-center space-y-4">
                    <HiOutlineExclamationCircle size="60"/>
                    <h1 className="text-lg font-black">Page Not Found</h1>
                    <Button 
                      text="Go To Homepage" 
                      style="black"
                      onClick={() => navigate("/")}
                    />
                  </div>
                </div>
                <Footer />
            </div>  
        </>
  )};

export default NoMatchPage;
