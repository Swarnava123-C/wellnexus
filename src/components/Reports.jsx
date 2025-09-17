import React, { useState, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import jsPDF from "jspdf";
import "jspdf-autotable";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Reports() {
  const [activeReport, setActiveReport] = useState("hospital");
  const chartRef = useRef(null); // Ref for chart

  // Mock Data
  const hospitalData = {
    labels: ["Hospital A", "Hospital B", "Hospital C", "Hospital D"],
    datasets: [
      {
        label: "Patients Treated",
        data: [120, 200, 150, 180],
        backgroundColor: "rgba(37, 99, 235, 0.6)",
      },
    ],
  };

  const patientData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "New Patients",
        data: [50, 70, 40, 90, 60, 100],
        backgroundColor: "rgba(16, 185, 129, 0.6)",
      },
    ],
  };

  const submissionData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Reports Submitted",
        data: [5, 10, 3, 8, 6, 4, 12],
        backgroundColor: "rgba(249, 115, 22, 0.6)",
      },
    ],
  };

  // Function to get current active data
  const getActiveData = () => {
    switch (activeReport) {
      case "hospital":
        return {
          title: "Hospital Reports",
          labels: hospitalData.labels,
          values: hospitalData.datasets[0].data,
          label: hospitalData.datasets[0].label,
          data: hospitalData,
        };
      case "patient":
        return {
          title: "Patient Reports",
          labels: patientData.labels,
          values: patientData.datasets[0].data,
          label: patientData.datasets[0].label,
          data: patientData,
        };
      case "submission":
        return {
          title: "Data Submission Reports",
          labels: submissionData.labels,
          values: submissionData.datasets[0].data,
          label: submissionData.datasets[0].label,
          data: submissionData,
        };
      default:
        return { title: "", labels: [], values: [], label: "", data: {} };
    }
  };

  // ✅ CSV Export
  const downloadCSV = () => {
    const { title, labels, values, label } = getActiveData();
    let csvContent =
      "data:text/csv;charset=utf-8," +
      ["Category," + label, ...labels.map((l, i) => `${l},${values[i]}`)].join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = `${title.replace(/\s+/g, "_").toLowerCase()}.csv`;
    link.click();
  };

  // ✅ PDF Export (with chart image)
  const downloadPDF = () => {
    const { title, labels, values, label } = getActiveData();
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text(title, 14, 20);

    // Add chart as image
    if (chartRef.current) {
      const chartCanvas = chartRef.current;
      const chartImage = chartCanvas.toBase64Image();
      doc.addImage(chartImage, "PNG", 15, 25, 180, 90); // x, y, width, height
    }

    // Add table below chart
    const tableColumn = ["Category", label];
    const tableRows = labels.map((l, i) => [l, values[i]]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 120, // start below chart
    });

    doc.save(`${title.replace(/\s+/g, "_").toLowerCase()}.pdf`);
  };

  const renderReportContent = () => {
    let chartData;
    let description;

    switch (activeReport) {
      case "hospital":
        chartData = hospitalData;
        description = "Showing patient count per hospital.";
        break;
      case "patient":
        chartData = patientData;
        description = "Monthly new patient registrations.";
        break;
      case "submission":
        chartData = submissionData;
        description = "Weekly data submission activity.";
        break;
      default:
        return <p>Select a report to view details.</p>;
    }

    return (
      <div className="bg-white shadow mt-6 p-6 rounded-lg">
        <h3 className="mb-4 font-semibold text-xl">{getActiveData().title}</h3>
        <Bar data={chartData} ref={chartRef} />
        <p className="mt-4 text-gray-600">{description}</p>
      </div>
    );
  };

  return (
    <div className="p-6">
      <h2 className="font-bold text-2xl">Reports Section</h2>
      <p className="mb-6 text-gray-600">Choose a report type to view insights.</p>

      {/* Report Type Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveReport("hospital")}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeReport === "hospital" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Hospital Reports
        </button>
        <button
          onClick={() => setActiveReport("patient")}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeReport === "patient" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Patient Reports
        </button>
        <button
          onClick={() => setActiveReport("submission")}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeReport === "submission" ? "bg-orange-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Data Submissions
        </button>
      </div>

      {/* Render Dynamic Report */}
      {renderReportContent()}

      {/* Export Options */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={downloadCSV}
          className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded text-white"
        >
          Download CSV
        </button>
        <button
          onClick={downloadPDF}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}






