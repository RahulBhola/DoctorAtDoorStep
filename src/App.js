// App.js
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import StarterPage from "./components/StarterPage";
import Welcome from "./components/Welcome";
import UserLogin from "./components/User/UserLogin";
import UserSignIn from "./components/User/UserSignIn";
import Skin from "./components/categories/Skin";
import Dental from "./components/categories/Dental";
import Eye from "./components/categories/Eye";
import Heart from "./components/categories/Heart";
import Kidney from "./components/categories/Kidney";
import Lungs from "./components/categories/Lungs";
import Liver from "./components/categories/Liver";
import { useCookies } from "react-cookie";
import ContactForm from "./components/ContactForm";

const App = () => {
  const [cookie, setCookie] = useCookies(["token"]);

  return (
    <BrowserRouter>
      {cookie.token ? (
        <Routes>
          <Route path="/home" element={<StarterPage />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/body/skin" element={<Skin />} />
          <Route path="/body/Dental" element={<Dental />} />
          <Route path="/body/eye" element={<Eye />} />
          <Route path="/body/heart" element={<Heart />} />
          <Route path="/body/kidney" element={<Kidney />} />
          <Route path="/body/lungs" element={<Lungs />} />
          <Route path="/body/liver" element={<Liver />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<StarterPage />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signin" element={<UserSignIn />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
