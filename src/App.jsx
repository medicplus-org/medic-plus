import { BrowserRouter, Routes } from "react-router";
import "./App.css";
import { Route } from "react-router";
import RootLayout from "./pages/layouts/RootLayout";
import Landing from "./pages/user/Landing";
import DoctorsList from "./pages/user/DoctorsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Landing />} />
          <Route path="doctors" element={<DoctorsList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
