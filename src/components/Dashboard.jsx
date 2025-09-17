import { useState, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function Dashboard() {
  // Initial values all zero
  const [stats, setStats] = useState({
    hospitals: 0,
    verifications: 0,
    submissions: 0,
    score: 0,
    patients: 0, // 👈 new field
  });


  // Example: simulate fetching from backend after 2s
  useEffect(() => {
    setTimeout(() => {
      setStats({
        hospitals: 154,
        verifications: 12,
        submissions: 289,
        score: 92.5,
        patients: 4321, // 👈 random number for patients
      });
    }, 2000);
  }, []);

  // Chart.js setup
  useEffect(() => {
    const ctx1 = document.getElementById("barChart");
    new Chart(ctx1, {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Submissions",
            data: [12, 19, 3, 5, 2, 3, 9],
            backgroundColor: "rgba(37, 99, 235, 0.7)",
          },
        ],
      },
    });

    const ctx2 = document.getElementById("lineChart");
    new Chart(ctx2, {
      type: "line",
      data: {
        labels: ["Dept A", "Dept B", "Dept C", "Dept D"],
        datasets: [
          {
            label: "Quality %",
            data: [92, 85, 88, 95],
            borderColor: "rgba(37, 99, 235, 1)",
            fill: false,
          },
        ],
      },
    });
  }, []);

  return (
    <section>
      {/* Metrics */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-5 mb-6">
        <div className="bg-white shadow p-6 rounded-lg text-center">
          <p>Total Hospitals Registered</p>
          <h2 className="font-bold text-2xl">{stats.hospitals}</h2>
        </div>
        <div className="bg-white shadow p-6 rounded-lg text-center">
          <p>Pending Verifications</p>
          <h2 className="font-bold text-2xl">{stats.verifications}</h2>
        </div>
        <div className="bg-white shadow p-6 rounded-lg text-center">
          <p>Active Data Submissions (24h)</p>
          <h2 className="font-bold text-2xl">{stats.submissions}</h2>
        </div>
        <div className="bg-white shadow p-6 rounded-lg text-center">
          <p>Overall Data Health Score</p>
          <h2 className="font-bold text-2xl">{stats.score}%</h2>
        </div>
        <div className="bg-white shadow p-6 rounded-lg text-center">
          <p>Total Patients Appointed</p>
          <h2 className="font-bold text-2xl">{stats.patients}</h2>
        </div>
      </div>

      {/* Grid */}
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2 bg-white shadow p-6 rounded-lg">
          <h3 className="mb-3 font-semibold text-lg">Recent Activity Feed</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Hospital X updated Patient Records (23m ago)</li>
            <li>Department A submitted Monthly Report (23m ago)</li>
            <li>Department Y added 32 new cases (1m ago)</li>
          </ul>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h3 className="mb-3 font-semibold text-lg">Data Submission Trends</h3>
          <canvas id="barChart"></canvas>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h3 className="mb-3 font-semibold text-lg">Data Quality by Department</h3>
          <canvas id="lineChart"></canvas>
        </div>
      </div>
    </section>
  );
}



