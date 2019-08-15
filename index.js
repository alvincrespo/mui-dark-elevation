const BASE_COLOR = "#FFFFFF";

const ELEVATION_MAP = {
  dp_00: "0%",
  dp_01: "5%",
  dp_02: "7%",
  dp_03: "8%",
  dp_04: "9%",
  dp_06: "11%",
  dp_08: "12%",
  dp_12: "14%",
  dp_16: "15%",
  dp_24: "16%"
};

export const generate = (baseColor = BASE_COLOR) => {
  const colors = {
    base: baseColor
  };

  Object.keys(ELEVATION_MAP).forEach(key => {
    const r = parseInt(baseColor.slice(1, 3), 16);
    const g = parseInt(baseColor.slice(3, 5), 16);
    const b = parseInt(baseColor.slice(5, 7), 16);
    const a = ELEVATION_MAP[key];

    colors[key] = `rgba(${r}, ${g}, ${b}, ${a})`;
  });

  return colors;
};
