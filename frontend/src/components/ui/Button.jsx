const Button = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`
        bg-orange-500
            hover:bg-orange-600
            transition-all
            duration-300
            px-8
            py-3
            rounded-2xl
            font-semibold
            text-lg
            shadow-lg
            hover:scale-105
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;