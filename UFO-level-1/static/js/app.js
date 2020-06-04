// from data.js
var tableData = data;

// YOUR CODE HERE!

//Iterate over our data who is a object list
tableData.forEach( ufo => {
    // for each object add a row
    var row = d3.select("tbody").append("tr");
    // Get the values from the object
    Object.values(ufo).map( value => {
    //And print them inside a column  
        row.append("td").text(`${value}`);
    });
});


//var form = d3.select("#filters")
var button = d3.select("#filter-btn")

//form.on("submit", playfilter)
button.on("click", playfilter)

//Define handler
function playfilter() {
    d3.event.preventDefault();
    //Take the value from the input
    var inputvalue = d3.select("#datetime").property("value");
    //Delete the actual table
    d3.select("tbody").html("");

    //Create a new table 
    var filteredtable = tableData.filter( ufo => {
    //Get all the objects who match the given value
    return ufo.datetime == inputvalue; 
    })
    //Iterate through the objects
    
    .forEach( sighting => {
        //add a row for each object
        var row = d3.select("tbody").append("tr");
        //Print all values adding a html column within the created row
        Object.values(sighting).map( value => {   
        row.append("td").text(`${value}`);
        });
    }); 

    if (typeof filteredtable == 'undefined' || filteredtable < 0) {
        d3.select("tbody").append("tr").append("td").text("Sorry there's no matches for provided date") ;
    };
       

}
