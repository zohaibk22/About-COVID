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
  buttonUs.style.backgroundImage = "none";
  getCountryData("us");
});

// const buttonBrazil = document.querySelector(".brazil");
// buttonBrazil.addEventListener("click", () => {
//   buttonBrazil.style.backgroundImage = "none";
//   getCountryData("brazil");
// });

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
  buttonRussia.style.backgroundImage = "none";
  getCountryData("russia");
});

const buttonIndia = document.querySelector(".india");
buttonIndia.addEventListener("click", () => {
  buttonIndia.style.backgroundImage = "none";
  getCountryData("india");
});

const buttonUk = document.querySelector(".uk");
buttonUk.addEventListener("click", () => {
  buttonUk.style.backgroundImage = "none";
  getCountryData("uk");
});

const buttonSpain = document.querySelector(".spain");
buttonSpain.addEventListener("click", () => {
  buttonSpain.style.backgroundImage = "none";
  getCountryData("spain");
});

const buttonItaly = document.querySelector(".italy");
buttonItaly.addEventListener("click", () => {
  buttonItaly.style.backgroundImage = "none";
  getCountryData("italy");
});

const buttonPeru = document.querySelector(".peru");
buttonPeru.addEventListener("click", () => {
  buttonPeru.style.backgroundImage = "none";
  getCountryData("peru");
});

const buttonGermany = document.querySelector(".germany");
buttonGermany.addEventListener("click", () => {
  buttonGermany.style.backgroundImage = "none";
  getCountryData("germany");
});

const buttonIran = document.querySelector(".iran");
buttonIran.addEventListener("click", () => {
  buttonIran.style.backgroundImage = "none";
  getCountryData("iran");
});

function noOverLap() {
  const buttonRemove = document.querySelector(".country");
  buttonRemove.removeEventListener("click");
}

//const mostRecentDate = new DataCue(Math.max.apply(null));

// Some function to pull the most recent data by date --  not sure what exactly is going on
// new Date(
//   Math.max.apply(
//     null,
//     dataArray.map(function (e) {
//       return new Date(e.MeasureDate);
//     })
//   )
// );

// console.log(Date);

// const mostRecentDate = new Date(
//   Math.max.apply(
//     null,
//     countryDataCovid((e) => {
//       return new Date(e.MeasureData);
//     })
//   )
// );

// const mostRecentObject = countryDataCovid.filter((e) => {
//   let d = new Date(e.MeasureDate);
//   return d.getTime() == mostRecentDate.getTime();
// })[0];

// console.log(mostRecentObject());

// console.log(countryDataCovid.Country);

// console.log(response1);

// let countryFlag = response2.data.name;
// console.log(countryFlag);
