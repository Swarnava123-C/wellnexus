export default function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "reports", label: "Data Reports" },
    { id: "schemes", label: "Health Schemes" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <aside className="flex flex-col bg-blue-800 w-64 text-white">
      <div className="p-6 border-b border-blue-700 font-bold text-2xl">HDIMS</div>
      <ul className="flex flex-col gap-2 p-4">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className={`cursor-pointer p-3 rounded-lg ${
              activePage === item.id ? "bg-blue-600" : "hover:bg-blue-700"
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </aside>
  );
}

