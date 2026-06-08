const API_URL = "https://mentora-bt9q.onrender.com";
export const getStudents = async () => {
  const res = await fetch(
    `${API_URL}/students`
  );

  return res.json();
};

export const deleteStudent = async (id) => {
  const token =
      localStorage.getItem("token");
  const res = await fetch(
    `${API_URL}/students/${id}`,
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
