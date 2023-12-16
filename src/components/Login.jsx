import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "story/slices/UserSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form } from "./Form";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hadleLog = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(console.error);
  };

  return <Form title="sign in" handleClick={hadleLog} />;
};

export { Login };
