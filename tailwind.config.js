module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#070724",
      darkgray: "#38384F",
      lightgray: "#838391",
      pastelblue: "#419EBB",
      yellow: "#EDA249",
      purple: "#6f2ed6",
      lighterred: "#D14C32",
      darkerred: "#D83A34",
      orange: "#CD5120",
      turquoise: "#1ec2a4",
      blue: "#2d68f0",
    },
    fontFamily: {
      heading: "Antonio",
      body: "Spartan",
    },
    extend: {
      gridTemplateRows: {
        8: "repeat(8,minmax(0,1fr))",
      },
    },
  },
  plugins: [],
};
