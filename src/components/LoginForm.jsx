import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Button from "./ui/Button";
import FormFields from "./ui/FormFields";

const LoginForm = () => {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^.{6,}$/;

    const handleChange = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setErrors({});
        if (
            !emailRegex.test(loginForm.email) ||
            !passwordRegex.test(loginForm.password)
        ) {
            toast.custom((t) => (
                <div className="bg-[#EB5164] p-4 px-6 rounded-xl relative w-120">
                    <h1 className="text-white font-semibold">
                        Your password is incorrect or this email doesn't exist.
                    </h1>
                    <p className="text-white text-sm">
                        Please try another password or email.
                    </p>
                    <button className="text-white absolute top-2 right-3 text-2xl" onClick={() => toast.dismiss(t)}>
                        &times;
                    </button>
                </div>
            ));
            setErrors({
                email: "err",
                password: "err",
            });
            return;
        }
        setSubmitted(true);
    };

    const fields = [
        { label: "Email", name: "email", placeholder: "example@email.com", type: "text" },
        { label: "Password", name: "password", placeholder: "Password", type: "password" },
    ];

    if (submitted) {
        return (
            <div className="flex flex-col items-center justify-center pt-36 p-6">
                <h1 className="text-3xl font-bold">Login success</h1>
                <button
                    onClick={() => navigate("/")}
                    className="bg-black text-white mt-6 px-12 py-2 rounded-full hover:bg-gray-800 cursor-pointer"
                >
                    Continue
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col flex-grow items-center justify-center w-full px-6 pt-20 pb-6">
            <div className="md:w-150 w-full bg-[#EFEEEB] rounded-xl">
                <form onSubmit={handleLogin}>
                    <h1 className="flex justify-center font-bold text-3xl pt-12 pb-6">Log in</h1>
                    <FormFields
                        fields={fields}
                        formState={loginForm}
                        onChange={handleChange}
                        errors={errors}
                        isSignUp={false}
                    />
                    <div className="w-full md:px-56 px-24 py-6">
                        <Button text="Log in" style="black" type="submit"/>
                    </div>
                    <p className="flex justify-center text-gray-500 pb-6">
                        Don't have any account?
                        <span className="text-black underline ml-2 cursor-pointer" onClick={() => navigate("/signup")}>
                            Sign up
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
