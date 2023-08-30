import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    console.log('login');
    navigate("/home", { replace: true });
  }
  return (
    <div className="container animate__animated animate__fadeIn">
      <h2>Login</h2>
      <hr />
      <button className="" onClick={onLogin}>
        Login
      </button>
    </div>
  )
}
