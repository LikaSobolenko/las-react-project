import { Chart } from "react-google-charts";
export const data = [
  ["Task", "Hours per Day"],
  ["Sad", 4],
  ["Happy", 2],
  ["Anxiety", 1],
  ["Annoyance", 2.5],
  ["Excited", 3],
  ["Confidence", 0.5],
  ["Confusion", 0.7],
  ["Guilt", 1],
];
export const options = {
  title: "Feeling over day",
};
export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default App;
