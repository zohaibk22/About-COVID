# Project Overview

## About-COVID-19 App

## Project Description

The "About-COVID-19-App" will be an educational website about Covid 19. It will utilize a API pulling from a database with the number of COVID-19 cases worldwide, splitting them into objects with keys organized by Country. Through the use of the API, the website will display the top 10 countries with COVID-19 cases around the world. The end-user will be able to click on an image of the country flag, which will then trigger an evenListener that will dipslay the COVID-19 stastics surrounding that specific country. These stastistics  will include the total reported cases, total deaths, total active cases, and total recovered cases.

## API and Data Sample

GetPostman API URL: https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#9739c95f-ef1d-489b-97a9-0a6dfe2f74d8

```
[
  {
  "Country": "United States of America",
    "CountryCode": "",
    "Province": "",
    "City": "",
    "CityCode": "",
    "Lat": "0",
    "Lon": "0",
    "Confirmed": 1942363,
    "Deaths": 110514,
    "Recovered": 506367,
    "Active": 1325482,
    "Date": "2020-06-07T00:00:00Z"
  }
]

```

## Wireframes
WireFrame: https://wireframe.cc/pbKTLi

### MVP/PostMVP

#### MVP 

- Display Top ten countries with Coronavirus cases
- Countries flag must have click functionality
- Display COVID-19 stastics of the selected country
- Must have the ability to view statistics of multiple countries with refresh of page

#### PostMVP 

-  Add button functionality to display some common symptoms and remedies of COVID-19
- Incorperate dynamic Flag functionality. Incorperate update functionality that continuously checks for countries with the highest Covid-19 cases (Requires a second APU)
- Media Query for mobile app.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 8| Project Prompt/Project Proposal | Complete
|June 9| Front-End Core Design (HTML/CSS) | Complete
|June 10| Code in Event Listener for Symptoms/Remedies. Implement Map| Complete
|June 11| Code Event Listener for Flags to display COVID-19 stastics from API| Complete
|June 12| Make Final touches. Complete MVP. Work on POSTMVP | Complete
|June 15| Present | Incomplete

## Priority Matrix
![Priority Matrix](https://git.generalassemb.ly/zkhan14/About-Covid19-App/blob/master/Priority%20matrix.jpg)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML Structure | H | 1.5hrs| 0.5 hrs  | 0.5 hrs |
| CSS Styles| H | 3hrs| 4 hrs | 4 hrs  |
| Implement Flags | H | 4hrs| 2.5 hrs | 2.5 hrs|
| Flag Click Functionality| H | 4hrs| 3 hrs | 3 hrs|
| Implement API to read COVID-19 Statistics| H | 4hrs| 3 hrs| 3 hrs |
| Toggle functionality between flag and COVID-19 statistics | H | 4hrs | 3 hrs | 3 hrs|
| COVID-19 Symptoms and Remedies buttton | M | 2hrs | 3 hrs | 3 hrs|
| Media Query for Mobile App Design | M | 2hrs | 2 hrs| 2 hrs|
| Total | H | 24.5hrs| 21 hrs | 21 hrs |
|

## Code Snippet
```

let countryDataCovid = response1.data;

    let dataArray = new Array();

    countryDataCovid.forEach((element, i) => {
      dataArray.push(countryDataCovid[i]);
    });

    let lastInput = new Array();
    lastInput.push(dataArray.pop());  
    
 ```


## Change Log

After meeting with team lead for project approvals, the original project idea was slighly altered. Instead of creating a map of all countries exhibiting COVID-19 exposure, i would just be documenting the top 10 countries  with COVID-19 exposure. Additionally, instead of a displaying a map of countries, I would end up displaying the flags of the respective countries. Once the end-user would click on a country flag, it would display a div of COVID-19  statistics regarding the respective country.
