// studentService.js

export const getStudents = async () => {
  const res = await fetch(
    "http://localhost:5000/students"
  );

  return res.json();
};

export const deleteStudent = async (id) => {
  const token =
      localStorage.getItem("token");
  const res = await fetch(
    `http://localhost:5000/students/${id}`,
    {
        method: "DELETE",
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
  );

  return res.json();
};
