import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DonateBlood() {
  const [selectedDuration, setSelectedDuration] = useState("15");

  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
  };
  const citiesInPunjab = [
    "Amritsar",
    "Ludhiana",
    "Jalandhar",
    "Patiala",
    "Bathinda",
    "Hoshiarpur",
    "Pathankot",
    "Mohali",
    "Batala",
    "Moga",
    "Khanna",
    "Sangrur",
    "Gurdaspur",
    "Faridkot",
    "Firozpur",
    "Rupnagar",
    "Malerkotla",
    "Rajpura",
    "Kapurthala",
    "Sunam",
    "Gobindgarh",
    "Muktsar",
    "Mansa",
    "Nabha",
    "Patti",
    "Tarn Taran",
    "Malout",
    "Abohar",
    "Samana",
    "Nawanshahr",
    "Moga",
    "Zira",
    "Talwandi Sabo",
    "Kharar",
    "Dhuri",
    "Nangal",
    "Nakodar",
    "Nabha",
    "Moonak",
    "Morinda",
    "Malerkotla",
    "Machhiwara",
    "Longowal",
    "Lehra Gaga",
    "Kotkapura",
    "Jagraon",
    "Firozpur Cantt",
    "Fazilka",
    "Dera Bassi",
    "Dasuya",
    "Dasua",
    "Dhariwal",
    "Chheharta Sahib",
    "Budhlada",
    "Banga",
    "Barnala",
    "Bagha Purana",
    "Baddi",
    "Balachaur",
    "Bassi Pathana",
    "Bhagha Purana",
    "Bhogpur",
    "Bhulath",
    "Budha Theh",
    "Chandigarh",
    "Cheema",
    "Fatehgarh Churian",
    "Gidderbaha",
    "Guru Har Sahai",
    "Jandiala Guru",
    "Jagraon",
    "Kharar",
    "Kot Kapura",
    "Malaut",
    "Nawanshahr",
    "Patti",
    "Qadian",
    "Rampura Phul",
    "Sahnewal",
    "Samana",
    "Sujanpur",
    "Talwandi Bhai",
    "Tapa",
    "Urmar Tanda",
    "Zirakpur",
  ];
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const navigate = useNavigate();

  const handleSubmit = () => {
    alert("We will contact you soon for as per the aviailablity of Blood");
    navigate("/welcome");
  };

  return (
    <div>
      <div className="mt-6 text-2xl ml-3 text-gray-500 font-bold text-center">
        Reuire Blood
      </div>

      <div className="p-12">
        <div className="font-bold text-gray-500">Request Blood For</div>
        <div className="mt-4">
          <select
            id="duration"
            value={selectedDuration}
            onChange={handleDurationChange}
            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="Friend">Friend</option>
            <option value="Family Member">Family Member</option>
            <option value="Needy Ones">Needy Ones</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mt-4 font-bold text-gray-500">City Preference</div>
        <div className="mt-4">
          <select
            id="duration"
            value={selectedDuration}
            onChange={handleDurationChange}
            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            {citiesInPunjab.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-16 font-bold text-gray-500">
          Select Blood Group That is Required
        </div>
        <div className="mt-4">
          <select
            id="duration"
            value={selectedDuration}
            onChange={handleDurationChange}
            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            {bloodGroups.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div
        className="ml-28 rounded-xl py-4 bg-red-800 text-white text-center font-bold uppercase mt-52 w-48"
        onClick={handleSubmit}
      >
        Submit
      </div>
    </div>
  );
}

export default DonateBlood;
