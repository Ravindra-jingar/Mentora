import React from "react";

function StatsCard({
  title,
  value,
  icon,
  growth,
  iconBg
}) {

  return (

    <div className="
      relative
      overflow-hidden
      rounded-2xl
      border
      border-slate-800
      bg-gradient-to-br
      from-[#081028]
      to-[#020617]
      p-6
      shadow-lg
      transition-all
      duration-300
      hover:scale-[1.02]
      hover:border-orange-500/40
    ">

      {/* Glow Effect */}

      <div className="
        absolute
        -top-10
        -right-10
        w-32
        h-32
        bg-orange-500/10
        rounded-full
        blur-3xl
      " />

      <div className="
        relative
        flex
        items-start
        justify-between
      ">

        {/* Left */}

        <div>

          <p className="
            text-slate-400
            text-sm
            mb-2
          ">
            {title}
          </p>

          <h1 className="
            text-4xl
            font-bold
            text-white
          ">
            {value}
          </h1>


        </div>

        {/* Right Icon */}

        <div className={`
          w-14
          h-14
          rounded-2xl
          flex
          items-center
          justify-center
          ${iconBg}
        `}>

          {icon}

        </div>

      </div>

    </div>
  );
}

export default StatsCard;