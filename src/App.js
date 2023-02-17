import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import Login from "./views/auth/login";
import Register from "./views/auth/register";
import ResetPassword from "./views/auth/reset";
import NewPassword from "./views/auth/reset/new-password";
import PasswordResetReview from "./views/auth/reset/reset-review";
import NewUser from "./views/users/new-user";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="password-reset-review" element={<PasswordResetReview />} />
            <Route path="new-password" element={<NewPassword />} />
            <Route path="new-user" element={<NewUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
