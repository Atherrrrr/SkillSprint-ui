// import React from "react";
// import ReactApexChart from "react-apexcharts";

// Define an interface for the word data
export interface WordData {
  name: string;
  data: number;
}

// // Define the props for the TreeMap component
// interface TreeMapProps {
//   words: string;
// }

// const MostUsedTreeMap: React.FC<TreeMapProps> = ({ words }) => {
//   // Function to parse the JSON safely
//   function parseJson(jsonString: string): WordData[] {
//     try {
//       const modifiedJsonString = jsonString
//         .replace(/\(/g, "{")
//         .replace(/\)/g, "}")
//         .replace(/, /g, ', "')
//         .replace(/'/g, '"');

//       const jsonObject = JSON.parse(modifiedJsonString);
//       const wordDataArray = jsonObject.map((obj: any) => {
//         const key = Object.keys(obj)[0];
//         const value = obj[key];
//         return { name: key, data: value };
//       });

//       console.log("Parsed Word Data:", wordDataArray);
//       return wordDataArray;
//     } catch (error) {
//       console.error("Error parsing JSON:", error);
//       return []; // Return an empty array in case of error
//     }
//   }

//   const jsonObject = parseJson(words);

//   const series = [
//     {
//       data: jsonObject.map((word) => ({
//         x: word.name,
//         y: word.data,
//       })),
//     },
//   ];

//   const options: ApexCharts.ApexOptions = {
//     series: [
//       {
//         name: "Desktops",
//         data: [
//           {
//             x: "ABC",
//             y: 10,
//           },
//           {
//             x: "DEF",
//             y: 60,
//           },
//           {
//             x: "XYZ",
//             y: 41,
//           },
//         ],
//       },
//       {
//         name: "Mobile",
//         data: [
//           {
//             x: "ABCD",
//             y: 10,
//           },
//           {
//             x: "DEFG",
//             y: 20,
//           },
//           {
//             x: "WXYZ",
//             y: 51,
//           },
//           {
//             x: "PQR",
//             y: 30,
//           },
//           {
//             x: "MNO",
//             y: 20,
//           },
//           {
//             x: "CDE",
//             y: 30,
//           },
//         ],
//       },
//     ],
//     legend: {
//       show: false,
//     },
//     chart: {
//       height: 350,
//       type: "treemap",
//     },
//     title: {
//       text: "Multi-dimensional Treemap",
//       align: "center",
//     },
//   };

//   return (
//     <>
//       {/* //{" "} */}
//       {/* <div style={{ height: "100%", minHeight: "350px" }}> */}
//       {/* // Ensure the div container has a height */}
//       {/* {series[0].data.length > 0 ? ( */}
//       {/* <ReactApexChart options={options} type="treemap" height={550} /> */}
//       {/* ) : (
//         <p>No data to display.</p>
//       )} */}
//       {/* {" "} */}
//       {/* </div> */}
//     </>
//   );
// };

// export default MostUsedTreeMap;
