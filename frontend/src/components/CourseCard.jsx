import { Link } from "react-router-dom"
import Button from "../components/ui/Button";
function CourseCard({
  title,
  id,
  image,
  instructor,
  price,
  isAdmin = false,
  buttonAction,
  buttonText,
  handleEdit,
  handleDelete,
}) 
{
  return (

 <div className="   
      bg-white/5
      border
      border-white/10
      rounded-3xl
      w-[350px]
      h-[400px]
      overflow-hidden
      backdrop-blur-lg
      hover:border-orange-500/40
      hover:-translate-y-2
      transition-all
      duration-300
     
    ">

      {/* Image */}
      <Link to={`/courses-details/${id}`}>
      <img
        src={image || "https://img.freepik.com/premium-vector/modern-design-concept-no-image-found-design_637684-228.jpg?w=2000"}
        alt={title}
        className="
          w-full
          h-1/2
          object-cover
        "
      /> </Link>

      {/* Content */}
      <div className="p-6">


        {/* Title */}
        <h3 className="
          text-2xl
          font-semibold
          text-white
          mb-3
          line-clamp-1
        ">
          {title}
        </h3>

        {/* Instructor */}
        <p className="text-gray-400 mb-5">
          By {instructor}
        </p>

        {/* Bottom */}
        <div className="
          flex
          items-center
          justify-between
        ">

          <h4 className="
            text-orange-400
            text-2xl
            font-bold
          ">
            ₹{price}
          </h4>

{
  isAdmin ? (

    <div className="flex gap-3">

      <Button onClick={handleEdit}>
        Edit
      </Button>

      <Button onClick={handleDelete}>
        Delete
      </Button>

    </div>

  ) : (

    <Button onClick={buttonAction}>
      {buttonText}
    </Button>

  )
}
        </div>

      </div>

    </div>
    
  )
}
export default CourseCard;



