import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Reports from "./components/Reports";
import Schemes from "./components/Schemes";
import Settings from "./components/Settings";

export default function App() {
  // Track which page is active
  const [activePage, setActivePage] = useState("dashboard");

  // Render page dynamically based on activePage state
  const renderPage = () => {
    switch (activePage) {
      case "reports":
        return <Reports />;
      case "schemes":
        return <Schemes />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex bg-gray-100 h-screen">
      {/* Sidebar */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content */}
      <main className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <Header title={activePage} />

        {/* Page Content */}
        <div className="flex-1 p-6 overflow-y-auto">{renderPage()}</div>
      </main>
    </div>
  );
}



