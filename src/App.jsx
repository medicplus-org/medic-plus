import { BrowserRouter, Routes } from "react-router";
import "./App.css";
import { Route } from "react-router";
import RootLayout from "./pages/layouts/RootLayout";
import Landing from "./pages/user/Landing";
import DoctorsList from "./pages/user/DoctorsList";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import DocSignup from "./pages/auth/docsignup/DocSignup";
import UserSignup from "./pages/auth/docsignup/UserSignup";
import About from "./pages/user/About";
import UserDashboard from "./pages/user/UserDashboard";
import DocDashboard from "./pages/user/DocDashboard";
import SelectLogin from "./pages/auth/SelectLogin";
import SelectSignup from "./pages/auth/SelectSignup";
import DocLogin from "./pages/auth/docsignup/DocLogin";
import BookAppointmentForm from "./pages/components/BookAppointmentForm";
import Contact from "./pages/user/Contact";
import EditUserAppointment from "./pages/user/EditUserAppointment";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Landing />} />
          <Route path="doctors" element={<DoctorsList />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/docsignup" element={<DocSignup />} />
        <Route path="/usersignup" element={<UserSignup />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/docdashboard" element={<DocDashboard />} />
        <Route path="/selectlogin" element={<SelectLogin />} />
        <Route path="/selectsignup" element={<SelectSignup />} />
        <Route path="/doclogin" element={<DocLogin />} />
        <Route path="/book/:doctorId" element={<BookAppointmentForm />} />
        <Route
          path="/edit-appointment/:appointmentId"
          element={<EditUserAppointment />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
