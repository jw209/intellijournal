import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

function LoginPage() {
  return(
    <div className="flex items-center justify-center bg-sky-200 p-4 rounded-2xl">
      <LoginForm />
    </div>
  )
}

export default LoginPage;