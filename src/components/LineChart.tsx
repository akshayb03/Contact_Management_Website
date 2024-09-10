import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
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
import { Loader } from "./Loader";
import { ErrorMessage } from "./ErrorMessage";

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

const fetchData = async () => {
  const result = await axios.get<HistoricalData>(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  return result.data;
};

export const LineChart = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["covid-data"],
    queryFn: fetchData,
  });
  console.log("data", data);
  const [chartData, setChartData] = useState<{
    dates: string[];
    cases: number[];
  }>({
    dates: [],
    cases: [],
  });

  useEffect(() => {
    if (data) {
      const cases = data.cases;
      const dates = Object.keys(cases);
      const caseCounts = Object.values(cases);

      setChartData({ dates: dates, cases: caseCounts });
    }
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage msg={error.message} />;
  }

  return (
    <div className="w-full p-9 flex justify-center">
      <Line
        data={{
          labels: chartData.dates,
          datasets: [
            {
              label: "Cases Over Time",
              data: chartData.cases,
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
