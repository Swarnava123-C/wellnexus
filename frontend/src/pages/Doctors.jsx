import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const [filterDoc, setFilterDoc] = useState([]);
  const [activeSpec, setActiveSpec] = useState(null);

  const specialities = [
    "General physician",
    "Dermatologist",
    "Neurologist",
    "Pediatricians",
    "Gynecologist",
    "Gastroenterologist",
  ];

  // Apply filter with toggle + special case for Dr. Zoe Kelly
  const applyFilter = (spec) => {
    if (activeSpec === spec) {
      setActiveSpec(null);
      setFilterDoc(doctors);
      navigate("/doctors");
      return;
    }

    setActiveSpec(spec);
    navigate(`/doctors/${encodeURIComponent(spec)}`);

    if (spec === "Gastroenterologist") {
      setFilterDoc(
        doctors.filter(
          (doc) => doc.name === "Dr. Zoe Kelly" || doc.speciality === spec
        )
      );
    } else {
      setFilterDoc(doctors.filter((doc) => doc.speciality === spec));
    }
  };

  useEffect(() => {
    if (doctors) {
      if (speciality) {
        setActiveSpec(speciality);

        if (speciality === "Gastroenterologist") {
          setFilterDoc(
            doctors.filter(
              (doc) => doc.name === "Dr. Zoe Kelly" || doc.speciality === speciality
            )
          );
        } else {
          setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
        }
      } else {
        setActiveSpec(null);
        setFilterDoc(doctors);
      }
    }
  }, [doctors, speciality]);

  if (!doctors || doctors.length === 0) {
    return (
      <p className="mt-10 text-gray-500 text-center">No doctors available</p>
    );
  }

  return (
    <div className="px-6 md:px-12 lg:px-20 py-10">
      <p className="mb-8 font-bold text-gray-900 text-2xl">
        Find the Right Doctor by Speciality
      </p>

      {/* Sidebar + Grid */}
      <div className="gap-10 grid grid-cols-1 md:grid-cols-4">
        {/* Sidebar */}
        <div className="md:col-span-1 bg-white shadow-lg p-6 rounded-xl h-fit">
          <p className="mb-4 font-semibold text-gray-900">Specialities</p>
          <ul className="space-y-3">
            {specialities.map((spec, idx) => (
              <li
                key={idx}
                onClick={() => applyFilter(spec)}
                className={`cursor-pointer px-3 py-2 rounded-md border 
                  ${
                    activeSpec === spec
                      ? "bg-indigo-100 border-indigo-400 text-indigo-700 font-semibold"
                      : "border-gray-300 text-gray-700 hover:border-indigo-300"
                  }`}
              >
                {spec}
              </li>
            ))}
          </ul>
        </div>

        {/* Doctors Grid */}
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:col-span-3">
          {filterDoc.length > 0 ? (
            filterDoc.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="bg-white shadow-md rounded-xl overflow-hidden transition-all hover:-translate-y-2 duration-300 cursor-pointer"
              >
                {/* Doctor Image */}
                <div className="flex justify-center items-center bg-blue-50 w-full h-56">
                  <img
                    className="h-full object-contain"
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                {/* Doctor Info */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2 text-green-600 text-sm">
                    <span className="bg-green-500 rounded-full w-2 h-2"></span>
                    <p>Available</p>
                  </div>
                  <p className="font-semibold text-gray-900 text-lg">
                    {item.name}
                  </p>
                  {/* Override Zoe Kelly's speciality in display too */}
                  <p className="text-gray-600 text-sm">
                    {activeSpec === "Gastroenterologist" &&
                    item.name === "Dr. Zoe Kelly"
                      ? "Gastroenterologist"
                      : item.speciality}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">
              No doctors found for this speciality
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;



