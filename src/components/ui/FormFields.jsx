import { cn } from "@/lib/utils";

const FormFields = ({ fields, formState, onChange, errors, isSignUp }) => {
    return (
        <>
            {fields.map((field) => (
                <label key={field.name} className="flex flex-col md:px-24 px-6 pt-3">
                    <p className="text-gray-600">{field.label}</p>
                    <input
                        type={field.type}
                        name={field.name}
                        value={formState[field.name] ?? ""}
                        onChange={onChange}
                        placeholder={field.placeholder}
                        className={cn(
                            "w-full rounded-md h-auto p-2 bg-white",
                            {
                                "border border-red-500": errors[field.name],
                                "border border-gray-300": !errors[field.name],
                            }
                        )}
                    />
                    {isSignUp && errors[field.name] && (
                        <p className="text-red-500 text-sm pt-1">
                            {errors[field.name]}
                        </p>
                    )}
                </label>
            ))}
        </>
    );
};

export default FormFields;
