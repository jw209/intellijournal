import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

function LoginPage() {
  return(
    <div className="bg-sky-200 p-4 rounded-2xl">
      <h1 className="text-2xl font-bold">Welcome back</h1>
      <br />
      <LoginForm />
      <br />
      <h1 className="text-2xl font-bold">Join today</h1>
      <br />
      <SignupForm />
    </div>
  )
}

export default LoginPage;