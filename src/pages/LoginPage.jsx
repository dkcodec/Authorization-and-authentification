import { Login } from "components/Login";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <Login />
      <p>
        Or <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
