// from data.js
var tableData = data;

// Get a reference for the table body
var tbody = d3.select("tbody");

// Function for alien sighting data
function alienData(tableData) {

    // Clear text from tbody
    tbody.text("")

    // Loop through table data and log each alien sighting
    data.forEach((alienSighting) => {

        // append a row for each alien sighting
        var row = tbody.append("tr");

        // use object entries to console log each alien sighting
        Object.entries(alienSighting).forEach(([key, value]) => {
            // console.log(key, value);

            // Append cells per alien sighting (Date, City, State, Country, Shape, Duration, Comments)
            var cell = tbody.append("td");

            // Update each cells text with alien sighting info
            cell.text(value);
        });
    });
};

alienData(tableData);
 
// Select the input field and filter button
var dateInput = d3.select("#datetime");
var filter = d3.select("#filter-btn");

 // Create function for date handler
function dateHandler() {

    d3.event.preventDefault();

    console.log(dateInput.property("value"));

    // Create table showing filtered data
    var filterTable = tableData.filter(alienSighting => alienSighting.datetime === dateInput.property("value"));

    // Display the filtered table
    alienData(filterTable);
};

dateInput.on("change", dateHandler);