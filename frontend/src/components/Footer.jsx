const API_URL = "https://mentora-bt9q.onrender.com";
function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              ProTeach
            </h2>
            <p className="mt-4 text-sm leading-6">
              Empowering students with practical skills,
              real-world projects, and career-focused learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 flex flex-col">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/courses">Courses</a></li>
              
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Popular Courses
            </h3>

            <ul className="space-y-2  flex flex-col">
              <li>MERN Stack</li>
              <li>JavaScript</li>
              <li>React JS</li>
              <li>Career Guidance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact
            </h3>

            <ul className="space-y-2  flex flex-col">
              <li>support@proteach.com</li>
              <li>+91 XXXXX XXXXX</li>
              <li>Rajasthan, India</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm">
          © 2026 ProTeach. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;