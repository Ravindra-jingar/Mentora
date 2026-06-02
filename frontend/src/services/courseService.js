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
  const res = await fetch(
    "http://localhost:5000/courses",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
  const res = await fetch(
    `http://localhost:5000/courses/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
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
  const res = await fetch(
    `http://localhost:5000/courses/${id}`,
    {
      method: "DELETE",
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