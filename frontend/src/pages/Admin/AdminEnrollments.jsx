import React from 'react'
import {
  Search,
  Eye,
} from "lucide-react";

import { useContext, useMemo, useState } from "react";
import { CourseContext } from "../../context/CourseContext";

function Enrollments() {

  const { enrolledCourses } =
    useContext(CourseContext);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState("All");

  // Filter Logic

  const filteredEnrollments = useMemo(() => {

    return enrolledCourses.filter((item) => {

      const searchText = search.toLowerCase();

      const matchesSearch =
        item.student?.name
          ?.toLowerCase()
          .includes(searchText)

        ||

        item.course?.title
          ?.toLowerCase()
          .includes(searchText);

      const matchesStatus =
        statusFilter === "All"
          ? true
          : item.status === statusFilter;

      return matchesSearch && matchesStatus;

    });

  }, [
    enrolledCourses,
    search,
    statusFilter
  ]);

  // Status Colors

  const getStatusStyle = (status) => {

    if (status === "Active") {
      return `
        bg-green-500/20
        text-green-400
      `;
    }

    if (status === "Pending") {
      return `
        bg-orange-500/20
        text-orange-400
      `;
    }

    return `
      bg-red-500/20
      text-red-400
    `;
  };

  return (
    <div className="text-white  bg-gradient-to-b
        from-[#071028]
        to-[#020617] h-screen p-6   ">

      {/* Header */}

      <div className="mb-8">

        <h1 className="
          text-3xl
          font-bold
        ">
          Enrollments
        </h1>

        <p className="
          text-slate-400
          mt-2
        ">
          Manage all course enrollments
        </p>

      </div>

      {/* Search + Filter */}

      <div className="
        flex
        flex-col
        lg:flex-row
        gap-4
        mb-6
      ">

        {/* Search */}

        <div className="
          flex-1
          bg-slate-900
          border
          border-slate-800
          rounded-xl
          px-4
          py-3
          flex
          items-center
          gap-3
        ">

          <Search
            size={20}
            className="text-slate-400"
          />

          <input
            type="text"
            placeholder="Search enrollments..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              bg-transparent
              outline-none
              w-full
              text-white
            "
          />

        </div>

        {/* Filter */}

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-xl
            px-4
            py-3
            outline-none
            text-slate-300
          "
        >

          <option>
            All
          </option>

          <option>
            Active
          </option>

          <option>
            Pending
          </option>

          <option>
            Cancelled
          </option>

        </select>

      </div>

      {/* Table */}

      <div className="
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        overflow-hidden
      ">

        <table className="w-full">

          {/* Head */}

          <thead className="
            bg-slate-800
            text-slate-300
          ">

            <tr>

              <th className="
                text-left
                px-6
                py-4
              ">
                Student
              </th>

              <th className="
                text-left
                px-6
                py-4
              ">
                Course
              </th>

              <th className="
                text-left
                px-6
                py-4
              ">
                Enrollment Date
              </th>

              <th className="
                text-left
                px-6
                py-4
              ">
                Status
              </th>

              <th className="
                text-left
                px-6
                py-4
              ">
                Actions
              </th>

            </tr>

          </thead>

          {/* Body */}

          <tbody>

            {
              filteredEnrollments.map((item) => (

                <tr
                  key={item.id}
                  className="
                    border-t
                    border-slate-800
                    hover:bg-slate-800/40
                    transition-all
                  "
                >

                  {/* Student */}

                  <td className="
                    px-6
                    py-4
                  ">

                    <div className="
                      flex
                      items-center
                      gap-3
                    ">

                      <img
                        src={
                          // "https://i.pravatar.cc/100"
                           "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-1024.png"
                        }
                        alt={
                          item.student?.name
                        }
                        className="
                          w-11
                          h-11
                          rounded-full
                          object-cover
                        "
                      />

                      <div>

                        <h3 className="
                          font-medium
                        ">
                          {item.student?.name}
                        </h3>

                        <p className="
                          text-sm
                          text-slate-400
                        ">
                          {item.student?.email}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Course */}

                  <td className="
                    px-6
                    py-4
                  ">

                    <div className="flex items-center gap-3">

                      <img
                        src={item.course?.image || "https://img.freepik.com/premium-vector/modern-design-concept-no-image-found-design_637684-228.jpg?w=2000"}
                        alt={item.course?.title}
                        className="
                          w-14
                          h-10
                          rounded-lg
                          object-cover
                        "
                      />

                      <div>

                        <h1 className="font-medium">
                          {item.course?.title}
                        </h1>

                        <p className="
                          text-sm
                          text-slate-400
                        ">
                          {item.course?.instructor}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Date */}

                  <td className="
                    px-6
                    py-4
                    text-slate-400
                  ">
                    {item.enrolledAt}
                  </td>

                  {/* Status */}

                  <td className="
                    px-6
                    py-4
                  ">

                    <span className={`
                      px-4
                      py-1
                      rounded-full
                      text-sm
                      font-medium
                      ${getStatusStyle(item.status)}
                    `}>
                      {item.status}
                    </span>

                  </td>

                  {/* Actions */}

                  <td className="
                    px-6
                    py-4
                  ">

                    <button className="
                      p-2
                      rounded-lg
                      border
                      border-orange-500
                      text-orange-400
                      hover:bg-orange-500
                      hover:text-white
                      transition-all
                    ">

                      <Eye size={18} />

                    </button>

                  </td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Enrollments;