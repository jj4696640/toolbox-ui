import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import Layout from "./components/Layout";
import Login from "./views/auth/login";
import Register from "./views/auth/register";
import ResetPassword from "./views/auth/reset";
import NewPassword from "./views/auth/reset/new-password";
import PasswordResetReview from "./views/auth/reset/reset-review";
import Dashboard from "./views/dashboard";
import CreateNew from "./views/suspects/new";
import Suspects from "./views/suspects/view";
import NewUser from "./views/users/new-user";
import Users from "./views/users/view";

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
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/suspects" element={<Suspects />}/>
            <Route path="/create-new" element={<CreateNew />}/>
            <Route path="/users" element={<Users />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
