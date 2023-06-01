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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const BarChart = () => {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const labels = [
    "IT",
    "NGO",
    "Government",
    "Bank and Institutionals",
    "Construction Company",
  ];

  const data = {
    labels,
    datasets: [
      {
        axis: "y",
        label: "Applied Users",
        data: [65, 59, 80, 81, 56],
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="">
      <div class="card mt-2 mb-2">
        <div class="card-header">
          <h2 class="mb-0 h6">
            <strong>Total Applied Employees</strong>
          </h2>
        </div>
      </div>
      <Bar options={options} data={data} />{" "}
    </div>
  );
};

export default BarChart;
