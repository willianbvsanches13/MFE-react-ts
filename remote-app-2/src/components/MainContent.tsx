import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import useTabState from "mainApp/store";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);
export type TabType = "Dashboard" | "Table";

export const Dashboard = () => {
  const [_tabState, setTabState] = useTabState();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };
  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const firstChart = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Dash 1",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const secondChart = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Dash 2",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-full overflow-x-hidden border-t flex flex-col">
      <main className="w-full flex-grow p-6">
        <h1 className="text-3xl text-black pb-6">Dashboard</h1>

        <button onClick={() => setTabState("Table")}>
          Ir para a Aba Table
        </button>

        <div className="flex flex-wrap mt-6">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-2">
            <p className="text-xl pb-3 flex items-center">
              <i className="fas fa-plus mr-3"></i> Monthly Reports
            </p>
            <div className="p-6 bg-white">
              <Bar
                id="chartOne"
                width="400"
                height="200"
                data={firstChart}
                options={options}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 pl-0 lg:pl-2 mt-12 lg:mt-0">
            <p className="text-xl pb-3 flex items-center">
              <i className="fas fa-check mr-3"></i> Resolved Reports
            </p>
            <div className="p-6 bg-white">
              <Line
                id="chartTwo"
                width="400"
                height="200"
                data={secondChart}
                options={options2}
              />
            </div>
          </div>
        </div>

        <div className="w-full mt-12">
          <p className="text-xl pb-3 flex items-center">
            <i className="fas fa-list mr-3"></i> Latest Reports
          </p>
          <div className="bg-white overflow-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Name
                  </th>
                  <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Last name
                  </th>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Phone
                  </th>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="w-1/3 text-left py-3 px-4">Lian</td>
                  <td className="w-1/3 text-left py-3 px-4">Smith</td>
                  <td className="text-left py-3 px-4">
                    <a className="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                  <td className="text-left py-3 px-4">
                    <a
                      className="hover:text-blue-500"
                      href="mailto:jonsmith@mail.com"
                    >
                      jonsmith@mail.com
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="w-1/3 text-left py-3 px-4">Emma</td>
                  <td className="w-1/3 text-left py-3 px-4">Johnson</td>
                  <td className="text-left py-3 px-4">
                    <a className="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                  <td className="text-left py-3 px-4">
                    <a
                      className="hover:text-blue-500"
                      href="mailto:jonsmith@mail.com"
                    >
                      jonsmith@mail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 text-left py-3 px-4">Oliver</td>
                  <td className="w-1/3 text-left py-3 px-4">Williams</td>
                  <td className="text-left py-3 px-4">
                    <a className="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                  <td className="text-left py-3 px-4">
                    <a
                      className="hover:text-blue-500"
                      href="mailto:jonsmith@mail.com"
                    >
                      jonsmith@mail.com
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="w-1/3 text-left py-3 px-4">Isabella</td>
                  <td className="w-1/3 text-left py-3 px-4">Brown</td>
                  <td className="text-left py-3 px-4">
                    <a className="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                  <td className="text-left py-3 px-4">
                    <a
                      className="hover:text-blue-500"
                      href="mailto:jonsmith@mail.com"
                    >
                      jonsmith@mail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 text-left py-3 px-4">Lian</td>
                  <td className="w-1/3 text-left py-3 px-4">Smith</td>
                  <td className="text-left py-3 px-4">
                    <a className="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                  <td className="text-left py-3 px-4">
                    <a
                      className="hover:text-blue-500"
                      href="mailto:jonsmith@mail.com"
                    >
                      jonsmith@mail.com
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="w-1/3 text-left py-3 px-4">Emma</td>
                  <td className="w-1/3 text-left py-3 px-4">Johnson</td>
                  <td className="text-left py-3 px-4">
                    <a className="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                  <td className="text-left py-3 px-4">
                    <a
                      className="hover:text-blue-500"
                      href="mailto:jonsmith@mail.com"
                    >
                      jonsmith@mail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 text-left py-3 px-4">Oliver</td>
                  <td className="w-1/3 text-left py-3 px-4">Williams</td>
                  <td className="text-left py-3 px-4">
                    <a className="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                  <td className="text-left py-3 px-4">
                    <a
                      className="hover:text-blue-500"
                      href="mailto:jonsmith@mail.com"
                    >
                      jonsmith@mail.com
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="w-1/3 text-left py-3 px-4">Isabella</td>
                  <td className="w-1/3 text-left py-3 px-4">Brown</td>
                  <td className="text-left py-3 px-4">
                    <a className="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                  <td className="text-left py-3 px-4">
                    <a
                      className="hover:text-blue-500"
                      href="mailto:jonsmith@mail.com"
                    >
                      jonsmith@mail.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <footer className="w-full bg-white text-right p-4">
        Built by{" "}
        <a target="_blank" href="https://davidgrzyb.com" className="underline">
          David Grzyb
        </a>
        .
      </footer>
    </div>
  );
};

export default Dashboard;
