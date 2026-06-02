import { Link } from "react-router-dom"
import  Button  from "../components/ui/Button"
function Home() {

  const User =
  JSON.parse(localStorage.getItem("user"))
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>

  {/* Grid Background */}
  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:40px_40px]"></div>

  {/* Main Container */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-0">

    {/* Hero Section */}
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Content */}
      <div>
        {/* Small Badge */}
        <div className="
          inline-flex
          items-center
          gap-2
          text-3xl
          px-2
          py-2
          
        ">

          <p className="text-orange-300 text-xl">
              Hey  {User?.name} 👋
          </p>

        </div>
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">

          Build Your <br />

          <span className="text-orange-500">
            Future With Skills
          </span>

        </h1>

        {/* Description */}
        <p className="mt-8 text-gray-300 text-lg leading-relaxed max-w-xl">
          Learn programming, web development, AI,
          and industry-ready skills with practical
          courses designed for modern learners.
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-6 mt-10">

          <div>
            <h3 className="text-orange-400 text-2xl font-bold">
              10K+
            </h3>

            <p className="text-gray-400">
              Active Students
            </p>
          </div>

          <div>
            <h3 className="text-orange-400 text-2xl font-bold">
              50+
            </h3>

            <p className="text-gray-400">
              Premium Courses
            </p>
          </div>

          <div>
            <h3 className="text-orange-400 text-2xl font-bold">
              95%
            </h3>

            <p className="text-gray-400">
              Satisfaction Rate
            </p>
          </div>

          <div>
            <h3 className="text-orange-400 text-2xl font-bold">
              24/7
            </h3>

            <p className="text-gray-400">
              Learning Access
            </p>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-5 mt-12">
<Link to="/courses">
          <Button>Explore Courses</Button>
</Link>
          <Button className="
            border
            border-white/20
            bg-white/5
            backdrop-blur-md
            hover:bg-white/10
          ">
            Watch Demo
          </Button>

        </div>

      </div>

      {/* Right Side */}
      <div className="relative flex justify-center">

        {/* Glow */}
        <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full"></div>

        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
          alt="student"
          className="
            relative
            z-10
            rounded-3xl
            shadow-2xl
            border
            border-white/10
            w-full
            max-w-lg
            object-cover
          "
        />

      </div>

    </div>

    {/* Bottom Cards */}


  </div>

</section>
  )
}

export default Home