document.addEventListener("DOMContentLoaded", function () {
    const cropData = [
      {
        name: "Apple",
        nitrogen: "20.80",
        phosphorus: "134.22",
        potassium: "199.89",
        temperature: "22.63",
        humidity: "92.33",
        pH: "5.93",
        rainfall: "112.65",
      },
      {
        name: "Banana",
        nitrogen: "100.23",
        phosphorus: "82.01",
        potassium: "50.05",
        temperature: "27.38",
        humidity: "80.36",
        pH: "5.98",
        rainfall: "104.63",
      },
      {
        name: "Blackgram",
        nitrogen: "40.02",
        phosphorus: "67.47",
        potassium: "19.24",
        temperature: "29.97",
        humidity: "65.12",
        pH: "7.13",
        rainfall: "67.88",
      },
      {
        name: "Chickpea",
        nitrogen: "40.09",
        phosphorus: "67.79",
        potassium: "79.92",
        temperature: "18.87",
        humidity: "16.86",
        pH: "7.34",
        rainfall: "80.06",
      },
      {
        name: "Coconut",
        nitrogen: "21.98",
        phosphorus: "16.93",
        potassium: "30.59",
        temperature: "27.41",
        humidity: "94.84",
        pH: "5.98",
        rainfall: "175.69",
      },
      {
        name: "Coffee",
        nitrogen: "101.20",
        phosphorus: "28.74",
        potassium: "29.94",
        temperature: "25.54",
        humidity: "58.87",
        pH: "6.81",
        rainfall: "158.07",
      },
      {
        name: "Cotton",
        nitrogen: "117.77",
        phosphorus: "46.24",
        potassium: "19.56",
        temperature: "23.99",
        humidity: "79.84",
        pH: "6.92",
        rainfall: "80.09",
      },
      {
        name: "Grapes",
        nitrogen: "23.18",
        phosphorus: "132.53",
        potassium: "200.11",
        temperature: "23.87",
        humidity: "81.87",
        pH: "6.25",
        rainfall: "69.91",
      },
      {
        name: "Jute",
        nitrogen: "78.40",
        phosphorus: "46.86",
        potassium: "39.99",
        temperature: "24.96",
        humidity: "79.64",
        pH: "6.73",
        rainfall: "174.79",
      },
      {
        name: "Lentil",
        nitrogen: "18.77",
        phosphorus: "68.36",
        potassium: "19.41",
        temperature: "24.51",
        humidity: "64.80",
        pH: "6.99",
        rainfall: "45.68",
      },
      {
        name: "Maize",
        nitrogen: "77.76",
        phosphorus: "48.44",
        potassium: "19.79",
        temperature: "22.61",
        humidity: "65.92",
        pH: "6.26",
        rainfall: "84.76",
      },
      {
        name: "Mango",
        nitrogen: "20.07",
        phosphorus: "27.18",
        potassium: "29.92",
        temperature: "31.90",
        humidity: "50.05",
        pH: "5.77",
        rainfall: "94.99",
      },
      {
        name: "Mothbeans",
        nitrogen: "21.44",
        phosphorus: "48.01",
        potassium: "20.23",
        temperature: "28.52",
        humidity: "53.16",
        pH: "6.85",
        rainfall: "51.22",
      },
      {
        name: "Mungbean",
        nitrogen: "20.99",
        phosphorus: "47.28",
        potassium: "19.87",
        temperature: "28.27",
        humidity: "85.95",
        pH: "6.74",
        rainfall: "48.44",
      },
      {
        name: "Muskmelon",
        nitrogen: "100.32",
        phosphorus: "17.72",
        potassium: "50.08",
        temperature: "28.66",
        humidity: "92.34",
        pH: "6.36",
        rainfall: "24.69",
      },
      {
        name: "Orange",
        nitrogen: "19.58",
        phosphorus: "16.55",
        potassium: "10.01",
        temperature: "22.77",
        humidity: "92.50",
        pH: "7.01",
        rainfall: "110.41",
      },
      {
        name: "Papaya",
        nitrogen: "49.88",
        phosphorus: "59.05",
        potassium: "50.04",
        temperature: "33.72",
        humidity: "92.40",
        pH: "6.74",
        rainfall: "142.63",
      },
      {
        name: "Pigeonpeas",
        nitrogen: "20.73",
        phosphorus: "67.73",
        potassium: "20.29",
        temperature: "27.74",
        humidity: "48.06",
        pH: "5.79",
        rainfall: "149.46",
      },
      {
        name: "Pomegranate",
        nitrogen: "18.87",
        phosphorus: "18.75",
        potassium: "40.21",
        temperature: "21.84",
        humidity: "90.13",
        pH: "6.43",
        rainfall: "107.53",
      },
      {
        name: "Rice",
        nitrogen: "79.89",
        phosphorus: "47.58",
        potassium: "39.87",
        temperature: "23.69",
        humidity: "82.27",
        pH: "6.43",
        rainfall: "236.18",
      },
      {
        name: "Watermelon",
        nitrogen: "99.42",
        phosphorus: "17.00",
        potassium: "50.22",
        temperature: "25.59",
        humidity: "85.16",
        pH: "6.50",
        rainfall: "50.79",
      },
      {
        name: "Kidneybeans",
        nitrogen: "20.75",
        phosphorus: "67.54",
        potassium: "20.05",
        temperature: "20.05",
        humidity: "21.61",
        pH: "5.78",
        rainfall: "105.92",
      },
    ];
  
    const tableBody = document
      .getElementById("crop-table")
      .getElementsByTagName("tbody")[0];
    cropData.forEach((crop) => {
      let row = tableBody.insertRow();
      Object.values(crop).forEach((text) => {
        let cell = row.insertCell();
        cell.appendChild(document.createTextNode(text));
      });
    });
  });
  