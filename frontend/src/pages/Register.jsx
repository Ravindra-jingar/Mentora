import { useState } from "react"
import { toast } from "react-toastify"
import bgImage from "../assets/bgimage.jpg";
import AuthLayout from "../components/Layout/AuthLayout";
import AuthInput from "../components/ui/AuthInput";
import { registerUser} from "../services/authService";
import Spinner from "../components/ui/Spinner";
import  Button  from "../components/ui/Button"
function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")
    async function handleRegister(e) {
   e.preventDefault();
  try {
    setLoading(true);

    const data = await registerUser(
      name,
      email,
      password
    );

    toast.success("Registration successful!");
    setName("");
    setEmail("");
    setPassword("");

  } catch (error) {
    toast.error(error.message);
  } finally {
    setLoading(false);
  }
}
if(loading){
  return <Spinner/>
}
  return (

    <AuthLayout
    bgImage={bgImage}
      title="Create Account"
      subtitle="Join us to start learning"
    >
      <form onSubmit={handleRegister}>

      <AuthInput
        label="Name"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
        

      <AuthInput
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <AuthInput
        label="Password"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

     <Button type="submit" className="w-full">
  Register
</Button>

    </form>
</AuthLayout>
  )
}

export default Register
