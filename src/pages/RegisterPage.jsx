import { Reg } from "components/Register";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <Reg />
      <p>
        Alredy have accaunt? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
