import Button from './Button';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ modalToggle, setModalToggle }) => {
    const navigate = useNavigate();

    return (
        <div className=" flex items-center justify-center fixed inset-0 bg-black/60 md:p-0 p-6 z-99">
            <div className="flex flex-col items-center bg-white rounded-xl py-12 w-full max-w-md gap-6 relative">
                <span
                    className="absolute top-2 right-3 text-3xl cursor-pointer text-black hover:text-gray-300"
                    onClick={() => setModalToggle(!modalToggle)}
                >
                    &times;
                </span>
                <h2 className="md:text-4xl text-3xl text-center font-bold drop-shadow-lg">Create an account to continue</h2>
                <div className="w-full md:px-30 px-18">
                    <Button text="Create account" style="black" onClick={() => navigate("")}/>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-500 drop-shadow-lg">Already have an account?
                        <span 
                            className="text-black underline hover: cursor-pointer ml-2"
                            onClick={() => navigate("")}
                        > 
                            Log in 
                        </span>
                    </p> 
                </div>
            </div>
        </div>
  );
};

export default LoginModal;