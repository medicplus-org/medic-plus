import { BrowserRouter, Routes } from "react-router";
import "./App.css";
import { Route } from "react-router";
import RootLayout from "./pages/layouts/RootLayout";
import Landing from "./pages/user/Landing";
import DoctorsList from "./pages/user/DoctorsList";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Landing />} />
          <Route path="doctors" element={<DoctorsList />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
