function fetchJSONData() {
    fetch("./data.json")
    .then((res) => {
        if (!res.ok) {
            throw new Error
            (`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then((response =>   console.log(response)))
    .catch((error) =>
    console.error("Unable to fetch data:", error));
}
fetchJSONData();
// setup
const data = {
  datasets: [
    {
      label: "TreeMap Chart",
      tree: [
        { dominance: 53.21, name: "BTC", price: "61,131.60" },
        { name: "ETH", price: "20,131.60", dominance: 10.55 },
        { name: "BNB", price: "1,131.60", dominance: 3.9 },
        { name: "SOL", price: "5,131.60", dominance: 2.84 },
        { name: "XRP", price: "131.60", dominance: 1.24 },
        { name: "USDT", price: "9,131.60", dominance: 20.05 },
        { name: "TON", price: "17,131.60", dominance: 1 },
        { name: "AVAX", price: "45,131.60", dominance: 7.21 },
      ],
      backgroundColor: (ctx) => colorFromRaw(ctx),
      borderColor: ["RGB(255, 255, 255)"],
      spacing: 0,
      borderWidth: 1,
      labels: {
        display: true,
        align: "center",
        color: "white",
        position: "middle",
        borderColor : 'white'
        // formatter: (ctx) => {
        //   console.log(ctx);
        //   return `Dominance: ${ctx.raw._data.dominance}%`;
        // },
      },
      key: "dominance",
      groups : ['name' , 'price'],
      captions : {
        display : true,
        color : 'white',
        align : 'center',
        position: 'middle',
        border : 'none'
      }
    },
  ],
};

// config
const config = {
  type: "treemap",
  data,
  options: {},
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);
function colorFromRaw(ctx) {
  // console.log(ctx);
  if (ctx.type !== "data") {
    return "transparent";
  }
  const value = ctx.raw._data.dominance;
  let alpha = Math.log(value) / 5;

  // console.log(alpha)
  if (value == 3.9) {
    return `RGB(22, 199, 132)`;
  } else {
    return `RGB(197, 22, 31)`;
    //or
    // `rgba(197, 22, 31, ${alpha})`
    // RGB(197, 22, 31)
  }
  // ctx => raw value explaining
  // x: 472.8070175438596;  starting on horizontal level
  // y: 263.56756756756755;  starting point on vertical level
  // a: 5857.894736842105; => w * h
  // w: 107.6177285318559; => width in pixel
  // h: 54.432432432432456; => height in pixel
  // s: 53; => total sum
  // v: 53; => value
  // vs: undefined;
}
// Instantly assign Chart.js version
const chartVersion = document.getElementById("chartVersion");
chartVersion.innerText = Chart.version;
