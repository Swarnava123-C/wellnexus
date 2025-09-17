import React from "react";

export default function Header({ title }) {
  // Map of page titles
  const pageTitles = {
    dashboard: "Dashboard Overview",
    reports: "Reports",
    schemes: "Government Health Schemes",
    settings: "Settings",
  };

  return (
    <header className="flex justify-between items-center bg-white shadow-md p-4">
      {/* Page Title */}
      <h1 className="font-semibold text-gray-800 text-xl">
        {pageTitles[title] || "Page"}
      </h1>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <span className="font-medium text-gray-700">Super Admin</span>
        <div className="bg-gray-400 rounded-full w-10 h-10" />
      </div>
    </header>
  );
}


