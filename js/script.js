/* eslint-disable no-invalid-this, max-len */

/*  Weather Chart */
const chartWeather = new Highcharts.Chart({
  chart: {
    renderTo: 'chart-weather',
    type: 'spline',
    zoomType: 'xy',
    backgroundColor: 'transparent',
  },
  title: {
    text: 'Actual weather conditions',
    align: 'right',
    style: {
      color: Highcharts.getOptions().colors[7],
    },
  },
  subtitle: {
    text: 'BME280 measurments',
    align: 'right',
    style: {
      color: Highcharts.getOptions().colors[7],
    },
  },
  credits: {
    enabled: false,
  },
  xAxis: {
    type: 'datetime',
    labels: {
      format: '{value:%H:%M}',
    },
  },
  yAxis: [{
    gridLineDashStyle: 'longdash',
    gridLineColor: Highcharts.getOptions().colors[7],
    labels: {
      format: '{value}°C',
      style: {
        color: Highcharts.getOptions().colors[8],
      },
    },
    title: {
      text: null,
    },
  }, { // Secondary yAxis
    gridLineWidth: 0,
    title: {
      text: null,
    },
    labels: {
      format: '{value} %',
      style: {
        color: Highcharts.getOptions().colors[0],
      },
    },
  }, { // Tertiary yAxis
    gridLineWidth: 0,
    title: {
      text: null,
    },
    labels: {
      format: '{value} hPa',
      style: {
        color: Highcharts.getOptions().colors[9],
      },
    },
    opposite: true,
  }, { // Quaternary yAxis
    gridLineWidth: 0,
    title: {
      text: null,
    },
    labels: {
      format: '{value} lux',
      style: {
        color: Highcharts.getOptions().colors[6],
      },
    },
    opposite: true,
  }],
  legend: {
    itemStyle: {
      color: Highcharts.getOptions().colors[7],
      fontWeight: 'thick',
    },
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true,
      },
    },
  },
  series: [{
    name: 'Temperature',
    type: 'spline',
    yAxis: 0,
    data: [],
    marker: {
      enabled: false,
    },
    tooltip: {
      valueSuffix: ' °C',
    },
    color: Highcharts.getOptions().colors[8],
  }, {
    name: 'Humidity',
    type: 'spline',
    yAxis: 1,
    data: [],
    marker: {
      enabled: false,
    },
    tooltip: {
      valueSuffix: ' %',
    },
    color: Highcharts.getOptions().colors[0],
  }, {
    name: 'Pressure',
    type: 'spline',
    yAxis: 2,
    data: [],
    marker: {
      enabled: false,
    },
    tooltip: {
      valueSuffix: ' hPa',
    },
    color: Highcharts.getOptions().colors[9],
  }, {
    name: 'Light',
    type: 'spline',
    yAxis: 3,
    data: [],
    marker: {
      enabled: false,
    },
    tooltip: {
      valueSuffix: ' lux',
    },
    color: Highcharts.getOptions().colors[6],
  }],
});
/* WaterFlow Chart */
const chartWaterFlow = new Highcharts.Chart({
  chart: {
    renderTo: 'waterflow',
    type: 'spline',
    zoomType: 'xy',
    backgroundColor: 'transparent',
  },
  title: {
    text: 'Water Flow',
    align: 'right',
    style: {
      color: Highcharts.getOptions().colors[7],
    },
  },
  subtitle: {
    text: 'Reed switches measurments',
    align: 'right',
    style: {
      color: Highcharts.getOptions().colors[7],
    },
  },
  credits: {
    enabled: false,
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {
      second: '%H:%M:%S',
    },
  },
  yAxis: [{
    gridLineDashStyle: 'longdash',
    gridLineColor: Highcharts.getOptions().colors[7],
    labels: {
      format: '{value}ml',
      style: {
        color: Highcharts.getOptions().colors[7],
      },
    },
    title: {
      text: 'Volume (ml)',
      style: {
        color: Highcharts.getOptions().colors[7],
      },
    },
  }, { // Secondary yAxis
    gridLineWidth: 0,
    title: {
      text: null,
    },
  }],
  legend: {
    itemStyle: {
      color: Highcharts.getOptions().colors[7],
      fontWeight: 'thick',
    },
  },
  credits: {enabled: false},
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true,
      },
    },
  },
  series: [{
    name: 'In',
    type: 'spline',
    data: [],
    marker: {
      enabled: false,
    },
    tooltip: {
      valueSuffix: ' ml',
    },
    color: Highcharts.getOptions().colors[0],
  }, {
    name: 'Out',
    type: 'spline',
    data: [],
    marker: {
      enabled: false,
    },
    tooltip: {
      valueSuffix: ' ml',
    },
    color: Highcharts.getOptions().colors[9],
  }],
});
/* Water parameters Chart */
const chartWaterParams = new Highcharts.Chart({
  chart: {
    renderTo: 'water-parameters',
    type: 'spline',
    zoomType: 'xy',
    backgroundColor: 'transparent',
  },
  title: {
    text: 'Actual water conditions',
    align: 'right',
    style: {
      color: Highcharts.getOptions().colors[7],
    },
  },
  subtitle: {
    text: 'EC measurments',
    align: 'right',
    style: {
      color: Highcharts.getOptions().colors[7],
    },
  },
  credits: {
    enabled: false,
  },
  xAxis: {
    type: 'datetime',
    labels: {
      format: '{value:%H:%M}',
    },
  },
  yAxis: [{
    gridLineDashStyle: 'longdash',
    gridLineColor: Highcharts.getOptions().colors[7],
    labels: {
      format: '{value}°C',
      style: {
        color: Highcharts.getOptions().colors[8],
      },
    },
    title: {
      text: null,
    },
  }, { // Secondary yAxis
    gridLineWidth: 0,
    title: {
      text: null,
    },
    labels: {
      format: '{value} mS/cm',
      style: {
        color: Highcharts.getOptions().colors[6],
      },
    },
    opposite: true,
  }],
  legend: {
    itemStyle: {
      color: Highcharts.getOptions().colors[7],
      fontWeight: 'thick',
    },
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true,
      },
    },
  },
  series: [{
    name: 'Temperature',
    type: 'spline',
    yAxis: 0,
    data: [],
    marker: {
      enabled: false,
    },
    tooltip: {
      valueSuffix: ' °C',
    },
    color: Highcharts.getOptions().colors[8],
  }, {
    name: 'EC',
    type: 'spline',
    yAxis: 1,
    data: [],
    marker: {
      enabled: false,
    },
    tooltip: {
      valueSuffix: ' mS/cm',
    },
    color: Highcharts.getOptions().colors[6],
  }],
});


/** Upload the device ID saved on SD card
**/
function checkId() {
  const xhttp = new XMLHttpRequest();
  xhttp.responseType = 'json';
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const device = this.response; // request device ID from SD Card
      console.log('Device ID: ', device.name); // logging the device ID
      const deviceIds = document.querySelectorAll('.device-id');
      deviceIds.forEach((deviceId) => {
        // display the device ID in html (up top of the page)
        deviceId.innerHTML = device.name;
      });
    }
  };
  xhttp.open('GET', 'http://localhost:3131/device/0', true);
  xhttp.send();
}

let i = 0;
let l = 0;
/* Timer */
// Every 5 sec upload data from device
setInterval(function updateData() {
  const xhttp = new XMLHttpRequest();
  xhttp.responseType = 'json';
  xhttp.onreadystatechange = function() {
    if (this.status == 404) {
      i = 0;
    }
    if (this.readyState == 4 && this.status == 200) {
      const data = this.response; // request the data string
      displayData(data); // start function of displaying the recived data
      saveDatabase(data);
      // createDatabaseTable();
      i++;
      l++;
    }
  };
  xhttp.open('GET', `http://localhost:3131/weather/${i}`, true);
  xhttp.send();
}, 2000);

/** Displaying
  * @param {data} data written in table
*/
function displayData(data) {
  const today = Date.now() + 3600000; // update the time and date
  const dataToDisplay = [
    `<i class='fas fa-thermometer-three-quarters'></i>${parseFloat(data[Object.keys(data)[1]])}°C`,
    `<i class='fas fa-smog'></i>${parseFloat(data[Object.keys(data)[2]])}%`,
    `<i class='fab fa-cloudscale'></i>${parseFloat(data[Object.keys(data)[3]])}hPa`,
    `<i class='fas fa-sun'></i>${parseFloat(data[Object.keys(data)[4]])}lux`,
    `<i class='fas fa-tint'></i>${parseFloat(data[Object.keys(data)[5]])}ml`,
    `<i class='fas fa-tint-slash'></i>${parseFloat(data[Object.keys(data)[6]])}ml`,
    `<i class='fas fa-thermometer-half'></i>${parseFloat(data[Object.keys(data)[7]])}°C`,
    `<i class='fas fa-thermometer'></i>${parseFloat(data[Object.keys(data)[8]])}mS/cm`];
  const dataToFind = [
    'thermometer',
    'hygrometer',
    'barometer',
    'light',
    'balance-in',
    'balance-out',
    'thermometer-out',
    'ec-out',
    'battery-level',
    'date',
    'time',
  ];
  // Weather chart (Temperature, Humidity, Pressure, Light)

  for (let i=0; i<=3; i++) {
    if (l < 50) {
      chartWeather.series[i].addPoint([
        today,
        parseFloat(data[Object.keys(data)[i+1]])],
      true,
      false,
      true,
      );
    } else {
      chartWeather.series[i].addPoint([
        today,
        parseFloat(data[Object.keys(data)[i+1]])],
      true,
      true,
      true,
      );
    }

    const valueToDisplay = document.getElementById(dataToFind[i]);
    valueToDisplay.innerHTML = dataToDisplay[i];
  }
  // Waterflow chart (Water In and Out)
  for (let i=0; i<=1; i++) {
    if (l < 50) {
      chartWaterFlow.series[i].addPoint([
        today,
        parseFloat(data[Object.keys(data)[i+5]])],
      true,
      false,
      true,
      );
    } else {
      chartWaterFlow.series[i].addPoint([
        today,
        parseFloat(data[Object.keys(data)[i+5]])],
      true,
      true,
      true,
      );
    }
    const valueToDisplay = document.getElementById(dataToFind[i+4]);
    valueToDisplay.innerHTML = dataToDisplay[i+4];
  }
  // Water parameters chart (EC, Water temperature)
  for (let i=0; i<=1; i++) {
    if (l < 50) {
      chartWaterParams.series[i].addPoint([
        today,
        parseFloat(data[Object.keys(data)[i+7]])],
      true,
      false,
      true,
      );
    } else {
      chartWaterParams.series[i].addPoint([
        today,
        parseFloat(data[Object.keys(data)[i+7]])],
      true,
      true,
      true,
      );
    }
    const valueToDisplay = document.getElementById(dataToFind[i+6]);
    valueToDisplay.innerHTML = dataToDisplay[i+6];
  }

  // Display date and Time
  const d = new Date();
  let valueToDisplay = document.getElementById(dataToFind[9]);
  valueToDisplay.innerHTML = d.getDate()+'.'+d.getMonth()+'.'+d.getFullYear();
  valueToDisplay = document.getElementById(dataToFind[10]);
  if (d.getMinutes() < 10) {
    valueToDisplay.innerHTML = d.getHours() + ':0' + d.getMinutes();
  } else {
    valueToDisplay.innerHTML = d.getHours() + ':' + d.getMinutes();
  }

  // Display Battery percentage
  valueToDisplay = document.getElementById(dataToFind[8]);
  // adding battery level value to html
  valueToDisplay.innerHTML = data.bat + '%';
  const batteryLevel = document.querySelector('.battery-level');
  if (data.bat <= 15) {
    // if battery level is lower than 15% than color the battery red
    batteryLevel.style.background = '#FE5757';
    valueToDisplay.style.color = '#FE5757';
  } else {
    batteryLevel.style.background = '#1b908f'; // default battery color black
  }
  valueToDisplay = document.querySelector('.'+dataToFind[8]);
  batteryLevel.style.width = data.bat + '%';
}

// Upload database every 1 minute (buffer.csv)

/** Automaticly after update database save it to localStorage
  * @param {data} data written in table
*/
function saveDatabase(data) {
  // check if there is in local storage item database if not then create it
  const database = localStorage.getItem('Database') ? JSON.parse(localStorage.getItem('Database')) : [];
  database.push(data);
  localStorage.setItem('Database', JSON.stringify(database));
}
/** Automaticly after saving database send command
  to delete buffer.csv from the SD Card
**/

/** Create database table after clicking on 'Database' button **/
function createDatabaseTable() {
  const d = new Date();
  let hour = d.getHours()-1;
  let minute = 0;
  const table = document.getElementById('database-table');
  table.innerHTML = ''; // clear the table
  // save in constant the database saved in local storage
  const databaseArray = JSON.parse(localStorage.getItem('Database'));
  // check if something is saved in local storage
  if (databaseArray != null) {
    databaseArray.forEach((row) => {
      if (minute < 10) {
        minute = '0' + minute.toString();
      }
      if (minute >= 60) {
        hour ++;
        minute = '00';
      }
      // check if time is correctly saved
      const data = `<tr>
                      <td>${hour + ':' + (minute.toString())}</td>
                      <td>${row[Object.keys(row)[1]]}</td>
                      <td>${row[Object.keys(row)[2]]}</td>
                      <td>${row[Object.keys(row)[3]]}</td>
                      <td>${row[Object.keys(row)[4]]}</td>
                      <td>${row[Object.keys(row)[5]]}</td>
                      <td>${row[Object.keys(row)[6]]}</td>
                      <td>${row[Object.keys(row)[7]]}</td>
                      <td>${row[Object.keys(row)[8]]}</td>
                    </tr>`;
      table.innerHTML += data; // add data to each cell
      minute ++;
    });
  }
  // If the table is created, remove the loader gif page
  setTimeout(function() {
    const loader = document.querySelector('.loader');
    loader.classList.remove('show');
  }, 500);
}

/* Pages Navigation */
this.navLinks = Array.from(document.querySelectorAll('.main-nav button'));

// Listener for nav buttons (on the left)
for (const link of this.navLinks) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const href = link.getAttribute('href'); // read the hred of each page
    // read the id from href of each page (delete the '#')
    const id = href.substring(1);
    activePage(id); // dislay the selected page
    // If the nav clicked is database, display loader while the table is created
    if (id === 'database') {
      const loader = document.querySelector('.loader');
      loader.classList.add('show');
      /* Timeout needed to display the loader properly.
      Creating the database table (loader turn off after table is loaded) */
      setTimeout(function() {
        createDatabaseTable();
      }, 250);
    }

    if (id === 'settings') {
      const wholePage =
        document.querySelector('body > div:not(.confirmation-popup)');
      const settingsList = document.querySelector('.settings-list');
      const settingsButtons = document.querySelectorAll('.settings-button');
      // If choose setting, display only the popup, the rest of page is hidden
      settingsButtons.forEach((settingButton) => {
        settingButton.addEventListener('click', function(event) {
          event.preventDefault();
          wholePage.style.display = 'none';
          settingsList.style.display = 'none';
          // If it's calibrating, pass through the choose popup
          // Else display the confirmation popup
          if (this.id === 'calibrate-device') {
            choosePopup(this.id);
          } else {
            confirmationPopup(this.id);
          }
        });
      });
    }
  });
}

/** Display the active page
  * @param {id} id of the subpage
**/
function activePage(id) {
  this.navPages = Array.from(document.querySelectorAll('.page'));
  window.location.hash = '#' + id; // read the location on the page
  for (const page of this.navPages) {
    if (page.id === id) {
      page.classList.add('active'); // activate the choosen page
    } else {
      page.classList.remove('active'); // inactivate the rest of the pages
    }
  }
}

/** After the page refresh display the charts page and upload data and database
**/
function refreshPage() {
  const loader = document.querySelector('.loader');
  loader.classList.add('show');
  deleteDatabase();
  // if off, wait 5 seconds, if on update automaticly after refreshing the page
  const xhttp = new XMLHttpRequest();
  xhttp.responseType = 'json';
  xhttp.onreadystatechange = function() {
    if (this.status == 404) {
      i = 0;
    }
    if (this.readyState == 4 && this.status == 200) {
      const data = this.response; // request the data string
      displayData(data); // start function of displaying the recived data
      saveDatabase(data);
      i++;
      l++;
    }
  };
  xhttp.open('GET', `http://localhost:3131/weather/${i}`, true);
  xhttp.send();
  // updateData();
  activePage('live'); // First page (Charts) after refresh
  checkId(); // upload the device id
  // off, 60seconds the database is uploded/on automaticly(can cause bugs!)
  // updateDatabase();
  loader.classList.remove('show');
}

// The refresh page always active (if refreshing or opening site)
refreshPage();

/** Popup for calibration - choosing the calibrated device
  * @param {choosenSetting} choosenSetting of calibration module
**/
function choosePopup(choosenSetting) {
  const wholePage =
    document.querySelector('body > div:not(.confirmation-popup)');
  const settingsList = document.querySelector('.settings-list');
  const selectedPopup = document.getElementById(`choose-${choosenSetting}`);
  const negativeAnswer =
    document.querySelector(`div[id='choose-${choosenSetting}'] .answer-no`);
  const selectedOptions =
    document.querySelectorAll(`div[id='choose-${choosenSetting}'] .option`);

  selectedPopup.style.display = 'block';

  // Add back visibility to the rest of the page
  negativeAnswer.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    selectedPopup.style.display = 'none';
    wholePage.style.display = 'block';
    settingsList.style.display = 'block';
    return;
  }, {once: true});

  // Pass to calibration popup with choosen setting
  selectedOptions.forEach((selectedOption) => {
    selectedOption.addEventListener('click', function(event) {
      event.preventDefault();
      selectedPopup.style.display = 'none';
      calibrationPopup(this.id);
    });
  });
}

/** Popup for calibration - choosing the calibrated device
  * @param {choosenSetting} choosenSetting of calibration module
**/
function calibrationPopup(choosenSetting) {
  let time; // Time interval neede to not multiplicate the function
  const wholePage =
    document.querySelector('body > div:not(.confirmation-popup)');
  const settingsList = document.querySelector('.settings-list');
  const selectedPopup = document.getElementById(`cal-${choosenSetting}`);
  const negativeAnswer =
    document.querySelector(`div[id='cal-${choosenSetting}'] .answer-no`);
  const positiveAnswer =
    document.querySelector(`div[id='cal-${choosenSetting}'] .answer-yes`);
  const input =
    document.querySelector(`div[id='cal-${choosenSetting}'] input`);

  // Temporarly displaying the analog reads from the selected calibrated device
  // const analogRead = document.querySelector(`.analog-${choosenSetting}`);

  selectedPopup.style.display = 'block';

  negativeAnswer.addEventListener('click', function(event) {
    clearInterval(time);
    event.preventDefault();
    selectedPopup.style.display = 'none';
    const showPopup = document.querySelector('.choose-popup');
    showPopup.style.display = 'block';
    return;
  });

  // Start the calibration function (send info to the device, display on screen)
  positiveAnswer.addEventListener('click', function(event) {
    event.preventDefault();
    if (input.value.length > 0) {
      settingAction(this.id);
      selectedPopup.style.display = 'none';
      wholePage.style.display = 'block';
      settingsList.style.display = 'block';
    }
  }, {once: true});

  // Temporarly - request for analog readings
  /* if (selectedPopup.style.display = 'block') {
    time = setInterval(() => {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          const data = this.responseText;
          console.log(data);
          analogRead.innerHTML = data;
        }
      };
      xhttp.open('GET', `${choosenSetting}`, true);
      xhttp.send();
    }, 1000);
  } */
}

/** Confirmation popup (select 'Yes' or 'No')
  * @param {choosenSetting} choosenSetting of calibration module
**/
function confirmationPopup(choosenSetting) {
  const wholePage =
    document.querySelector('body > div:not(.confirmation-popup)');
  const settingsList = document.querySelector('.settings-list');
  const selectedPopup = document.getElementById(`conf-${choosenSetting}`);
  const negativeAnswer =
    document.querySelector(`div[id='conf-${choosenSetting}'] .answer-no`);
  const positiveAnswer =
    document.querySelector(`div[id='conf-${choosenSetting}'] .answer-yes`);

  selectedPopup.style.display = 'block';
  // If negative answer then display everything back
  negativeAnswer.addEventListener('click', function(event) {
    event.preventDefault();
    selectedPopup.style.display = 'none';
    wholePage.style.display = 'block';
    settingsList.style.display = 'block';
  }, {once: true});
  // I positive answer then start the choosen function
  positiveAnswer.addEventListener('click', function(event) {
    event.preventDefault();
    settingAction(this.id);
    selectedPopup.style.display = 'none';
    wholePage.style.display = 'block';
    settingsList.style.display = 'block';
  }, {once: true});
}

// Actions for selected settings (delete, download database, restart device)
/** Confirmation popup (select 'Yes' or 'No')
  * @param {action} action of choosen possible actions
**/
function settingAction(action) {
  if ( action == 'aff-delete-database') {
    deleteDatabase();
  }
  if (action == 'aff-download-database') {
    downloadDatabase();
  }
  if (action == 'aff-restart-device') {
    restartDevice();
  }
}

/** Send command to delete the database from SD card **/
function deleteDatabase() {
  /* const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const confirmation = this.responseText; // request for response
      console.log(confirmation);
    }
    if (confirmation = 'deleted!') {
      localStorage.clear(); // deleting the local storage
      console.log('Database:', confirmation); // logging the confirmation
    }
    if (!confirmation) {
      console.log('Error during deleting database!'); // logging the error
    }
  };
  xhttp.open('GET', '/delete_database', true);
  xhttp.send(); */
  localStorage.clear(); // deleting the local storage
  console.log('Database: deleted!'); // logging the confirmation
}

/** Send command to download the database from SD card (without deleting it!)**/
function downloadDatabase() {
  /* const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // '_blank' needed for not opening another page
      window.open('/download_database', '_blank');
      const confirmation = 'downloaded!'; // request confirmation
      console.log(confirmation);
    }
    if (confirmation = 'downloaded!') {
      console.log('Database:', confirmation); // logging the confirmation
    }
    if (!confirmation) {
      console.log('Error during downloading database!'); // logging the error
    }
  };
  xhttp.open('GET', '/download_database', true);
  xhttp.send(); */
  console.log('Database: downloaded!');
}

/** Send command to restart the device **/
function restartDevice() {
  /* const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const confirmation = this.responseText; // request confirmation
      console.log(confirmation);
    }
    if (confirmation = 'restarted!') {
      console.log('Device:', confirmation); // logging the confirmatio
    }
    if (!confirmation) {
      console.log('Error during restarting the device!'); // logging the error
    }
  };
  xhttp.open('GET', '/restart_device', true);
  xhttp.send(); */
  console.log('Device: restarting!');
  setTimeout(function() {
    location.reload();
  }, 1000);
}
