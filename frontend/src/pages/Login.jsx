import { useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Link, useNavigate }
from "react-router-dom"
import bgImage from "../assets/bgimage.jpg";
import  Button  from "../components/ui/Button"
import AuthLayout from "../components/Layout/AuthLayout";
import AuthInput from "../components/ui/AuthInput";
import { loginUser } from "../services/authService";
function Login() {
const currentUser = JSON.parse(localStorage.getItem("user"))

  const { setIsLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

 async function handleLogin(e) {

    e.preventDefault()
 try {
    const data = await loginUser(
      email,
      password
    );

    if (data.message === "Login Successful") {

      localStorage.setItem(
    "token",
    data.token
  );
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      localStorage.setItem(
        "role",
        data.user.role
      );

      setIsLoggedIn(true);

      navigate("/");
    }
  } catch (error) {
  
    alert(error.message);
  }
} 
  return (
         <AuthLayout
         bgImage={bgImage}
      title="Welcome Back"
      subtitle="Login to continue learning"
    >
<form onSubmit={handleLogin}>

        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <AuthInput
          label="Password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <div className="flex items-center justify-between text-sm mb-6">

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember me
          </label>

          <Button className="px-2
            py-2">
            Forgot Password
          </Button>

        </div>

        <Button
          className="w-full"
          type="submit"
        >
         {loading ? "Logging in..." : "Login"}
        </Button>

        <p className="text-center text-gray-300 mt-6">

          Don't have an account?

          <Link to="/register">
            <span className="text-blue-300 ml-1 hover:underline">
              Register
            </span>
          </Link>
        </p>

      </form>  
</AuthLayout>
    
        )

}

export default Login