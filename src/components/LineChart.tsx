import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Legend,
  Tooltip
);

interface HistoricalData {
  cases: Record<string, number>;
  deaths: Record<string, number>;
  recovered: Record<string, number>;
}

export const LineChart = () => {
  const [data, setData] = useState<{ dates: string[]; cases: number[] }>({
    dates: [],
    cases: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get<HistoricalData>(
          "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        );
        const cases = result.data.cases;
        const dates = Object.keys(cases);
        const caseCounts = Object.values(cases);

        setData({ dates: dates, cases: caseCounts });
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full p-9 flex justify-center">
      <Line
        data={{
          labels: data.dates,
          datasets: [
            {
              label: "Cases Over Time",
              data: data.cases,
              borderColor: "black",
              borderWidth: 1,
              pointRadius: 1,
              pointHoverRadius: 7,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              onClick: (e) => {},
            },
            tooltip: {
              enabled: true,
            },
          },
        }}
      />
    </div>
  );
};
