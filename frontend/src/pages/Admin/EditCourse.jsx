import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import AuthInput from "../../components/ui/AuthInput"
import Button from "../../components/ui/Button"
import AuthLayout from "../../components/Layout/AuthLayout"
import {getCourseById, updateCourse} from  "../../services/courseService"
import { toast } from "react-toastify"

function EditCourse() {
 
   
  const { id } = useParams()

  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [instructor, setInstructor] = useState("")
  const [duration, setDuration] = useState("")
  const [level, setLevel] = useState("")
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  // Fetch Existing Course Data
  useEffect(() => {
  const fetchCourse = async () => {
    try {
      setLoading(true);

      const data = await getCourseById(id);
      

      setTitle(data.title);
      setPrice(data.price);
      setDescription(data.description);
      setInstructor(data.instructor);
      setDuration(data.duration);
      setLevel(data.level);
      setImage(data.image);
      
    } catch (error) {
      toast.error(error.message);

    } finally {
      setLoading(false);
    }
  };

  fetchCourse();
}, [id]);

  // Update Course
  async function handleUpdate(e) {

    e.preventDefault()
 
try {
  setUpdating(true);
const requiredFields = [
  { value: title, name: "Title" },
  { value: price, name: "Price" },
  { value: instructor, name: "Instructor" }
];

const emptyField = requiredFields.find(
  field => !field.value.trim()
);

if (emptyField) {
  toast.error(`${emptyField.name} is required`);
  return;
}
  await updateCourse(id, {
    title,
    price,
    description,
    instructor,
    duration,
    level,
    image
  });

  toast.success("Course Updated");

  navigate("/admin");

}

   catch (error) {
  toast.error(error.message);

} finally {
  setUpdating(false);
}

  }

  return (

    <AuthLayout>

      <h1>Edit Course</h1>

      <form onSubmit={handleUpdate}>

        <AuthInput
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <AuthInput
          type="text"
          placeholder="Course Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <AuthInput
          type="text"
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <AuthInput
          type="text"
          placeholder="Instructor Name"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
        />

        <AuthInput
          type="text"
          placeholder="Course Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        <AuthInput
          type="text"
          placeholder="Course Level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />

        <AuthInput
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <Button type="submit" disabled={updating}>

           {updating
    ? "Updating..."
    : "Update Course"}

        </Button>

      </form>

    </AuthLayout>

  )

}

export default EditCourse