interface ArticulationData {
  [time: string]: number; // time is a string representing the timestamp, number represents articulation status (1 or 0)
}

function calculateArticulationMetrics(data: ArticulationData): {
  totalArticulationDuration: number;
  totalNonArticulationDuration: number;
  averageArticulationDuration: number;
  averageNonArticulationDuration: number;
} {
  const articulationDurations: number[] = [];
  const nonArticulationDurations: number[] = [];

  let previousTime: number | null = null;
  let articulationStartTime: number | null = null;

  for (const timeStr in data) {
    const time = parseFloat(timeStr);
    const isArticulating = data[timeStr] === 1;

    if (isArticulating) {
      if (articulationStartTime === null) {
        articulationStartTime = time;
      }
    } else {
      if (articulationStartTime !== null) {
        const duration = time - articulationStartTime;
        articulationDurations.push(duration);
        articulationStartTime = null;
      }
    }

    if (previousTime !== null && articulationStartTime === null) {
      const duration = time - previousTime;
      nonArticulationDurations.push(duration);
    }

    previousTime = time;
  }

  // Calculate total duration of articulation and non-articulation
  const totalArticulationDuration = articulationDurations.reduce(
    (acc, duration) => acc + duration,
    0
  );
  const totalNonArticulationDuration = nonArticulationDurations.reduce(
    (acc, duration) => acc + duration,
    0
  );

  // Calculate average duration of articulation and non-articulation
  const averageArticulationDuration = totalArticulationDuration / articulationDurations.length;
  const averageNonArticulationDuration =
    totalNonArticulationDuration / nonArticulationDurations.length;

  return {
    totalArticulationDuration,
    totalNonArticulationDuration,
    averageArticulationDuration,
    averageNonArticulationDuration,
  };
}

// Example usage:
const articulationData: ArticulationData = {
  "1.85887": 0,
  "2.86687": 1,
  "3.44287": 0,
  "4.38687": 1,
  "5.36287": 0,
  "7.07487": 1,
  "7.71487": 0,
  "9.44287": 1,
  "10.05087": 0,
  "11.81087": 1,
  "12.17887": 0,
  "13.52287": 1,
  "13.95487": 0,
  "15.33087": 1,
  "16.11487": 0,
  "16.22687": 1,
  "16.54687": 0,
  "16.78687": 1,
  "17.74687": 0,
  "20.97887": 1,
  "21.47487": 0,
  "22.00287": 1,
  "24.94687": 0,
  "26.62687": 1,
  "26.96287": 0,
  "27.28287": 1,
  "27.58687": 0,
  "28.49887": 1,
  "28.88287": 0,
  "29.07487": 1,
  "29.65087": 0,
  "33.55487": 1,
  "33.89087": 0,
  "35.33087": 1,
  "35.79487": 0,
  "37.58687": 1,
  "38.59487": 0,
  "43.42687": 1,
  "43.77887": 0,
  "45.92287": 1,
  "48.53087": 0,
  "49.50687": 1,
  "49.85887": 0,
  "52.41887": 1,
  "53.13887": 0,
  "57.13887": 1,
  "57.73087": 0,
  "57.87487": 1,
  "58.72287": 0,
  "62.70687": 1,
  "64.40287": 0,
  "72.86687": 1,
  "73.33087": 0,
  "74.05087": 1,
  "74.91487": 0,
  "79.12287": 1,
  "80.09887": 0,
  "83.15487": 1,
  "87.34687": 0,
  "89.10687": 1,
  "89.41087": 0,
  "90.24287": 1,
  "90.78687": 0,
  "91.23487": 1,
  "92.01887": 0,
  "94.05087": 1,
  "94.86687": 0,
  "96.99487": 1,
  "98.30687": 0,
  "98.62687": 1,
  "98.99487": 0,
  "103.31487": 1,
  "104.19487": 0,
  "106.27487": 1,
  "106.67487": 0,
  "106.91487": 1,
  "108.67487": 0,
  "109.58687": 1,
  "109.93887": 0,
  "110.05087": 1,
  "110.38687": 0,
  "111.52287": 1,
  "111.84287": 0,
  "112.17887": 1,
  "112.59487": 0,
  "112.99487": 1,
  "113.53887": 0,
  "113.81087": 1,
  "114.53087": 0,
  "118.13087": 1,
  "118.56287": 0,
  "118.88287": 1,
  "119.79487": 0,
  "124.46687": 1,
  "124.88287": 0,
  "126.96287": 1,
  "127.97087": 0,
  "131.71487": 1,
  "132.11487": 0,
  "132.86687": 1,
  "137.09087": 0,
  "139.34687": 1,
  "140.49887": 0,
  "143.10687": 1,
  "143.98687": 0,
  "147.66687": 1,
  "148.59487": 0,
  "150.80287": 1,
  "151.41087": 0,
  "154.69087": 1,
  "155.01087": 0,
  "157.63487": 1,
  "158.57887": 0,
  "160.06687": 1,
  "160.43487": 0,
  "165.82687": 1,
  "166.14687": 0,
  "166.83487": 1,
  "167.69887": 0,
  "168.25887": 1,
  "169.25087": 0,
  "172.09887": 1,
  "172.48287": 0,
  "175.25087": 1,
  "175.58687": 0,
  "176.61087": 1,
  "177.18687": 0,
  "177.76287": 1,
  "183.21887": 0,
  "186.85087": 1,
  "187.84287": 0,
  "190.22687": 1,
  "190.96287": 0,
  "191.95487": 1,
  "192.49887": 0,
  "193.84287": 1,
  "195.12287": 0,
  "195.92287": 1,
  "196.48287": 0,
  "199.97087": 1,
  "200.32287": 0,
  "203.21887": 1,
  "203.89087": 0,
  "208.80287": 1,
  "209.20287": 0,
  "211.65087": 1,
  "212.06687": 0,
  "215.63487": 1,
  "218.91773": 0,
};

const metrics = calculateArticulationMetrics(articulationData);
console.log("Total Articulation Duration:", metrics.totalArticulationDuration);
console.log("Total Non-Articulation Duration:", metrics.totalNonArticulationDuration);
console.log("Average Articulation Duration:", metrics.averageArticulationDuration);
console.log("Average Non-Articulation Duration:", metrics.averageNonArticulationDuration);
