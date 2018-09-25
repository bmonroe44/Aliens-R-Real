// from data.js
var tableData = data;

// Get a reference for the table body
var tbody = d3.select("tbody");

// Loop through table data and log each alien sighting
tableData.forEach(function(alienSighting) {
    console.log(alienSighting);

    // append a row for each alien sighting
    var row = tbody.append("tr");
    
    // use object entries to console log each alien sighting
    Object.entries(alienSighting).forEach(function([key, value]) {
        console.log(key, value);

    // Append cells per alien sighting (Date, City, State, Country, Shape, Duration, Comments)
    var cell = tbody.append("td");
    
    // Update each cells text with alien sighting info
    cell.text(value);
    });
});

