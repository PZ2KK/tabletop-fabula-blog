import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthLayout from '@/components/AuthLayout';

const AuthPage = () => {
  return (
        <>
            <div className="min-h-screen flex flex-col cabin-font">
                <Navbar />
                <AuthLayout/>
                <Footer />
            </div>  
        </>
  )};

export default AuthPage;
