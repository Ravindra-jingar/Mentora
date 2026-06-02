const AuthInput = ({
  label,
  type,
  placeholder,
  showLabel = true,
  value,
  onChange,
  className = "",
  classMain = "",
  ...props
}) => {
  return (
    <div className={`mb-5 ${classMain}`}>
      {/* <label className="block mb-2 text-sm"> */}
        {showLabel && <label className="block mb-2 text-sm">{label}</label>}
      {/* </label> */}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          w-full
          px-4
          py-3
          text-white
          rounded-xl
          bg-white/10
          border
          border-white/20
          outline-none
          focus:border-orange-500
          focus:border-2
          focus:ring-orange-600/40
          transition-all
          ${className}
        `}
        {...props}
      />
    </div>
  );
};

export default AuthInput;