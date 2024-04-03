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
import Eye1 from "./BookingComp/Eye1";
import Eye2 from "./BookingComp/Eye2";
import Eye3 from "./BookingComp/Eye3";
import Heart1 from "./BookingComp/Heart1";
import Heart2 from "./BookingComp/Heart2";
import Dental1 from "./BookingComp/Dental1";
import Dental2 from "./BookingComp/Dental2";
import Skin1 from "./BookingComp/Skin1";
import Skin2 from "./BookingComp/Skin2";
import Lungs1 from "./BookingComp/Lungs1";
import Liver1 from "./BookingComp/Liver1";
import Kidney1 from "./BookingComp/Kidney1";
import Navbar from "./components/footer/FixedFooter";
import Packages from "./components/footer/Packages";
import Labtest from "./components/footer/Labtest";
import Consult from "./components/footer/Consult";
import Emergancy from "./components/services/Emergancy";
import Blood from "./components/services/Blood";
import RequireBlood from "./components/services/RequireBlood";
import DonateBlood from "./components/services/DonateBlood";
import Subscribe from "./components/footer/Subscribe";
import Payment from "./components/footer/Payment";
import AmbulanceBooking from "./components/services/AmbulanceBooking";
import UserLocation from "./components/services/UserLocation";
import Profile from "./components/header/Profile";
import EditProfile from "./components/header/EditProfile";

const App = () => {
  const [cookie] = useCookies(["token"]);
  const loggedIn = useCookies(["isLoggedIn"]);

  return (
    <BrowserRouter>
      {cookie.token ? (
        <>
          <Routes>
            <Route
              path="/home"
              element={loggedIn ? <Welcome /> : <StarterPage />}
            />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit-profile" element={<EditProfile />} />
            <Route path="/body/skin" element={<Skin />} />
            <Route path="/body/Dental" element={<Dental />} />
            <Route path="/body/eye" element={<Eye />} />
            <Route path="/body/heart" element={<Heart />} />
            <Route path="/body/kidney" element={<Kidney />} />
            <Route path="/body/lungs" element={<Lungs />} />
            <Route path="/body/liver" element={<Liver />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/BookingComp/Skin1" element={<Skin1 />} />
            <Route path="/BookingComp/Skin2" element={<Skin2 />} />
            <Route path="/BookingComp/Dental1" element={<Dental1 />} />
            <Route path="/BookingComp/Dental2" element={<Dental2 />} />
            <Route path="/BookingComp/Eye1" element={<Eye1 />} />
            <Route path="/BookingComp/Eye2" element={<Eye2 />} />
            <Route path="/BookingComp/Eye3" element={<Eye3 />} />
            <Route path="/BookingComp/Heart1" element={<Heart1 />} />
            <Route path="/BookingComp/Heart2" element={<Heart2 />} />
            <Route path="/BookingComp/Lungs1" element={<Lungs1 />} />
            <Route path="/BookingComp/Liver1" element={<Liver1 />} />
            <Route path="/BookingComp/Kideny1" element={<Kidney1 />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/labtest" element={<Labtest />} />
            <Route path="/consult" element={<Consult />} />
            <Route path="/body/Emergancy" element={<Emergancy />} />
            <Route path="/body/blood" element={<Blood />} />
            <Route path="/body/blood/donate" element={<DonateBlood />} />
            <Route path="/body/blood/require" element={<RequireBlood />} />
            <Route path="/body/ambulance" element={<AmbulanceBooking />} />
            <Route path="/body/ambulance/details" element={<UserLocation />} />
            <Route path="/packages/subscribe" element={<Subscribe />} />
            <Route path="/packages/subscribe/payment" element={<Payment />} />
            <Route path="*" element={<Navigate to="/welcome" />} />
          </Routes>
        </>
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
