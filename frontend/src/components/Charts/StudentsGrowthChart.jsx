import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";


const data = [
  { day: "May 12", students: 20 },
  { day: "May 13", students: 30 },
  { day: "May 14", students: 60 },
  { day: "May 15", students: 65 },
  { day: "May 16", students: 90 },
  { day: "May 17", students: 105 },
  { day: "May 18", students: 130 },
];

function StudentsGrowthChart() {

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

      <div className="
        flex
        items-center
        justify-between
        mb-6
      ">

        <h1 className="
          text-xl
          font-bold
          text-white
        ">
          Students Growth
        </h1>

      </div>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <LineChart data={data}>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1e293b"
          />
          
          <YAxis 
          dataKey="students"
          stroke="#94a3b8"
          />
        
          <XAxis
            dataKey="day"
            stroke="#94a3b8"
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="students"
            stroke="#f97316"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default StudentsGrowthChart;