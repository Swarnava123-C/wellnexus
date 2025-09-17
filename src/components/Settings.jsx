import React, { useState } from "react";
import { FaUserPlus, FaUserCog, FaBell, FaMoon, FaSun, FaCogs } from "react-icons/fa";

export default function Settings() {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);
  const [users, setUsers] = useState([
    { name: "Swarnava", role: "Admin" },
    { name: "Debabrata", role: "Editor" },
    { name: "Sutrishna", role: "Viewer" },
  ]);
  const [configs, setConfigs] = useState([]);

  const handleAddUser = () => {
    const name = prompt("Enter new user's name:");
    if (name) {
      const role = prompt("Enter role for this user (Admin/Editor/Viewer):", "Viewer");
      setUsers([...users, { name, role: role || "Viewer" }]);
    }
  };

  const handleChangeRole = (index) => {
    const role = prompt("Enter new role (Admin/Editor/Viewer):", users[index].role);
    if (role) {
      const updated = [...users];
      updated[index].role = role;
      setUsers(updated);
    }
  };

  const handleRemoveUser = (index) => {
    if (window.confirm(`Remove ${users[index].name}?`)) {
      const updated = [...users];
      updated.splice(index, 1);
      setUsers(updated);
    }
  };

  const handleToggleNotifications = () => setNotifications(!notifications);
  const handleToggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const handleAddConfig = () => {
    const config = prompt("Enter configuration key=value:");
    if (config) setConfigs([...configs, config]);
  };

  return (
    <div className={`${theme === "dark" ? "bg-gray-100 text-gray-900" : "bg-gray-50 text-gray-900"} min-h-screen p-8 transition-colors duration-300`}>
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">

        {/* User Management */}
        <div className="bg-white dark:bg-gray-200 shadow-md hover:shadow-xl p-6 rounded-xl transition-shadow">
          <div className="flex items-center gap-2 mb-4 text-blue-600">
            <FaUserCog /> <h2 className="font-semibold text-xl">Manage Users</h2>
          </div>
          <p className="mb-4 text-gray-500 dark:text-gray-700">Add, remove, or change roles of users.</p>
          <button
            onClick={handleAddUser}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 mb-4 px-4 py-2 rounded text-white"
          >
            <FaUserPlus /> Add User
          </button>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b text-gray-600 dark:text-gray-700">
                <th className="py-2">Name</th>
                <th>Role</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx} className="hover:bg-gray-200 dark:hover:bg-gray-300 dark:even:bg-gray-200 dark:odd:bg-gray-100 even:bg-gray-100 odd:bg-gray-50 transition-colors">
                  <td className="py-2">{user.name}</td>
                  <td className="font-semibold">{user.role}</td>
                  <td className="flex justify-end gap-2 py-2">
                    <button
                      onClick={() => handleChangeRole(idx)}
                      className="bg-green-500 hover:bg-green-600 px-2 py-1 rounded text-white"
                    >
                      Change
                    </button>
                    <button
                      onClick={() => handleRemoveUser(idx)}
                      className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-white"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Preferences & Configurations */}
        <div className="space-y-6">
          {/* Preferences */}
          <div className="bg-white dark:bg-gray-200 shadow-md hover:shadow-xl p-6 rounded-xl transition-shadow">
            <div className="flex items-center gap-2 mb-4 text-yellow-500">
              <FaBell /> <h2 className="font-semibold text-xl">Preferences</h2>
            </div>
            <div className="flex flex-col gap-4">
              {/* Notifications */}
              <div className="flex justify-between items-center">
                <span>Notifications</span>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={notifications}
                    onChange={handleToggleNotifications}
                  />
                  <div className="bg-gray-300 peer-checked:bg-yellow-500 rounded-full w-11 h-6 transition-all"></div>
                  <div className="top-1 left-1 absolute bg-white rounded-full w-4 h-4 transition-transform peer-checked:translate-x-5"></div>
                </label>
              </div>

              {/* Theme */}
              <div className="flex justify-between items-center">
                <span>Theme</span>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={theme === "dark"}
                    onChange={handleToggleTheme}
                  />
                  <div className="bg-gray-300 peer-checked:bg-purple-500 rounded-full w-11 h-6 transition-all"></div>
                  <div className="top-1 left-1 absolute bg-white rounded-full w-4 h-4 transition-transform peer-checked:translate-x-5"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Configurations */}
          <div className="bg-white dark:bg-gray-200 shadow-md hover:shadow-xl p-6 rounded-xl transition-shadow">
            <div className="flex items-center gap-2 mb-4 text-red-600">
              <FaCogs /> <h2 className="font-semibold text-xl">Configurations</h2>
            </div>
            <button
              onClick={handleAddConfig}
              className="bg-red-600 hover:bg-red-700 mb-4 px-4 py-2 rounded text-white"
            >
              Add Config
            </button>
            <div className="max-h-40 overflow-y-auto">
              {configs.map((cfg, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100 dark:bg-gray-300 mb-1 p-2 rounded text-gray-700 dark:text-gray-900"
                >
                  {cfg}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




