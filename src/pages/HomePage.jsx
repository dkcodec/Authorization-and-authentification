import { removeUser } from "story/slices/UserSlice";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";

const HomePage = () => {
  const { isAuth, email } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (isAuth) {
    return (
      <div>
        <h1>Welcome!</h1>
        <button onClick={() => dispatch(removeUser())}>
          Log out from {email}
        </button>
      </div>
    );
  } else return navigate("/login");
};

export default HomePage;
