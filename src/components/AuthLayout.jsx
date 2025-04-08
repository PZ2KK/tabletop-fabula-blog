import { useState, useEffect } from "react";
import Button from "./ui/Button";
import FormFields from "./ui/FormFields";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

const AuthLayout = () => {
    const [signUpForm, setSignUpForm] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
    });
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [signUpToggle, setSignUpToggle] = useState(true)

    const navigate = useNavigate();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^.{6,}$/;

    useEffect(()=>{
        setErrors({})
    }, [signUpToggle]);

    // when typing
    const handleChange = (e) => {
        setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    // when submit
    const handleSignUp = (e) => {
        e.preventDefault();
        setErrors({})
        if (
            !signUpForm.name || 
            !signUpForm.username ||
            (!signUpForm.email ||!emailRegex.test(signUpForm.email)) ||
            (!signUpForm.password || !passwordRegex.test(signUpForm.password))
        ) {
            setErrors({
                name: !signUpForm.name ? "Please enter your name" : "",
                username: !signUpForm.username ? "Please enter your username" : "",
                email: !signUpForm.email ? "Please enter your email" : !emailRegex.test(signUpForm.email) ? "Email must be a valid email" : "",
                password: !signUpForm.password ? "Please enter your password" : !passwordRegex.test(signUpForm.password) ? "Password must be at least 6 characters" : "",
            });
            return;
        }
        setSubmitted(true);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setErrors({})
        if (
            (!signUpForm.email ||!emailRegex.test(signUpForm.email)) ||
            (!signUpForm.password || !passwordRegex.test(signUpForm.password))
        ) {
            toast.custom((t) => (
                <div className="bg-[#EB5164] p-4 px-6 rounded-xl relative w-120">
                  <h1 className="text-white font-semibold">Your password is incorrect or this email doesn't exist</h1>
                  <p className="text-white text-sm">Please try another password or email</p>
                   <button className="text-white cursor-pointer absolute top-2 right-3 text-2xl" onClick={() => toast.dismiss(t)}>&times;</button>
                </div>
              ));
            setErrors({
                email: !signUpForm.email ? "Please enter your email" : !emailRegex.test(signUpForm.email) ? "Email must be a valid email" : "",
                password: !signUpForm.password ? "Please enter your password" : !passwordRegex.test(signUpForm.password) ? "Password must be at least 6 characters" : "",
            });
            return;
        }
        setSubmitted(true);
    };

    const signUpFields = [
        { label: "Name", name: "name", placeholder: "Full name", type: "text" },
        { label: "Username", name: "username", placeholder: "Username", type: "text" },
        { label: "Email", name: "email", placeholder: "example@email.com", type: "email" },
        { label: "Password", name: "password", placeholder: "Password", type: "password" },
    ];

    const loginFields = [
        { label: "Email", name: "email", placeholder: "example@email.com", type: "text" },
        { label: "Password", name: "password", placeholder: "Password", type: "password" },
    ];

    if (submitted) {
        return (
          <div className="flex flex-col flex-grow items-center justify-top md:pt-36 pt-20 p-6">
            <div className="flex flex-col gap-6 justify-center items-center bg-[#EFEEEB] md:w-150 w-full rounded-xl p-12 text-center">
              <div className="bg-[#12B279] flex justify-center items-center rounded-full w-12 h-12"> 
                <FaCheck color="white" size="25"/>
              </div>
              <p className="text-3xl font-bold">Registration success</p>
              <button
                onClick={() => navigate("/")}
                className="bg-black text-white px-12 py-2 rounded-full hover:bg-gray-800 cursor-pointer"
              >
                Continue
              </button>
            </div>
          </div>
        );
      }

    return (
        <>
            <div className="flex flex-col flex-grow items-center justify-center w-full px-6 pt-20 pb-6">
                {/* Main Box */}
                <div className="md:w-150 w-full bg-[#EFEEEB] rounded-xl">
                    {signUpToggle ? (

                        // SignUp Form
                        <form onSubmit={handleSignUp}>
                            <h1 className="flex justify-center items-center font-bold text-3xl pt-12 pb-6">
                                Sign up </h1>

                                <FormFields
                                fields={signUpFields}
                                formState={signUpForm}
                                onChange={handleChange}
                                errors={errors}
                                isSignUp={signUpToggle}
                                />

                            <div className="w-full md:px-56 px-24 py-6">
                                <Button text="Sign up" style="black" type="submit"/>
                            </div>
                            <p className="flex justify-center text-gray-500 drop-shadow-lg pb-6">Already have an account?
                                <span 
                                    className="text-black underline hover: cursor-pointer ml-2"
                                    onClick={() => {
                                        setSignUpToggle(!signUpToggle); 
                                        navigate("/signup");
                                }}> 
                                    Log in
                                </span>
                            </p> 
                        </form>
                    ) : (
                        // Login Form
                        <form onSubmit={handleLogin}>
                            <h1 className="flex justify-center items-center font-bold text-3xl pt-12 pb-6">
                                Log in </h1>

                                <FormFields
                                fields={loginFields}
                                formState={loginForm}
                                onChange={handleChange}
                                errors={errors}
                                isSignUp={signUpToggle}
                                />

                            <div className="w-full md:px-56 px-24 py-6">
                                <Button text="Log in" style="black" type="submit"/>
                            </div>
                            <p className="flex justify-center text-gray-500 drop-shadow-lg pb-6">Don't have any account?
                                <span 
                                    className="text-black underline hover: cursor-pointer ml-2"
                                    onClick={() => {
                                        setSignUpToggle(!signUpToggle); 
                                        navigate("/signup");
                                }}> 
                                    Sign up
                                </span>
                            </p> 
                        </form>
                    )}
                </div>
            </div>
        </>
    );
};

export default AuthLayout;