function About() {
  return (
    <section className="bg-[#050816] text-white py-4 px-6">

  <div className="max-w-7xl mx-auto">

    {/* Top Section */}
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Side */}
      <div>

        {/* Small Badge */}
        <div className="
          inline-flex
          items-center
          gap-2
          bg-orange-500/10
          border
          border-orange-500/20
          rounded-full
          px-5
          py-2
          mb-6
        ">

          <span className="
            w-2
            h-2
            rounded-full
            bg-orange-500
          "></span>

          <p className="text-orange-300 text-sm">
            About Our Platform
          </p>

        </div>

        {/* Heading */}
        <h2 className="
          text-5xl
          md:text-6xl
          font-bold
          leading-tight
        ">

          Build Skills <br />

          <span className="text-orange-500">
            For The Future
          </span>

        </h2>

        {/* Description */}
        <p className="
          mt-8
          text-gray-300
          text-lg
          leading-relaxed
          max-w-xl
        ">
          Our platform helps students learn
          modern technologies like web
          development, AI, and programming
          through practical courses and
          real-world projects.
        </p>

        {/* Features */}
        <div className="space-y-5 mt-10">

          {/* Feature */}
          <div className="flex items-start gap-4">

            <div className="
              w-12
              h-12
              rounded-2xl
              bg-orange-500/10
              flex
              items-center
              justify-center
              text-2xl
              shrink-0
            ">
              🚀
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Career Focused Learning
              </h3>

              <p className="text-gray-400 mt-1">
                Learn skills that help you
                build real-world projects
                and career opportunities.
              </p>
            </div>

          </div>

          {/* Feature */}
          <div className="flex items-start gap-4">

            <div className="
              w-12
              h-12
              rounded-2xl
              bg-orange-500/10
              flex
              items-center
              justify-center
              text-2xl
              shrink-0
            ">
              💻
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Modern Tech Courses
              </h3>

              <p className="text-gray-400 mt-1">
                Explore web development,
                AI, JavaScript, React,
                and advanced technologies.
              </p>
            </div>

          </div>

          {/* Feature */}
          <div className="flex items-start gap-4">

            <div className="
              w-12
              h-12
              rounded-2xl
              bg-orange-500/10
              flex
              items-center
              justify-center
              text-2xl
              shrink-0
            ">
              🌍
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Learn Anytime
              </h3>

              <p className="text-gray-400 mt-1">
                Access courses from anywhere
                with flexible and modern
                online learning experience.
              </p>
            </div>

          </div>

        </div>

        {/* Stats */}
        <div className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-6
          mt-14
        ">

          <div>
            <h3 className="text-3xl font-bold text-orange-400">
              10K+
            </h3>

            <p className="text-gray-400 mt-1">
              Students
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-orange-400">
              50+
            </h3>

            <p className="text-gray-400 mt-1">
              Courses
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-orange-400">
              95%
            </h3>

            <p className="text-gray-400 mt-1">
              Satisfaction
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-orange-400">
              24/7
            </h3>

            <p className="text-gray-400 mt-1">
              Access
            </p>
          </div>

        </div>

      </div>

      {/* Right Side */}
      <div className="relative flex justify-center">

        {/* Glow Effect */}
        <div className="
          absolute
          w-[450px]
          h-[450px]
          bg-orange-500/20
          blur-[120px]
          rounded-full
        "></div>

        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
          alt="about"
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

  </div>

{/* Courses + Partners Section */}
<div className="mt-20">

  {/* Heading */}
  <div className="mb-10">

    <h3 className="
      text-4xl
      font-bold
      mb-4
    ">
      Explore Modern <span className="text-orange-500">Learning Paths</span>
    </h3>

    <p className="
      text-gray-400
      text-lg
      max-w-2xl
    ">
      Learn industry-ready skills with
      modern courses designed for
      developers, creators, and future innovators.
    </p>

  </div>

  {/* Courses Grid */}
  <div className="
    grid
    md:grid-cols-2
    lg:grid-cols-4
    gap-6
  ">

    {/* Course Card */}
    <div className="
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-6
      backdrop-blur-lg
      hover:border-orange-500/40
      transition-all
      duration-300
    ">

      <div className="
        w-14
        h-14
        rounded-2xl
        bg-orange-500/10
        flex
        items-center
        justify-center
        text-3xl
        mb-5
      ">
        💻
      </div>

      <h4 className="text-2xl font-semibold mb-3">
        Web Development
      </h4>

      <p className="text-gray-400 leading-relaxed">
        Learn HTML, CSS, JavaScript,
        React, Node.js, and MERN stack.
      </p>

    </div>

    {/* Course Card */}
    <div className="
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-6
      backdrop-blur-lg
      hover:border-orange-500/40
      transition-all
      duration-300
    ">

      <div className="
        w-14
        h-14
        rounded-2xl
        bg-orange-500/10
        flex
        items-center
        justify-center
        text-3xl
        mb-5
      ">
        🤖
      </div>

      <h4 className="text-2xl font-semibold mb-3">
        Artificial Intelligence
      </h4>

      <p className="text-gray-400 leading-relaxed">
        Build AI apps, machine learning
        models, and automation tools.
      </p>

    </div>

    {/* Course Card */}
    <div className="
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-6
      backdrop-blur-lg
      hover:border-orange-500/40
      transition-all
      duration-300
    ">

      <div className="
        w-14
        h-14
        rounded-2xl
        bg-orange-500/10
        flex
        items-center
        justify-center
        text-3xl
        mb-5
      ">
        📱
      </div>

      <h4 className="text-2xl font-semibold mb-3">
        App Development
      </h4>

      <p className="text-gray-400 leading-relaxed">
        Create Android and modern
        cross-platform mobile apps.
      </p>

    </div>

    {/* Course Card */}
    <div className="
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-6
      backdrop-blur-lg
      hover:border-orange-500/40
      transition-all
      duration-300
    ">

      <div className="
        w-14
        h-14
        rounded-2xl
        bg-orange-500/10
        flex
        items-center
        justify-center
        text-3xl
        mb-5
      ">
        🎨
      </div>

      <h4 className="text-2xl font-semibold mb-3">
        UI/UX Design
      </h4>

      <p className="text-gray-400 leading-relaxed">
        Learn modern UI design,
        Figma, and user experience systems.
      </p>

    </div>

  </div>
{/* Trusted By Section */}
{/* Trusted Companies Section */}
<div className="mt-24">

  {/* Heading */}
  <div className="text-center mb-12">

    <h3 className="
      text-4xl
      font-bold
      mb-4
    ">
      Trusted By <span className="text-orange-500">Top Companies</span>
    </h3>

    <p className="
      text-gray-400
      text-lg
      max-w-2xl
      mx-auto
    ">
      Learn modern skills inspired by
      global technology leaders and
      industry-standard practices.
    </p>

  </div>

  {/* Logo Grid */}
  <div className="
    grid
    grid-cols-2
    md:grid-cols-3
    lg:grid-cols-6
    gap-6
  ">

    {/* Google */}
    <div className="
      bg-white/5
      border
      border-white/10
      rounded-2xl
      p-6
      flex
      items-center
      justify-center
      backdrop-blur-lg
      hover:border-orange-500/30
      hover:scale-105
      transition-all
      duration-300
    ">

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        alt="Google"
        className="h-10 object-contain"
      />

    </div>

    {/* Microsoft */}
    <div className="
      bg-white/5
      border
      border-white/10
      rounded-2xl
      p-6
      flex
      items-center
      justify-center
      backdrop-blur-lg
      hover:border-orange-500/30
      hover:scale-105
      transition-all
      duration-300
    ">

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
        alt="Microsoft"
        className="h-8 object-contain"
      />

    </div>

    {/* Amazon */}
    <div className="
      bg-white/5
      border
      border-white/10
      rounded-2xl
      p-6
      flex
      items-center
      justify-center
      backdrop-blur-lg
      hover:border-orange-500/30
      hover:scale-105
      transition-all
      duration-300
    ">

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt="Amazon"
        className="h-8 object-contain"
      />

    </div>

    {/* Meta */}
    <div className="
      bg-white/5
      border
      border-white/10
      rounded-2xl
      p-6
      flex
      items-center
      justify-center
      backdrop-blur-lg
      hover:border-orange-500/30
      hover:scale-105
      transition-all
      duration-300
    ">

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg"
        alt="Meta"
        className="h-8 object-contain"
      />

    </div>

    {/* Netflix */}
    <div className="
      bg-white/5
      border
      border-white/10
      rounded-2xl
      p-6
      flex
      items-center
      justify-center
      backdrop-blur-lg
      hover:border-orange-500/30
      hover:scale-105
      transition-all
      duration-300
    ">

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix"
        className="h-10 object-contain"
      />

    </div>

    {/* Adobe */}
    <div className="
      bg-white/5
      border
      border-white/10
      rounded-2xl
      p-6
      flex
      items-center
      justify-center
      backdrop-blur-lg
      hover:border-orange-500/30
      hover:scale-105
      transition-all
      duration-300
    ">

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg"
        alt="Adobe"
        className="h-10 object-contain"
      />

    </div>

  </div>

</div>
</div>
</section>



  )
}

export default About