import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form } from "./Form";
import { setUser } from "story/slices/UserSlice";

const Reg = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReg = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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

  return <Form title="register" handleClick={handleReg} />;
};

export { Reg };
