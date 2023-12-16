import { removeUser } from "story/slices/UserSlice";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { useAuth } from "hooks/useAuth";

const HomePage = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();
  console.log(isAuth);
  return isAuth ? (
    <div>
      <h1>Welcome!</h1>

      <button onClick={dispatch(removeUser())}>Log out from {email}</button>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;
