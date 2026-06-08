// Get all courses
export const getCourses = async () => {
  const res = await fetch("http://localhost:5000/courses");

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
};

// Get one course
export const getCourseById = async (id) => {
  const res = await fetch(
    `http://localhost:5000/courses/${id}`
  );

  if (!res.ok) {
    throw new Error("Course not found");
  }

  return res.json();
};

// Add course
export const createCourse = async (courseData) => {
    const token = localStorage.getItem("token");
  const res = await fetch(
    "http://localhost:5000/courses",
    {
      method: "POST",
      headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
      body: JSON.stringify(courseData),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to create course");
  }

  return res.json();
};


// Update course
export const updateCourse = async (id, courseData) => {
  const token = localStorage.getItem("token");
  const res = await fetch(
    `http://localhost:5000/courses/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(courseData),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to update course");
  }

  return res.json();
};

// Delete course
export const deleteCourse = async (id) => {
  const token = localStorage.getItem("token");
  const res = await fetch(
    `http://localhost:5000/courses/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to delete course");
  }

  return res.json();
};

// get dtails of courese

export const getDetailCourse = async (id) => {
  const res = await fetch(`http://localhost:5000/courses-details/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
};

export const enrollCourse = async (courseId) => {

  const token = localStorage.getItem("token");

  const res = await fetch(
    "http://localhost:5000/enroll",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        courseId,
      }),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const getMyEnrollments =
  async () => {

    const token =
      localStorage.getItem(
        "token"
      );

    const res = await fetch(
      "http://localhost:5000/enrollments",
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

    return res.json();
  };

  export const removeEnrollment =
  async (id) => {

    const token =
      localStorage.getItem("token");

    const res = await fetch(
      `http://localhost:5000/enrollments/${id}`,
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

  export const getAllEnrollments =
  async () => {

    const token = localStorage.getItem("token");

    const res = await fetch(
      "http://localhost:5000/admin/enrollments",
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

    return res.json();
  };

  export const getChartsData = async () => {
     const token = localStorage.getItem("token");

  const response = await fetch(
    "http://localhost:5000/admin/charts",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return response.json();
};