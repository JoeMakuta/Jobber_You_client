interface InputProps {
  type: "text" | "password" | "email" | "radio" | "checkbox";
  label: string;
  placeholder?: string;
}

const Input = ({ label, type, placeholder }: InputProps) => {
  return (
    <label className="block">
      <span className="text-gray-700 text-sm dark:text-white ">{label} :</span>
      <input
        required
        type={type}
        placeholder={placeholder}
        className=" text-sm block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </label>
  );
};
export default Input;
