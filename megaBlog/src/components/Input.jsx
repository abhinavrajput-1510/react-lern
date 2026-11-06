import { useId } from "react";

export default function Input({
  ref,
  label,
  type = "text",
  className = "",
  ...props
}) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={`px-3 py-2 border rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
      />
    </div>
  );
}
