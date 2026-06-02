import bgImage from "../../assets/bgimage.jpg"

const AuthLayout = ({
  children,
  title,
  subtitle,
  bgImage,
  className,
 
 
}) => {
  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-cover bg-center relative ${className}`}
       style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
            }
          : {}
      }
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Card */}
      <div className="relative z-10 w-[110%] max-w-md py-12">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10 text-white">
          
          <h1 className="text-orange-500 text-4xl font-bold text-center mb-4">
            {title}
          </h1>

          <p className="text-center mb-8">
            {subtitle}
          </p>

          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;