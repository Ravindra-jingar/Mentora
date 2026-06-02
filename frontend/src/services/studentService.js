// studentService.js

export const getStudents = async () => {
  const res = await fetch(
    "http://localhost:5000/students"
  );

  return res.json();
};