let API1 = "https://api.covid19api.com/total/country/";
let API2 = "https://restcountries.eu/rest/v2/name/";

const getCountryData = async (country) => {
  //country refers to input
  try {
    const response1 = await axios.get(`${API1}${country}`);
    const response2 = await axios.get(`${API2}${country}`);

    let countryDataCovid = response1.data;
    console.log(countryDataCovid.Country);

    let dataArray = new Array();

    countryDataCovid.forEach((element, i) => {
      dataArray.push(countryDataCovid[i]);
      // console.log(element);
    });

    //console.log(dataArray);

    let lastInput = new Array();
    lastInput.push(dataArray.pop());

    console.log(lastInput);

    //console.log(lastInput[0].Country);

    //Creating Div to store country info
    const countryDiv = document.querySelector(`.${country}`);
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("country-info");

    //Adding Country Name
    const countryName = document.createElement("p");
    countryName.innerText = `Country: ${lastInput[0].Country}`;

    //adding Country total Cases

    const totalCases = document.createElement("p");
    totalCases.innerText = `Total Cases: ${lastInput[0].Confirmed} People`;

    //Adding total active cases
    const activeCases = document.createElement("p");
    activeCases.innerText = `Active Cases: ${lastInput[0].Active} People`;

    //Adding Recovered cases
    const recoveredCases = document.createElement("p");
    recoveredCases.innerText = `Recovered Cases: ${lastInput[0].Recovered} People`;

    //Adding total Deaths

    const totalDeaths = document.createElement("p");
    totalDeaths.innerText = `Total Deaths: ${lastInput[0].Deaths} People`;

    console.log("i was clicked");

    //console.log(countryName);

    //all Append method requests
    if (countryDiv.firstChild) {
      countryDiv.removeChild(countryDiv.firstChild);
    } else {
      cardDiv.append(totalDeaths);
      cardDiv.append(recoveredCases);
      cardDiv.append(activeCases);
      cardDiv.append(totalCases);
      cardDiv.append(countryName);
      countryDiv.append(cardDiv);
    }

    //console.log(dataArray);
  } catch (error) {
    console.log(`I'm sorry, there was an error: ${error}`);
  }
};

//Event Listeners for all flags to display COVID-19 statistics

const buttonUs = document.querySelector(".us");
buttonUs.addEventListener("click", () => {
  if (buttonUs.className === "country us hide-flag") {
    buttonUs.className = "country us";
  } else {
    buttonUs.className = "country us hide-flag";
  }
  getCountryData("us");
});

const buttonBrazil = document.querySelector(".brazil");
buttonBrazil.addEventListener("click", () => {
  if (buttonBrazil.className === "country brazil hide-flag") {
    buttonBrazil.className = "country brazil";
  } else {
    buttonBrazil.className = "country brazil hide-flag";
  }
  getCountryData("brazil");
});

const buttonRussia = document.querySelector(".russia");
buttonRussia.addEventListener("click", () => {
  if (buttonRussia.className === "country russia hide-flag") {
    buttonRussia.className = "country russia";
  } else {
    buttonRussia.className = "country russia hide-flag";
  }
  getCountryData("russia");
});

const buttonIndia = document.querySelector(".india");
buttonIndia.addEventListener("click", () => {
  if (buttonIndia.className === "country india hide-flag") {
    buttonIndia.className = "country india";
  } else {
    buttonIndia.className = "country india hide-flag";
  }
  getCountryData("india");
});

const buttonUk = document.querySelector(".uk");
buttonUk.addEventListener("click", () => {
  if (buttonUk.className === "country uk hide-flag") {
    buttonUk.className = "country uk";
  } else {
    buttonUk.className = "country uk hide-flag";
  }
  getCountryData("uk");
});

const buttonSpain = document.querySelector(".spain");
buttonSpain.addEventListener("click", () => {
  if (buttonSpain.className === "country spain hide-flag") {
    buttonSpain.className = "country spain";
  } else {
    buttonSpain.className = "country spain hide-flag";
  }
  getCountryData("spain");
});

const buttonItaly = document.querySelector(".italy");
buttonItaly.addEventListener("click", () => {
  if (buttonItaly.className === "country italy hide-flag") {
    buttonItaly.className = "country italy";
  } else {
    buttonItaly.className = "country italy hide-flag";
  }
  getCountryData("italy");
});

const buttonPeru = document.querySelector(".peru");
buttonPeru.addEventListener("click", () => {
  if (buttonPeru.className === "country peru hide-flag") {
    buttonPeru.className = "country peru";
  } else {
    buttonPeru.className = "country peru hide-flag";
  }
  getCountryData("peru");
});

const buttonGermany = document.querySelector(".germany");
buttonGermany.addEventListener("click", () => {
  if (buttonGermany.className === "country germany hide-flag") {
    buttonGermany.className = "country germany";
  } else {
    buttonGermany.className = "country germany hide-flag";
  }
  getCountryData("germany");
});

const buttonIran = document.querySelector(".iran");
buttonIran.addEventListener("click", () => {
  if (buttonIran.className === "country iran hide-flag") {
    buttonIran.className = "country iran";
  } else {
    buttonIran.className = "country iran hide-flag";
  }
  getCountryData("iran");
});

const getSymptoms = function () {
  const symptomsArray = [
    "Fever or Chills",
    "Cough",
    "Shortness of Breath",
    "Fatigue",
    "Muscle",
    "Headache",
    "Loss of Taste and/or Smell",
    "Sore Throat",
    "Congestion or Runny Nose",
    "Nausea or Vomiting",
    "Diarrhea",
  ];
  const parentDiv = document.querySelector(".general-information");
  const symptomsDiv = document.createElement("div");
  const symptomsUl = document.createElement("ul");

  symptomsArray.forEach((element, i) => {
    let symptomsListItems = (document.createElement("li").innerText =
      symptomsArray[i]);
    symptomsUl.append(symptomsListItems);
  });

  symptomsDiv.append(symptomsUl);
  parentDiv.append(symptomsDiv);
};
//getSymptoms();

const symptomsButton = document.querySelector(".symptoms");
symptomsButton.addEventListener("click", () => {
  getSymptoms();
});
