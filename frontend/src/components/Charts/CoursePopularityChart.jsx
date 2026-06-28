import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";
import { useState, useEffect } from "react";


const COLORS = [
  "#f97316",
  "#3b82f6",
  "#8b5cf6",
  "#22c55e",
];

function CoursePopularityChart({ data }) {
  const total = data.reduce(
  (sum, item) => sum + (item?.value || 0),
  0
);
// const [courses, setCourses] = useState([])
// useEffect(() => {

//   fetch("http://localhost:5000/courses")

//     .then((res) => res.json())

//     .then((data) => {

//       setCourses(data)

//     })

// }, [])
// const data = courses.map((course) =>{
 
//       return {

//         name: course.title,

//         value:
//           Math.floor(
//             Math.random() * 100
//           ) + 1

//       }
 
// })

  return (

    <div className="
      bg-gradient-to-br
      from-slate-900
      to-slate-950
      border
      border-slate-800
      rounded-2xl
      p-6
    ">

      <h1 className="
        text-2xl
        font-bold
        text-white
        mb-8
      ">
        Course Popularity
      </h1>

      <div className="
        flex
        flex-col
        lg:flex-row
        items-center
        justify-between
        gap-10
      ">

        {/* Chart */}

        <div className="w-full h-[300px]">

          <ResponsiveContainer>

            <PieChart>

              <Pie
                data={data}
                innerRadius={70}
                outerRadius={100}
                dataKey="value"
              >

                {
                  data.map((entry, index) => (

                    <Cell
                     key={index}
  fill={`hsl(${index * 50}, 90%, 45%)`}
                    />

                  ))
                }

              </Pie>

            </PieChart>

          </ResponsiveContainer>

        </div>

        {/* Legend */}

        <div className="
          w-full
          space-y-5
        ">

          {
            data.map((item, index) => (

              <div
                key={item.name}
                
                className="
                  flex
                  items-center
                  justify-between
                "
              >

                {/* Left */}

                <div className="
                  flex
                  items-center
                  gap-3
                ">

                  <div
                    className="
                      w-4
                      h-4
                      rounded-full
                    "
                    style={{
                      backgroundColor: `hsl(${index * 50}, 70%, 55%)`
                    }}
                  />

                  <h1 className="
                    text-slate-300
                    font-medium
                  ">
                    {item.name}
                  </h1>

                </div>

                {/* Right */}

                <p className="
                  text-white
                  font-semibold
                ">
                  {((item.value / total) * 100).toFixed(1)}%
                </p>

              </div>

            ))
          }

        </div>

      </div>

    </div>
  );
}

export default CoursePopularityChart;