import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import Button from "./ui/Button";
import FormFields from "./ui/FormFields";

const SignupForm = () => {
    const [signUpForm, setSignUpForm] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^.{6,}$/;

    const handleChange = (e) => {
        setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        setErrors({});
        if (
            !signUpForm.name || 
            !signUpForm.username ||
            !emailRegex.test(signUpForm.email) ||
            !passwordRegex.test(signUpForm.password)
        ) {
            setErrors({
                name: !signUpForm.name ? "Please enter your name" : "",
                username: !signUpForm.username ? "Please enter your username" : "",
                email: !signUpForm.email ? "Please enter your email" : !emailRegex.test(signUpForm.email) ? "Email must be valid" : "",
                password: !signUpForm.password ? "Please enter your password" : !passwordRegex.test(signUpForm.password) ? "Password must be at least 6 characters" : "",
            });
            return;
        }
        setSubmitted(true);
    };

    const fields = [
        { label: "Name", name: "name", placeholder: "Full name", type: "text" },
        { label: "Username", name: "username", placeholder: "Username", type: "text" },
        { label: "Email", name: "email", placeholder: "example@email.com", type: "email" },
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
        <div className="flex flex-col flex-grow items-center justify-center w-full px-6 pt-20 pb-6">
            <div className="md:w-150 w-full bg-[#EFEEEB] rounded-xl">
                <form onSubmit={handleSignUp}>
                    <h1 className="flex justify-center font-bold text-3xl pt-12 pb-6">Sign up</h1>
                    <FormFields
                        fields={fields}
                        formState={signUpForm}
                        onChange={handleChange}
                        errors={errors}
                        isSignUp={true}
                    />
                    <div className="w-full md:px-56 px-24 py-6">
                        <Button text="Sign up" style="black" type="submit"/>
                    </div>
                    <p className="flex justify-center text-gray-500 pb-6">
                        Already have an account?
                        <span className="text-black underline ml-2 cursor-pointer" onClick={() => navigate("/login")}>
                            Log in
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
