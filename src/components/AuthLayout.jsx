import { useState } from "react";
import { cn } from "@/lib/utils";

const AuthLayout = () => {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // when typing
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    // when submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({})
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^[A-Za-z0-9]{6,}$/;
        if (
            !formData.name || 
            !formData.username ||
            (!formData.email ||!emailRegex.test(formData.email)) ||
            (!formData.password || passwordRegex.test(formData.password))
        ) {
            setErrors({
                name: !formData.name ? "Please enter your name" : "",
                username: !formData.username ? "Please enter your username" : "",
                email: !formData.email ? "Please enter your email" : !emailRegex.test(formData.email) ? "Email must be a valid email" : "",
                password: !formData.password ? "Please enter your password" : !passwordRegex.test(formData.password) ? "Password must be at least 6 characters and have no special character" : "",
            });
            return;
        }
        setSubmitted(true);
    };

  return (
    <>
      {/* Main Box */}
        <div className="flex flex-col items-center justify-center w-full min-h-screen p-6">
            <div className="w-[446px] bg-white shadow-xl rounded-b-xl">
            {submitted ? (
                // Success Form
                <div className="">
                
                </div>
            ) : (
                
                // Survey Form
                <form onSubmit={handleSubmit}>
                    <h1 className="flex items-center font-bold text-white text-2xl">
                        Sign up
                    </h1>
                <div className="flex flex-col">
                    {/* Name */}
                    <label className="px-6 py-6">
                        <p className="pb-2 text-sm">
                            Name
                        </p>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={cn(
                                "w-full rounded-md h-auto p-2 border",
                                {
                                "border-red-500": errors.name,
                                "border-gray-300": !errors.name
                                }
                            )}
                            placeholder="Full name"
                            required
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm pt-3">{errors.name}</p>
                        )}
                    </label>

                    {/* Username */}
                    <label className="px-6 py-6">
                        <p className="pb-2 text-sm">
                            Username
                        </p>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className={cn(
                                "w-full rounded-md h-auto p-2 border",
                                {
                                "border-red-500": errors.username,
                                "border-gray-300": !errors.username
                                }
                            )}
                            placeholder="Username"
                            required
                        />
                        {errors.username && (
                            <p className="text-red-500 text-sm pt-3">{errors.username}</p>
                        )}
                    </label>

                    {/* Email */}
                    <label className="px-6 pb-6">
                        <p className="pb-2 text-sm">
                            อีเมล <span className="text-red-500">*</span>
                        </p>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={cn(
                                "w-full rounded-md h-auto p-2 border",
                                {
                                "border-red-500": errors.email,
                                "border-gray-300": !errors.email
                                }
                            )}
                            placeholder="example@email.com"
                            required
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm pt-3">{errors.email}</p>
                        )}
                    </label>

                    {/* Password */}
                    <label className="px-6 py-6">
                        <p className="pb-2 text-sm">
                            Password
                        </p>
                        <input
                            type="text"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={cn(
                                "w-full rounded-md h-auto p-2 border",
                                {
                                "border-red-500": errors.password,
                                "border-gray-300": !errors.password
                                }
                            )}
                            placeholder="password"
                            required
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm pt-3">{errors.password}</p>
                        )}
                    </label>
                </div>
                </form>
            )}
            </div>
      </div>
    </>
  );
};

export default AuthLayout;