import React, { useState } from "react";

const SCHEMAS = [
  {
    id: 1,
    name: "Ayushman Bharat Yojana",
    details: "Provides health insurance coverage of ₹5 lakh per family per year.",
    benefits: [
      "Covers hospitalization costs",
      "Cashless treatment in empaneled hospitals",
      "Pre & post hospitalization expenses covered",
    ],
  },
  {
    id: 2,
    name: "Janani Suraksha Yojana",
    details: "Promotes institutional deliveries to reduce maternal & neonatal mortality.",
    benefits: [
      "Encourages institutional deliveries",
      "Financial incentives for mothers",
      "Improves maternal and neonatal outcomes",
    ],
  },
  {
    id: 3,
    name: "Rashtriya Bal Swasthya Karyakram",
    details: "Early identification & treatment of children's health conditions.",
    benefits: [
      "Early screening for growth & developmental issues",
      "Free treatment for identified conditions",
      "School & community outreach",
    ],
  },
];

export default function Schemes() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (schema) => {
    console.log("schema clicked:", schema.id, schema.name); // debug line
    setSelected(schema);
  };

  const handleClose = () => setSelected(null);

  return (
    <div className="p-6">
      <h2 className="mb-6 font-bold text-2xl">Government Health Schemes</h2>

      {/* Grid of schema cards */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
        {SCHEMAS.map((s) => (
          <div
            key={s.id}
            onClick={() => handleSelect(s)}
            className="bg-white shadow hover:shadow-lg p-5 rounded-lg transition hover:-translate-y-1 cursor-pointer transform"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleSelect(s)}
          >
            <h3 className="mb-2 font-semibold text-lg">{s.name}</h3>
            <p className="text-gray-600 text-sm line-clamp-3">{s.details}</p>
            <div className="mt-4">
              <button
                className="bg-blue-600 px-3 py-1 rounded text-white text-sm"
                onClick={(e) => { e.stopPropagation(); handleSelect(s); }} // safe click
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal (overlay) for details */}
      {selected && (
        <div
          className="z-50 fixed inset-0 flex justify-center items-center bg-black/50"
          onClick={handleClose} // clicking outside the modal closes it
        >
          <div
            className="bg-white shadow-lg mx-4 p-6 rounded-lg w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()} // prevent overlay click from closing when clicking inside modal
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-2xl">{selected.name}</h3>
                <p className="mt-2 text-gray-700">{selected.details}</p>

                <h4 className="mt-4 font-semibold">Benefits</h4>
                <ul className="mt-2 pl-6 text-gray-600 list-disc">
                  {selected.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className="ml-4">
                <button
                  onClick={handleClose}
                  className="text-gray-500 hover:text-gray-800"
                  aria-label="Close details"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={handleClose}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


