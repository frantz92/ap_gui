/* eslint-disable no-invalid-this */

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

/* Timer */
// Every 5 sec upload data from device
setInterval(function updateData() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const data = this.responseText; // request the data string
      displayData(data); // start function of displaying the recived data
    }
  };
  xhttp.open('GET', '/data', true);
  xhttp.send();
}, 5000);

/** Displaying
  * @param {data} data written in table
*/
function displayData(data) {
  const today = Date.now() + 7200000; // update the time and date
  data = data.split(','); // splitting the data
  const dataToDisplay = [
    `<i class='fas fa-thermometer-three-quarters'></i>${parseFloat(data[2])}°C`,
    `<i class='fas fa-smog'></i>${parseFloat(data[3])}%`,
    `<i class='fab fa-cloudscale'></i>${parseFloat(data[4])}hPa`,
    `<i class='fas fa-sun'></i>${parseFloat(data[5])}lux`,
    `<i class='fas fa-tint'></i>${parseFloat(data[6])}ml`,
    `<i class='fas fa-tint-slash'></i>${parseFloat(data[7])}ml`,
    `<i class='fas fa-thermometer-half'></i>${parseFloat(data[8])}°C`,
    `<i class='fas fa-thermometer'></i>${parseFloat(data[9])}mS/cm`];
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
    // data length 3h
    if (chartWeather.series[i].data.length > 8640) {
      chartWeather.series[i].addPoint([
        today,
        parseFloat(data[i+2])],
      true,
      true,
      true,
      );
    } else {
      chartWeather.series[i].addPoint([
        today,
        parseFloat(data[i+2])],
      true,
      false,
      true,
      );
    }
    const valueToDisplay = document.getElementById(dataToFind[i]);
    valueToDisplay.innerHTML = dataToDisplay[i];
  }
  // Waterflow chart (Water In and Out)
  for (let i=0; i<=1; i++) {
    if (chartWaterFlow.series[i].data.length > 8640) {
      chartWaterFlow.series[i].addPoint([
        today,
        parseFloat(data[i+6])],
      true,
      true,
      true,
      );
    } else {
      chartWaterFlow.series[i].addPoint([
        today,
        parseFloat(data[i+6])],
      true,
      false,
      true,
      );
    }
    const valueToDisplay = document.getElementById(dataToFind[i+4]);
    valueToDisplay.innerHTML = dataToDisplay[i+4];
  }
  // Water parameters chart (EC, Water temperature)
  for (let i=0; i<=1; i++) {
    if (chartWaterParams.series[i].data.length > 8640) {
      chartWaterParams.series[i].addPoint([
        today,
        parseFloat(data[i+8])],
      true,
      true,
      true,
      );
    } else {
      chartWaterParams.series[i].addPoint([
        today,
        parseFloat(data[i+8])],
      true,
      false,
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
  valueToDisplay.innerHTML = parseFloat(data[10]) + '%';
  if (parseInt(data[10]) <= 15) {
    // if battery level is lower than 15% than color the battery red
    valueToDisplay.style.color = 'red';
  } else {
    valueToDisplay.style.color = 'black'; // default battery color black
  }
  valueToDisplay = document.querySelector('.'+dataToFind[8]);
  valueToDisplay.style.width = parseFloat(data[10]);
}

// Upload database every 1 minute (buffer.csv)
setInterval(function updateDatabase() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const data = this.responseText; // request reponse (data string)
      // check if data is not empty
      if (data != '') {
        saveDatabase(data); // start saving database
      }
    }
  };
  xhttp.open('GET', '/database', true);
  xhttp.send();
}, 60000);
/** Automaticly after update database save it to localStorage
  * @param {data} data written in table
*/
function saveDatabase(data) {
  // check if there is in local storage item database if not then create it
  const database = localStorage.getItem('Database') ?
   JSON.parse(localStorage.getItem('Database')) : [];

  const databaseArray = data.split('\n'); // split data in rows
  for (dataRow of databaseArray) {
    // check if data isn't empty
    if (dataRow != '') {
      database.push(dataRow); // save row by row in local storage
      localStorage.setItem('Database', JSON.stringify(database));
    }
  }
  deleteBuffer(); // start deleting the buffer.csv file in SD card
}
/** Automaticly after saving databse send command
  to delete buffer.csv from the SD Card
**/
function deleteBuffer() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const confirmation = this.responseText; // request response
      console.log(confirmation);
    }
  };
  xhttp.open('GET', '/delete_buffer', true);
  xhttp.send();
}
/** Create database table after clicking on 'Database' button **/
function createDatabaseTable() {
  const table = document.getElementById('database-table');
  table.innerHTML = ''; // clear the table
  // save in constant the database saved in local storage
  const databaseArray = JSON.parse(localStorage.getItem('Database'));
  // check if something is saved in local storage
  if (databaseArray != null) {
    databaseArray.forEach((row) => {
      const dataRow = row.split(','); // split every data seperately
      dataRow[1] = dataRow[1].slice(0, -3); // delete the seconds in timeout
      // check if time is correctly saved
      if (dataRow[1] != undefined) {
        const data = `<tr>
                        <td>${dataRow[1]}</td>
                        <td>${dataRow[2]}</td>
                        <td>${dataRow[3]}</td>
                        <td>${dataRow[4]}</td>
                        <td>${dataRow[5]}</td>
                        <td>${dataRow[6]}</td>
                        <td>${dataRow[7]}</td>
                        <td>${dataRow[8]}</td>
                        <td>${dataRow[9]}</td>
                      </tr>`;
        table.innerHTML += data; // add data to each cell
      }
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
        }, {once: true});
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
  // if off, wait 5 seconds, if on update automaticly after refreshing the page
  // updateData();
  activePage('live'); // First page (Charts) after refresh
  checkId(); // upload the device id
  // off, 60seconds the database is uploded/on automaticly(can cause bugs!)
  // updateDatabase();
  loader.classList.remove('show');
}

/** Upload the device ID saved on SD card
**/
function checkId() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const deviceName = this.responseText; // request device ID from SD Card
      console.log('Device ID: ', deviceName); // logging the device ID
      const deviceIds = document.querySelectorAll('.device-id');
      deviceIds.forEach((deviceId) => {
        // display the device ID in html (up top of the page)
        deviceId.innerHTML = deviceName;
      });
    }
  };
  xhttp.open('GET', '/id', true);
  xhttp.send();
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
  /* const wholePage =
    document.querySelector('body > div:not(.confirmation-popup)'); */
  /* const settingsList =  document.querySelector('.settings-list') */
  const selectedPopup = document.getElementById(`cal-${choosenSetting}`);
  const negativeAnswer =
    document.querySelector(`div[id='cal-${choosenSetting}'] .answer-no`);
  /* const positiveAnswer =
    document.querySelector(`div[id='cal-${choosenSetting}'] .answer-yes`); */
  /* const input =
    document.querySelector(`div[id='cal-${choosenSetting}'] input`); */

  // Temporarly displaying the analog reads from the selected calibrated device
  const analogRead = document.querySelector(`.analog-${choosenSetting}`);

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
  /* positiveAnswer.addEventListener('click', function(event){
    event.preventDefault();
    if(input.value.length > 0) {
      settingAction(this.id);
      selectedPopup.style.display = 'none';
      wholePage.style.display = 'block';
      settingsList.style.display = 'block';
    }
  }, {once: true}); */

  // Temporarly - request for analog readings
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
  }
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
  const xhttp = new XMLHttpRequest();
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
  xhttp.send();
}

/** Send command to download the database from SD card (without deleting it!)**/
function downloadDatabase() {
  const xhttp = new XMLHttpRequest();
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
  xhttp.send();
}

/** Send command to restart the device **/
function restartDevice() {
  const xhttp = new XMLHttpRequest();
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
  xhttp.send();
}
