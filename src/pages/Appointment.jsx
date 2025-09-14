import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  // ✅ Doctor schedule (different slots for each day)
  const schedule = {
    SUN: ["10:00 am", "10:30 am", "11:00 am"],
    MON: ["9:00 am", "9:30 am", "10:00 am", "5:00 pm", "5:30 pm"],
    TUE: ["2:00 pm", "2:30 pm", "3:00 pm"],
    WED: ["9:00 am", "9:30 am", "10:00 am", "10:30 am"],
    THU: ["4:00 pm", "4:30 pm", "5:00 pm"],
    FRI: ["6:00 pm", "6:30 pm", "7:00 pm"],
    SAT: ["8:00 am", "8:30 am", "9:00 am", "9:30 am"]
  };

  // ✅ Fetch doctor info
  useEffect(() => {
    const doc = doctors.find((d) => d._id === docId);
    setDocInfo(doc || null);
  }, [docId, doctors]);

  // ✅ Generate 7 upcoming dates
  const upcomingDays = [];
  let today = new Date();
  for (let i = 0; i < 7; i++) {
    let currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);
    upcomingDays.push(currentDate);
  }

  // ✅ Handle booking
  const handleBooking = () => {
    if (!slotTime) {
      alert("⚠️ Please select a slot before booking!");
      return;
    }
    const selectedDay = daysOfWeek[upcomingDays[slotIndex].getDay()];
    alert(
      `✅ Appointment booked with ${docInfo.name} on ${selectedDay}, ${upcomingDays[
        slotIndex
      ].toDateString()} at ${slotTime}`
    );
  };

  return (
    docInfo && (
      <div className="px-6 sm:px-20 py-10">
        {/* Doctor Info */}
        <div className="flex sm:flex-row flex-col gap-8">
          <img
            className="bg-primary rounded-lg w-full sm:max-w-72 object-cover"
            src={docInfo.image}
            alt={docInfo.name}
          />

          <div className="flex-1 p-6 border border-gray-300 rounded-lg">
            <h2 className="flex items-center gap-2 font-semibold text-gray-900 text-2xl">
              {docInfo.name}
              <img src={assets.verified_icon} alt="verified" className="w-5 h-5" />
            </h2>

            <div className="flex items-center gap-3 mt-2 text-gray-600 text-sm">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <span className="px-2 py-0.5 border rounded-full text-xs">
                {docInfo.experience}
              </span>
            </div>

            <div className="mt-4">
              <p className="font-medium text-gray-900">About</p>
              <p className="text-gray-500 text-sm">{docInfo.about}</p>
            </div>

            <p className="mt-4 font-medium text-gray-700">
              Appointment fee:{" "}
              <span>
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="mt-12 text-center">
          <p className="mb-6 font-medium text-gray-700 text-lg">Booking slots</p>

          {/* Dates */}
          <div className="flex justify-center gap-3 pb-2 overflow-x-auto">
            {upcomingDays.map((day, index) => (
              <div
                key={index}
                onClick={() => {
                  setSlotIndex(index);
                  setSlotTime("");
                }}
                className={`px-5 py-3 rounded-full cursor-pointer text-sm font-medium ${
                  slotIndex === index
                    ? "bg-primary text-white"
                    : "border border-gray-300 text-gray-600"
                }`}
              >
                <p>{daysOfWeek[day.getDay()]}</p>
                <p>{day.getDate()}</p>
              </div>
            ))}
          </div>

          {/* Times */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {schedule[daysOfWeek[upcomingDays[slotIndex].getDay()]]?.map(
              (slot, idx) => (
                <button
                  key={idx}
                  onClick={() => setSlotTime(slot)}
                  className={`px-5 py-2 rounded-full text-sm border ${
                    slotTime === slot
                      ? "bg-primary text-white"
                      : "border-gray-300 text-gray-600"
                  }`}
                >
                  {slot}
                </button>
              )
            )}
          </div>

          {/* Book Button */}
          <button
            onClick={handleBooking}
            className="bg-primary hover:opacity-90 mt-10 px-8 py-3 rounded-full text-white text-lg transition"
          >
            Book an appointment
          </button>
        </div>

        {/* ✅ Related Doctors */}
        <div className="mt-16">
          <h3 className="font-semibold text-gray-800 text-lg text-center">
            Related Doctors
          </h3>
          <p className="mb-8 text-gray-500 text-sm text-center">
            Simply browse through our extensive list of trusted doctors.
          </p>

          <div className="gap-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {doctors
              .filter(
                (d) => d.speciality === docInfo.speciality && d._id !== docInfo._id
              )
              .map((relatedDoc) => (
                <div
                  key={relatedDoc._id}
                  className="shadow-sm hover:shadow-md p-4 border rounded-lg text-center transition"
                >
                  <img
                    src={relatedDoc.image}
                    alt={relatedDoc.name}
                    className="rounded-lg w-full h-44 object-cover"
                  />
                  <p className="mt-3 font-medium text-green-500 text-xs">● Available</p>
                  <p className="mt-1 font-medium text-gray-900">{relatedDoc.name}</p>
                  <p className="text-gray-500 text-sm">{relatedDoc.speciality}</p>
                  <Link
                    to={`/appointment/${relatedDoc._id}`}
                    className="inline-block mt-2 font-medium text-primary text-sm hover:underline"
                  >
                    View Profile
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Appointment;
