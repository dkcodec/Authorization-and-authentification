import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
      </Routes>
    </div>
  );
}

export default App;
