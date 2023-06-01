import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Inactive Jobs", "Active Jobs"],
  datasets: [
    {
      data: [300, 50],
      backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
      hoverOffset: 4,
    },
  ],
};

const PieChart = () => {
  return (
    <div className="">
      <div class="card mt-2 mb-2">
        <div class="card-header">
          <h2 class="mb-0 h6">
            <strong>All Jobs  </strong>
          </h2>
        </div>
      </div>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
