import { useEffect, useState }
from "react"
import {
  Star,
  Clock,
  Users,
  PlayCircle,
  Award,
  Globe,
  CheckCircle,
} from "lucide-react";
import { useParams } from "react-router-dom"
import {getDetailCourse} from '../services/courseService'
import  Spinner  from "../components/ui/Spinner.jsx"
function CourseDetails() {
  
  const { id } = useParams()
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error , setError] = useState("")

 useEffect(() => {
  const fetchDetail = async () => {
    try { 
      setLoading(true);
      const data = await getDetailCourse(id)
console.log("Data:", data);

      setCourse(data);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  fetchDetail();
}, [id]);
  if (loading) {

    return <Spinner />;

  }
if (!course) {
  return (
    <div className="text-white text-center p-10">
      Course not found
    </div>
  );
}
  return (
    <div className="bg-[#0f172a] text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-10">
        {/* LEFT */}
        <div className="lg:col-span-2">
          <span className="bg-blue-600 px-4 py-1 rounded-full text-sm font-medium">
           {course.title}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">
            {course.description}
          </h1>

          <p className="text-gray-300 mt-5 text-lg leading-relaxed">
            {course.description}
          </p>

          {/* COURSE STATS */}
          <div className="flex flex-wrap gap-6 mt-8 text-gray-300">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400 fill-yellow-400" size={20} />
              <span>4.9 Rating</span>
            </div>

            <div className="flex items-center gap-2">
              <Users size={20} />
              <span>12,500 Students</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>42 Hours</span>
            </div>
          </div>

          {/* INSTRUCTOR */}
          <div className="flex items-center gap-4 mt-8">
            <img
              src="https://i.pravatar.cc/100"
              alt="Instructor"
              className="w-14 h-14 rounded-full border-2 border-blue-500"
            />

            <div>
              <h3 className="font-semibold text-lg">{course.instructor}</h3>
              <p className="text-gray-400">
                Senior Full Stack Developer
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#1e293b] rounded-3xl overflow-hidden shadow-2xl border border-gray-700 h-fit sticky top-6">
          <img
            src={course.image}
            alt="Course"
            className="w-full h-56 object-cover"
          />

          <div className="p-6">
            <div className="flex items-center gap-3">
              <h2 className="text-4xl font-bold">₹{course.price}</h2>
              <span className="line-through text-gray-400">₹{course.originalPrice}</span>
            </div>

            <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-500 py-4 rounded-xl font-semibold text-lg hover:scale-[1.02] transition-all duration-300">
              Enroll Now
            </button>

            <button className="w-full mt-4 border border-gray-600 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition">
              Watch Preview
            </button>

            {/* FEATURES */}
            <div className="mt-8 space-y-5">
              <div className="flex justify-between text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  Duration
                </div>
                <span>{course.duration}</span>
              </div>

              <div className="flex justify-between text-gray-300">
                <div className="flex items-center gap-2">
                  <PlayCircle size={18} />
                  Lessons
                </div>
                <span>120+</span>
              </div>

              <div className="flex justify-between text-gray-300">
                <div className="flex items-center gap-2">
                  <Award size={18} />
                  Certificate
                </div>
                <span>Yes</span>
              </div>

              <div className="flex justify-between text-gray-300">
                <div className="flex items-center gap-2">
                  <Globe size={18} />
                  Language
                </div>
                <span>English</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-[#1e293b] rounded-3xl p-8 border border-gray-700">
          <h2 className="text-3xl font-bold mb-8">
            What You'll Learn
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Build Full Stack Applications",
              "Master React & Node.js",
              "Authentication & JWT",
              "MongoDB Database",
              "REST APIs",
              "Deployment & Hosting",
              "Professional Coding Practices",
              "Real-world Projects",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-gray-300"
              >
                <CheckCircle className="text-green-400" size={20} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-[#1e293b] rounded-3xl p-8 border border-gray-700">
          <h2 className="text-3xl font-bold mb-8">
            Course Curriculum
          </h2>

          <div className="space-y-5">
            {[
              "HTML & CSS Fundamentals",
              "JavaScript Mastery",
              "React.js Complete Guide",
              "Backend with Node.js",
              "MongoDB Database",
              "Authentication System",
              "Deployment",
            ].map((module, index) => (
              <div
                key={index}
                className="bg-[#0f172a] border border-gray-700 rounded-2xl p-5 hover:border-blue-500 transition"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">
                    Module {index + 1}: {module}
                  </h3>

                  <span className="text-gray-400 text-sm">
                    8 Lessons
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-8">
          Student Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-[#1e293b] rounded-3xl p-6 border border-gray-700"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="text-yellow-400 fill-yellow-400"
                    size={18}
                  />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed">
                Amazing course! Everything explained in a very
                practical and beginner-friendly way.
              </p>

              <div className="flex items-center gap-3 mt-6">
                <img
                  src="https://i.pravatar.cc/80"
                  alt=""
                  className="w-12 h-12 rounded-full"
                />

                <div>
                  <h4 className="font-semibold">Rahul Sharma</h4>
                  <p className="text-sm text-gray-400">
                    Student
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED COURSES */}
      <section className="max-w-7xl mx-auto px-6 py-10 pb-20">
        <h2 className="text-3xl font-bold mb-8">
          Related Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((course) => (
            <div
              key={course}
              className="bg-[#1e293b] rounded-3xl overflow-hidden border border-gray-700 hover:scale-[1.02] transition"
            >
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt=""
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">
                  React Development Course
                </h3>

                <p className="text-gray-400 mt-2">
                  Learn modern React with projects.
                </p>

                <div className="flex justify-between items-center mt-5">
                  <span className="text-2xl font-bold">
                    ₹799
                  </span>

                  <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-500 transition">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  
  )

}

export default CourseDetails