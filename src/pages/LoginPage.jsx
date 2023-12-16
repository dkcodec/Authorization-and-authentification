import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>

      <p>
        Or <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
