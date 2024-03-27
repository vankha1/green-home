import React from "react";
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from "react-native-responsive-linechart";
import { useSelector } from "react-redux";
import {
  humiditySelector,
  luminositySelector,
  moistureSelector,
  temperatureSelector,
} from "../../redux/selector";

interface typeChartData {
  x: number;
  y: number;
}

function DailyTempChart() {
  const temperatureArrSelector = useSelector(temperatureSelector);
  const tempArrayChart = temperatureArrSelector.temperatureList;
  const data: typeChartData[] = tempArrayChart.map((value, index) => {
    return { x: index - 2, y: value };
  });

  return (
    <Chart
      style={{ height: 200, width: 350 }}
      data={data}
      padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
      xDomain={{ min: -2, max: 10 }}
      yDomain={{ min: 0, max: 20 }}
    >
      <VerticalAxis
        tickCount={11}
        theme={{ labels: { formatter: (v) => v.toFixed(2) } }}
      />
      <HorizontalAxis tickCount={5} />
      <Area
        theme={{
          gradient: {
            from: { color: "#23b371" },
            to: { color: "#23b371", opacity: 0.3 },
          },
        }}
      />
      <Line
        theme={{
          stroke: { color: "#23b371", width: 5 },
          scatter: { default: { width: 4, height: 4, rx: 2 } },
        }}
      />
    </Chart>
  );
}

function DailyHumiChart() {
  const humiditySelec = useSelector(humiditySelector);
  const humiArrayChart = humiditySelec.humidityArray;
  const data: typeChartData[] = humiArrayChart.map((value, index) => {
    return { x: index - 2, y: value };
  });

  return (
    <Chart
      style={{ height: 200, width: 350 }}
      data={data}
      padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
      xDomain={{ min: -2, max: 10 }}
      yDomain={{ min: 0, max: 20 }}
    >
      <VerticalAxis
        tickCount={11}
        theme={{ labels: { formatter: (v) => v.toFixed(2) } }}
      />
      <HorizontalAxis tickCount={5} />
      <Area
        theme={{
          gradient: {
            from: { color: "#31a9b8" },
            to: { color: "#31a9b8", opacity: 0.4 },
          },
        }}
      />
      <Line
        theme={{
          stroke: { color: "#31a9b8", width: 5 },
          scatter: { default: { width: 4, height: 4, rx: 2 } },
        }}
      />
    </Chart>
  );
}

function DailySoMoChart() {
  const moistureSelec = useSelector(moistureSelector);
  const moisArrayChart = moistureSelec.moistureArray;
  const data: typeChartData[] = moisArrayChart.map((value, index) => {
    return { x: index - 2, y: value };
  });

  return (
    <Chart
      style={{ height: 200, width: 350 }}
      data={data}
      padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
      xDomain={{ min: -2, max: 10 }}
      yDomain={{ min: 0, max: 20 }}
    >
      <VerticalAxis
        tickCount={11}
        theme={{ labels: { formatter: (v) => v.toFixed(2) } }}
      />
      <HorizontalAxis tickCount={5} />
      <Area
        theme={{
          gradient: {
            from: { color: "#d9c12a" },
            to: { color: "#d9c12a", opacity: 0.4 },
          },
        }}
      />
      <Line
        theme={{
          stroke: { color: "#d9c12a", width: 5 },
          scatter: { default: { width: 4, height: 4, rx: 2 } },
        }}
      />
    </Chart>
  );
}
function DailyLumiChart() {
  const luminositySelec = useSelector(luminositySelector);
  const lumiArrayChart = luminositySelec.luminosityArray;
  const data: typeChartData[] = lumiArrayChart.map((value, index) => {
    return { x: index - 2, y: value };
  });
  return (
    <Chart
      style={{ height: 200, width: 350 }}
      data={data}
      padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
      xDomain={{ min: -2, max: 10 }}
      yDomain={{ min: 0, max: 20 }}
    >
      <VerticalAxis
        tickCount={11}
        theme={{ labels: { formatter: (v) => v.toFixed(2) } }}
      />
      <HorizontalAxis tickCount={5} />
      <Area
        theme={{
          gradient: {
            from: { color: "#f98866" },
            to: { color: "#f98866", opacity: 0.4 },
          },
        }}
      />
      <Line
        theme={{
          stroke: { color: "#f98866", width: 5 },
          scatter: { default: { width: 4, height: 4, rx: 2 } },
        }}
      />
    </Chart>
  );
}
export { DailyTempChart, DailyHumiChart, DailySoMoChart, DailyLumiChart };
