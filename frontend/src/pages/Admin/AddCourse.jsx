import { useState } from "react"
import  Button  from "../../components/ui/Button"
import AuthLayout from "../../components/Layout/AuthLayout";
import AuthInput from "../../components/ui/AuthInput";
import { createCourse } from "../../services/courseService";
import { toast } from "react-toastify"
function AddCourse() {
 const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [instructor, setInstructor] = useState("")
  const [duration, setDuration] = useState("")
  const [level, setLevel] = useState("")
  const [image, setImage] = useState("")
  
function resetForm() {
  setTitle("");
  setPrice("");
  setDescription("");
  setInstructor("");
  setDuration("");
  setLevel("");
  setImage("");
}
function validateForm() {
  const requiredFields = [
    { value: title, name: "Title" },
    { value: price, name: "Price" },
    { value: instructor, name: "Instructor" }
  ];

  return requiredFields.find(
    field => !field.value.trim()
  );
}
async function  handleSubmit(e) {

    e.preventDefault()
   const error = validateForm();

if (error) {
  toast.error(`${error.name} is required`);
  return;
}
setLoading(true);

 try {
    const result = await createCourse({
      title,
      price,
      description,
      instructor,
      duration,
      level,
      image
    });
    
    toast.success("Course Added")
    resetForm();
  } catch (error) {
   
    toast.error(error.message)
  }finally{
  setLoading(false);

  }
  }

  return (

    <AuthLayout
      bgImage={null}
  className="bg-gradient-to-br w-full from-[#0f172a] via-[#111827] to-[#020617]"

      title="Add Course"
      subtitle="Create a new course"
    >
      <form onSubmit={handleSubmit}>

        <AuthInput
          label="Course Title"
          type="text"
          placeholder="Enter course title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <AuthInput
          label="Course Price"
          type="text"
          placeholder="Enter course price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
         <AuthInput
          label="Course Description"
          type="text"
          placeholder="Enter course description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <AuthInput
          label="Instructor"
          type="text"
          placeholder="Enter instructor name"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
        />
        <AuthInput
          label="Duration"
          type="text"
          placeholder="Enter course duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <AuthInput
          label="Level"
          type="text"
          placeholder="Enter course level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
        <AuthInput
          label="Image URL"
          type="text"
          placeholder="Enter image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <Button type="submit" className="w-full"   disabled={loading}
>
          {loading ? "Adding..." : "Add Course"}
        </Button>

      </form>

    </AuthLayout>
  )
}

export default AddCourse