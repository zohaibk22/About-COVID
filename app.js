let API = "https://api.covid19api.com/total/country/";

const getCountryData = async (country) => {
  //country refers to input
  try {
    const response = await axios.get(`${API}${country}`);

    console.log(response);
  } catch (error) {
    console.log(`I'm sorry, there was an error: ${error}`);
  }
};

getCountryData("united-states");
