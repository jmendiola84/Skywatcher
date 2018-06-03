// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $datetimeInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $cleanBtn = document.querySelector("#clean");


// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);
$cleanBtn.addEventListener("click", handleCleanButtonClick);

// Set filteredUFO to data initially
var filteredUFO = dataSet;
var OrgDataSet = dataSet;


// renderTable renders the filteredUFO to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredUFO.length; i++) {
    // Get get the current UFO object and its fields
    var ufo = filteredUFO[i];
    var fields = Object.keys(ufo);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the UFO object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufo[field];
	  if (field === "durationMinutes")
	  {$cell.style.display="none";} 
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDatetime = $datetimeInput.value;
  var filterCity = $cityInput.value.trim().toLowerCase();
  var filterState = $stateInput.value.trim().toLowerCase();
  var filterCountry = $countryInput.value.trim().toLowerCase();
  var filterShape = $shapeInput.value.trim().toLowerCase();
  var prv_flg = 0;

  dataSet = OrgDataSet;
  
  if(filterDatetime) {
  // Set filteredUFO to an array of all addresses whose "datetime" matches the filter
  prv_flg ++;
  filteredUFO = dataSet.filter(function(ufo) {
    var UFODatetime = ufo.datetime.slice(-4);
    // If true, add the address to the filteredUFO, otherwise don't add it to filteredUFO
  return UFODatetime === filterDatetime;})}
  
  
  if(filterCity) {
  // Set filteredUFO to an array of all addresses whose "datetime" matches the filter
	if (prv_flg > 0) {
	  dataSet = filteredUFO;
	}
   	prv_flg ++;
   filteredUFO = dataSet.filter(function(ufo) {
    var UFOCity = ufo.city.toLowerCase();


    // If true, add the address to the filteredUFO, otherwise don't add it to filteredUFO
  return UFOCity === filterCity;})}
  
  
  
  if(filterState) {
	  
	  if (prv_flg > 0) {
	  dataSet = filteredUFO;
	  }
	  prv_flg ++;
  // Set filteredUFO to an array of all addresses whose "datetime" matches the filter
  filteredUFO = dataSet.filter(function(ufo) {
    var UFOState = ufo.state.toLowerCase();


    // If true, add the address to the filteredUFO, otherwise don't add it to filteredUFO
  return UFOState === filterState;})}
  
    if(filterCountry) {
		if (prv_flg > 0) {
	  dataSet = filteredUFO;
	}
	prv_flg ++;
  // Set filteredUFO to an array of all addresses whose "datetime" matches the filter
  filteredUFO = dataSet.filter(function(ufo) {
    var UFOCountry = ufo.country.toLowerCase();


    // If true, add the address to the filteredUFO, otherwise don't add it to filteredUFO
  return UFOCountry === filterCountry;})}
  
  if(filterShape) {
	  
	  if (prv_flg > 0) {
	  dataSet = filteredUFO;
	}
	prv_flg ++;
  // Set filteredUFO to an array of all addresses whose "datetime" matches the filter
  filteredUFO = dataSet.filter(function(ufo) {
    var UFOShape = ufo.shape.toLowerCase();


    // If true, add the address to the filteredUFO, otherwise don't add it to filteredUFO
  return UFOShape === filterShape;})}

  
  renderTable();
}

function handleCleanButtonClick() {
	
	filteredUFO = OrgDataSet;
	dataSet = OrgDataSet;
	
	$datetimeInput.value = "";
	$cityInput.value = "";
	$stateInput.value = "";
	$countryInput.value = "";
	$shapeInput.value = "";
	
	renderTable();
}

// Render the table for the first time on page load
renderTable();
