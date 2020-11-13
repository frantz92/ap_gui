/** INFO
This is the GUI simulation app,
showing only the visual side of the whole project
taking data from a build json-server based database (db/db.json).

Normally all datas are sent by the devices located on the plantation.
The devices are regestering data like: location temperature, humidity, pressure,
sunlight, the amount of water used for watering the measured plantation part,
the water not absorbed in substrate, the temperature and EC of the water.

This GUI allows to observe the selected device (part of plantation)
and to send some commands like restarting or calibrating.
Additionally all the datas are sent to the built database,
where then they are analysed and used to calculate the growth
and vegetation state prediction algorythms.

At the end, knowing the future weather (also calculated by AI algorythms
and the device place outside the plantation with weather parameters
measuring modules, such as temperature, pressure and rain counter)
the user receive the daily best plan of watering each of the part of plantation
considering his set preferences.

The project was made by Patryk Frankowski
on commission of AHEAD sp. z o.o. company.
**/

/* eslint-disable no-invalid-this, max-len, no-unused-vars */

/**  Weather Chart **/
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
/** WaterFlow Chart **/
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
/** WaterFlow Parameters Chart **/
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

/** The refresh page always active (if refreshing or opening site) **/
let i = 0; // Data id in database
let l = 0; // Chart width (set to 50 points)
refreshPage();

/** After the page refresh display the charts page and upload data, database **/
function refreshPage() {
  const loader = document.querySelector('.loader');

  loader.classList.add('show'); // Load GIF on

  deleteDatabase(); // For GUI simulation only (clear localStorage)

  /* First data upload (besides interval function) */
  const xhttp = new XMLHttpRequest();
  xhttp.responseType = 'json';
  xhttp.onreadystatechange = function() {
    if (this.status == 404) {
      i = 0; // Restart the database (from id=0)
    }
    if (this.readyState == 4 && this.status == 200) {
      const data = this.response; // Request the data
      displayData(data); // Display the received data
      saveDatabase(data); // Save in localStorage the received data (for GUI simulation only)
      i++;
      l++;
    }
  };
  xhttp.open('GET', `http://localhost:3131/weather/${i}`, true);
  xhttp.send();

  activePage('live'); // First page (Charts) after refresh

  checkId(); // Upload the device id

  /* The database isn't updated automaticly, can cause a stuck error */
  /* Normally the database is updated by chunks function */

  loader.classList.remove('show'); // Load GIF off
}

/** Display the active page
  * @param {id} id of the subpage
 **/
function activePage(id) {
  this.navPages = Array.from(document.querySelectorAll('.page'));
  window.location.hash = '#' + id; // Read the current location on the webpage
  for (const page of this.navPages) {
    if (page.id === id) {
      page.classList.add('active'); // Activate the choosen page
    } else {
      page.classList.remove('active'); // Inactivate the rest of the pages
    }
  }
}

/** Upload the device ID saved **/
function checkId() {
  const xhttp = new XMLHttpRequest();
  xhttp.responseType = 'json';
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const device = this.response; // Request device ID
      console.log('Device ID: ', device.name); // Logging the device ID

      const deviceIds = document.querySelectorAll('.device-id');
      /* Display the device ID in html (up top of the page) */
      deviceIds.forEach((deviceId) => {
        deviceId.innerHTML = device.name;
      });
    }
  };
  xhttp.open('GET', 'http://localhost:3131/device/0', true);
  xhttp.send();
}

/** Interval update data function **/
setInterval(function updateData() {
  const xhttp = new XMLHttpRequest();
  xhttp.responseType = 'json';
  xhttp.onreadystatechange = function() {
    if (this.status == 404) {
      i = 0; // Restart the database (from id=0)
    }
    if (this.readyState == 4 && this.status == 200) {
      const data = this.response; // Request the data
      displayData(data); // Display the received data
      saveDatabase(data); // Save in localStorage the received data (for GUI simulation only)
      i++; // Next data id
      l++; // Increase chart width (set to 50 points)
    }
  };
  xhttp.open('GET', `http://localhost:3131/weather/${i}`, true);
  xhttp.send();
}, 2000);

/** Displaying data
  * @param {data} data written in table
 **/
function displayData(data) {
  const today = Date.now() + 3600000; // update the time and date
  /* All data next to icons */
  const dataToDisplay = [
    `<i class='fas fa-thermometer-three-quarters'></i>${parseFloat(data[Object.keys(data)[1]])}°C`,
    `<i class='fas fa-smog'></i>${parseFloat(data[Object.keys(data)[2]])}%`,
    `<i class='fab fa-cloudscale'></i>${parseFloat(data[Object.keys(data)[3]])}hPa`,
    `<i class='fas fa-sun'></i>${parseFloat(data[Object.keys(data)[4]])}lux`,
    `<i class='fas fa-tint'></i>${parseFloat(data[Object.keys(data)[5]])}ml`,
    `<i class='fas fa-tint-slash'></i>${parseFloat(data[Object.keys(data)[6]])}ml`,
    `<i class='fas fa-thermometer-half'></i>${parseFloat(data[Object.keys(data)[7]])}°C`,
    `<i class='fas fa-thermometer'></i>${parseFloat(data[Object.keys(data)[8]])}mS/cm`];
  /* HTML elements to display data */
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
  /* Weather chart (Temperature, Humidity, Pressure, Light) */
  for (let i=0; i<=3; i++) {
    /* If there is more than 50 points on the chart, move the chart */
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
    /* Display data next to icon */
    const valueToDisplay = document.getElementById(dataToFind[i]);
    valueToDisplay.innerHTML = dataToDisplay[i];
  }
  /* Waterflow chart (Water In and Out) */
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
  /* Waterflow parameters chart (EC, Water temperature at Water Out) */
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

  /* Display date and Time */
  const d = new Date();
  let valueToDisplay = document.getElementById(dataToFind[9]);
  valueToDisplay.innerHTML = d.getDate()+'.'+d.getMonth()+'.'+d.getFullYear();
  valueToDisplay = document.getElementById(dataToFind[10]);
  if (d.getMinutes() < 10) {
    valueToDisplay.innerHTML = d.getHours() + ':0' + d.getMinutes();
  } else {
    valueToDisplay.innerHTML = d.getHours() + ':' + d.getMinutes();
  }

  /* Display Battery percentage */
  valueToDisplay = document.getElementById(dataToFind[8]);
  valueToDisplay.innerHTML = data.bat + '%'; // adding battery level value to html
  /* If battery level < 15% set colors to red */
  const batteryLevel = document.querySelector('.battery-level');
  if (data.bat <= 15) {
    // if battery level is lower than 15% than color the battery red
    batteryLevel.style.background = '#FE5757';
    valueToDisplay.style.color = '#FE5757';
  } else {
    batteryLevel.style.background = '#1b908f'; // Default battery color
    valueToDisplay.style.color = 'black';
  }
  batteryLevel.style.width = data.bat + '%'; // Width of battery level bar
}

/** Automaticly after update database save it to localStorage
  * @param {data} data written in table
 **/
function saveDatabase(data) {
  /* Check if there is in local storage item database if not then create it */
  const database = localStorage.getItem('Database') ? JSON.parse(localStorage.getItem('Database')) : [];
  database.push(data); // Push data into localStorage
  localStorage.setItem('Database', JSON.stringify(database));
}

/** Create database table after clicking on 'Database' button **/
function createDatabaseTable() {
  /* For GUI simulation only (fake time) */
  const d = new Date();
  let hour = d.getHours()-1;
  let minute = 0;

  const table = document.getElementById('database-table');
  table.innerHTML = ''; // Clear the table
  const databaseArray = JSON.parse(localStorage.getItem('Database')); // Save the database saved in local storage in a constant
  /* Check if something is saved in local storage */
  if (databaseArray != null) {
    /* For every data line */
    databaseArray.forEach((row) => {
      /* For GUI simulation only (fake time) */
      if (minute < 10) {
        minute = '0' + minute.toString();
      }
      if (minute >= 60) {
        hour ++;
        minute = '00';
      }
      /* Create the database table */
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
      table.innerHTML += data; // Dislay the database table
      minute ++; // For GUI simulation only
    });
  }
  /* When the table is created, remove the loader gif page */
  setTimeout(function() {
    const loader = document.querySelector('.loader');
    loader.classList.remove('show');
  }, 500);
}

/* Pages Navigation */
this.navLinks = Array.from(document.querySelectorAll('.main-nav button'));
/* Listener for nav buttons (on the left) */
for (const link of this.navLinks) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = link.getAttribute('href'); // Eead the href of each page
    const id = href.substring(1);// Remove the '#' from page href
    activePage(id); // Display the selected page

    /* If the nav clicked is database, display loader while the table is created */
    if (id === 'database') {
      const loader = document.querySelector('.loader');
      loader.classList.add('show'); // Loader GIF on
      /* Timeout needed to display the loader properly (stuck bug)*/
      setTimeout(function() {
        createDatabaseTable();
      }, 250);
    }

    /* If the nav clicked is settings */
    if (id === 'settings') {
      const wholePage = document.querySelector('body > div:not(.confirmation-popup)');
      const settingsList = document.querySelector('.settings-list');
      const settingsButtons = document.querySelectorAll('.settings-button');
      /* After chosing the setting, display only the popup, hide the rest */
      settingsButtons.forEach((settingButton) => {
        settingButton.addEventListener('click', function(e) {
          e.preventDefault();
          wholePage.style.display = 'none';
          settingsList.style.display = 'none';
          /* If it's calibrating, pass through the choose popup */
          /* Else display the confirmation popup */
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

/** Popup for calibration - choosing the calibrated device
  * @param {choosenSetting} choosenSetting of calibration module
 **/
function choosePopup(choosenSetting) {
  const wholePage = document.querySelector('body > div:not(.confirmation-popup)');
  const settingsList = document.querySelector('.settings-list');
  const selectedPopup = document.getElementById(`choose-${choosenSetting}`);
  const negativeAnswer = document.querySelector(`div[id='choose-${choosenSetting}'] .answer-no`);
  const selectedOptions = document.querySelectorAll(`div[id='choose-${choosenSetting}'] .option`);
  const infoDiv = document.querySelector('.sim-info');

  selectedPopup.style.display = 'block';

  /* Add back visibility to the rest of the page if canceled*/
  negativeAnswer.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    selectedPopup.style.display = 'none';
    wholePage.style.display = 'block';
    settingsList.style.display = 'block';
    infoDiv.style.display = 'none';
    return;
  }, {once: true});

  /* Pass to calibration popup with choosen setting */
  selectedOptions.forEach((selectedOption) => {
    selectedOption.addEventListener('click', function(e) {
      e.preventDefault();
      selectedPopup.style.display = 'none';
      calibrationPopup(this.id);
      infoDiv.style.display = 'none';
    });
  });
}

/** Popup for calibration - choosing the calibrated device
  * @param {choosenSetting} choosenSetting of calibration module
 **/
function calibrationPopup(choosenSetting) {
  let time; // Time interval needed to not multiplicate the function
  const wholePage = document.querySelector('body > div:not(.confirmation-popup)');
  const settingsList = document.querySelector('.settings-list');
  const selectedPopup = document.getElementById(`cal-${choosenSetting}`);
  const negativeAnswer = document.querySelector(`div[id='cal-${choosenSetting}'] .answer-no`);
  const positiveAnswer = document.querySelector(`div[id='cal-${choosenSetting}'] .answer-yes`);
  const input = document.querySelector(`div[id='cal-${choosenSetting}'] input`);
  const infoDiv = document.querySelector('.sim-info');

  /* Temporarly tests- displaying the analog reads from the selected calibrated device */
  // const analogRead = document.querySelector(`.analog-${choosenSetting}`);

  selectedPopup.style.display = 'block';

  negativeAnswer.addEventListener('click', function(event) {
    clearInterval(time);
    event.preventDefault();
    selectedPopup.style.display = 'none';
    const showPopup = document.querySelector('.choose-popup');
    showPopup.style.display = 'block';
    infoDiv.style.display = 'none';
    return;
  });

  /* Start the calibration function */
  positiveAnswer.addEventListener('click', function(e) {
    e.preventDefault();
    if (input.value.length > 0) {
      settingAction(this.id);
      selectedPopup.style.display = 'none';
      wholePage.style.display = 'block';
      settingsList.style.display = 'block';
      infoDiv.style.display = 'none';
    }
  }, {once: true});

  /* Temporarly tests - request for analog readings
  if (selectedPopup.style.display = 'block') {
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
  const wholePage = document.querySelector('body > div:not(.confirmation-popup)');
  const settingsList = document.querySelector('.settings-list');
  const selectedPopup = document.getElementById(`conf-${choosenSetting}`);
  const negativeAnswer = document.querySelector(`div[id='conf-${choosenSetting}'] .answer-no`);
  const positiveAnswer = document.querySelector(`div[id='conf-${choosenSetting}'] .answer-yes`);
  const infoDiv = document.querySelector('.sim-info');

  selectedPopup.style.display = 'block';
  /* If the answer is negative then display everything back (canceled) */
  negativeAnswer.addEventListener('click', function(e) {
    e.preventDefault();
    selectedPopup.style.display = 'none';
    wholePage.style.display = 'block';
    settingsList.style.display = 'block';
    infoDiv.style.display = 'none';
  }, {once: true});
  /* If positive answer then start the choosen calibration function */
  positiveAnswer.addEventListener('click', function(e) {
    e.preventDefault();
    settingAction(this.id); // Start the calibration
    selectedPopup.style.display = 'none';
    wholePage.style.display = 'block';
    settingsList.style.display = 'block';
    infoDiv.style.display = 'none';
  }, {once: true});
}

/** Actions for selected settings (delete, download database, restart, calibrate)
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
  /* For calibration the whole function is on the mainboard of the device.
     It's sending back informations about calibration progress
     and depending on it it's send also what is needed to do in next steps */
}

/** Send command to delete the database from SD card **/
function deleteDatabase() {
  /* Normally the command is send to the device
     clearing the database on SD card and localStorage
     and giving back the confirmation */

  /* For GUI simulation only */
  localStorage.clear(); // Deleting the localStorage
  console.log('Database: deleted!'); // Logging the confirmation
}

/** Send command to download the database from SD card (without deleting it!) **/
function downloadDatabase() {
  /* Normally the command is send to the device
     downloading the database from the SD card in .csv format file
     and giving back the confirmation */

  /* For GUI simulation only */
  console.log('Database: downloaded!');
}

/** Send command to restart the device **/
function restartDevice() {
  /* Normally the command is send to the device.
     After giving back the confirmation there is 5 sec countdown
     After turning back on the device, the webpage is automaticly refreshed */

  /* For GUI simulation only */
  console.log('Device: restarting!');
  setTimeout(function() {
    location.reload();
  }, 1000);
}

/** Close the "About the project" info (GUI simulation only) **/
function closeInfo() {
  const infoDiv = document.querySelector('.sim-info');
  infoDiv.style.display = 'none';
}
