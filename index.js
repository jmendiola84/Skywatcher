// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $results = document.querySelector("#results");
var $datetimeInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $cleanBtn = document.querySelector("#clean");
var $page1Btn = document.querySelector("#page-1");
var $page2Btn = document.querySelector("#page-2");
var $page3Btn = document.querySelector("#page-3");
var $page4Btn = document.querySelector("#page-4");
var $page5Btn = document.querySelector("#page-5");
var $page6Btn = document.querySelector("#page-6");
var $page7Btn = document.querySelector("#page-7");
var $page8Btn = document.querySelector("#page-8");
var $page9Btn = document.querySelector("#page-9");
var $page10Btn = document.querySelector("#page-10");
var $page11Btn = document.querySelector("#page-11");
var $page12Btn = document.querySelector("#page-12");
var $page13Btn = document.querySelector("#page-13");
var $page14Btn = document.querySelector("#page-14");
var $page15Btn = document.querySelector("#page-15");
var $page16Btn = document.querySelector("#page-16");
var $page17Btn = document.querySelector("#page-17");
var $page18Btn = document.querySelector("#page-18");
var $page19Btn = document.querySelector("#page-19");
var $page20Btn = document.querySelector("#page-20");


// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);
$cleanBtn.addEventListener("click", handleCleanButtonClick);
$page1Btn.addEventListener("click", handlePage1ButtonClick);
$page2Btn.addEventListener("click", handlePage2ButtonClick);
$page3Btn.addEventListener("click", handlePage3ButtonClick);
$page4Btn.addEventListener("click", handlePage4ButtonClick);
$page5Btn.addEventListener("click", handlePage5ButtonClick);
$page6Btn.addEventListener("click", handlePage6ButtonClick);
$page7Btn.addEventListener("click", handlePage7ButtonClick);
$page8Btn.addEventListener("click", handlePage8ButtonClick);
$page9Btn.addEventListener("click", handlePage9ButtonClick);
$page10Btn.addEventListener("click", handlePage10ButtonClick);
$page11Btn.addEventListener("click", handlePage11ButtonClick);
$page12Btn.addEventListener("click", handlePage12ButtonClick);
$page13Btn.addEventListener("click", handlePage13ButtonClick);
$page14Btn.addEventListener("click", handlePage14ButtonClick);
$page15Btn.addEventListener("click", handlePage15ButtonClick);
$page16Btn.addEventListener("click", handlePage16ButtonClick);
$page17Btn.addEventListener("click", handlePage17ButtonClick);
$page18Btn.addEventListener("click", handlePage18ButtonClick);
$page19Btn.addEventListener("click", handlePage19ButtonClick);
$page20Btn.addEventListener("click", handlePage20ButtonClick);

// Set filteredUFO to data initially
var filteredUFO = dataSet;
var OrgDataSet = dataSet;


// renderTable renders the filteredUFO to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i <= 50; i++) {
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

	//for (var i = 50; i <= filteredUFO.length; i++) {
	//filteredUFO[i].style.display="none";}
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
  
  $page2Btn.style.display="block";
  $page3Btn.style.display="block";
  $page4Btn.style.display="block";
  $page5Btn.style.display="block";
  $page6Btn.style.display="block";
  $page7Btn.style.display="block";
  $page8Btn.style.display="block";
  $page9Btn.style.display="block";	
  $page10Btn.style.display="block";
  $page11Btn.style.display="block";
  $page12Btn.style.display="block";
  $page13Btn.style.display="block";
  $page14Btn.style.display="block";
  $page15Btn.style.display="block";
  $page16Btn.style.display="block";
  $page17Btn.style.display="block";
  $page18Btn.style.display="block";
  $page19Btn.style.display="block";
  $page20Btn.style.display="block";
	
  
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
	
if(filteredUFO.length == 0){
$results.innerHTML = "<p>No results found</p>";}
  
	
   if (filteredUFO.length < 1900)
	{$page20Btn.style.display="none";
	 if (filteredUFO.length < 1800){
		$page19Btn.style.display="none";
		if (filteredUFO.length < 1700){
			$page18Btn.style.display="none";
			if (filteredUFO.length < 1600){
				$page17Btn.style.display="none";
				if (filteredUFO.length < 1500){
					$page16Btn.style.display="none";
					if (filteredUFO.length < 1400)
						{$page15Btn.style.display="none";
						if (filteredUFO.length < 1300){
							$page14Btn.style.display="none";
							if (filteredUFO.length < 1200){
								$page13Btn.style.display="none";
								if (filteredUFO.length < 1100){
									$page12Btn.style.display="none";
									if (filteredUFO.length < 1000){
										$page11Btn.style.display="none";
										if (filteredUFO.length < 900)
											{$page10Btn.style.display="none";
											if (filteredUFO.length < 800){
												$page9Btn.style.display="none";
												if (filteredUFO.length < 700){
													$page8Btn.style.display="none";
													if (filteredUFO.length < 600){
														$page7Btn.style.display="none";
														if (filteredUFO.length < 500){
															$page6Btn.style.display="none";
															if (filteredUFO.length < 400){
																$page5Btn.style.display="none";
																if (filteredUFO.length < 300){
																	$page4Btn.style.display="none";
																	if (filteredUFO.length < 200){
																		$page3Btn.style.display="none";
																		if (filteredUFO.length < 100){
																			$page2Btn.style.display="none";
																			
	}}}}}}}}}}}}}}}}}}}
	

   
   
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
	
	$page2Btn.style.display="block";
	$page3Btn.style.display="block";
	$page4Btn.style.display="block";
	$page5Btn.style.display="block";
	$page6Btn.style.display="block";
	$page7Btn.style.display="block";
	$page8Btn.style.display="block";
	$page9Btn.style.display="block";	
	$page10Btn.style.display="block";
	$page11Btn.style.display="block";
	$page12Btn.style.display="block";
	$page13Btn.style.display="block";
	$page14Btn.style.display="block";
	$page15Btn.style.display="block";
	$page16Btn.style.display="block";
	$page17Btn.style.display="block";
	$page18Btn.style.display="block";
	$page19Btn.style.display="block";
	$page20Btn.style.display="block";
	
	renderTable();
}

function handlePageButtonClick(begrow,endrow) {
	$tbody.innerHTML = "";
	for (var i = begrow; i <= endrow; i++) {
    // Get get the current UFO object and its fields
    var ufo = filteredUFO[i];
    var fields = Object.keys(ufo);
    // Create a new row in the tbody, set the index to be i + startingIndex
	var $row = $tbody.insertRow(i-begrow);
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


function handlePage1ButtonClick() {
	renderTable();
	
}

function handlePage2ButtonClick() {
	handlePageButtonClick(100,199);
	
}

function handlePage3ButtonClick() {
	handlePageButtonClick(200,299);
 
}

function handlePage4ButtonClick() {
	handlePageButtonClick(300,399);
 
}

function handlePage5ButtonClick() {
	handlePageButtonClick(400,499);

}

function handlePage6ButtonClick() {
	handlePageButtonClick(500,599);

}

function handlePage7ButtonClick() {
	handlePageButtonClick(600,699);

}

function handlePage8ButtonClick() {
	handlePageButtonClick(700,799);

}

function handlePage9ButtonClick() {
	handlePageButtonClick(800,899);

}

function handlePage10ButtonClick() {
	handlePageButtonClick(900,999);

}

function handlePage11ButtonClick() {
	handlePageButtonClick(1000,1099);

}

function handlePage12ButtonClick() {
	handlePageButtonClick(1100,1199);

}

function handlePage13ButtonClick() {
	handlePageButtonClick(1200,1299);

}

function handlePage14ButtonClick() {
	handlePageButtonClick(1300,1399);

}

function handlePage15ButtonClick() {
	handlePageButtonClick(1400,1499);

}

function handlePage16ButtonClick() {
	handlePageButtonClick(1500,1599);

} 

function handlePage17ButtonClick() {
	handlePageButtonClick(1600,1699);

}

function handlePage18ButtonClick() {
	handlePageButtonClick(1700,1799);

}

function handlePage19ButtonClick() {
	handlePageButtonClick(1800,1899);

}

function handlePage20ButtonClick() {
	handlePageButtonClick(1900,1999);

}


// Render the table for the first time on page load
renderTable();
