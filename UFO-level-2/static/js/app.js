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


var button = d3.select("#filter-btn")
button.on("click", playfilter)



//Define handler
function playfilter() {

     //Prevent from refresh
     d3.event.preventDefault();

    //Take each value from filter input
    var datevalue = d3.select("#datetime").property("value");
    var cityvalue = d3.select("#city").property("value");
    var statevalue = d3.select("#state").property("value");
    var countryvalue = d3.select("#country").property("value");
    var shapevalue = d3.select("#shape").property("value");

    //Delete the actual table
    d3.select("tbody").html("");


    //Define a global variable so the next ifs can work
   var filteredtable = tableData


    // If a date is provided filter it by 
   if (datevalue !== "") { 
        console.log("paso por el if de date")
        filteredtable = filteredtable.filter( sighting => {
            return sighting.datetime == datevalue;
        });   
   }
   // If a city is provided filter it by 
   if (cityvalue !== "") {
        console.log("paso por el if de city")
        filteredtable = filteredtable.filter(sighting => {
           return sighting.city == cityvalue;

       });
   }

    // If a state is provided filter it by 
    if (statevalue !== "") {
        console.log("paso por el if de state")
        filteredtable = filteredtable.filter(sighting => {
           return sighting.state == statevalue;

       });
   }

    // If a country is provided filter it by 
    if (countryvalue !== "") {
        console.log("paso por el if de country")
        filteredtable = filteredtable.filter(sighting => {
           return sighting.country == countryvalue;

       });
   }

    // If a shape is provided filter it by 
    if (shapevalue !== "") {
        console.log("paso por el if de shape")
        filteredtable = filteredtable.filter(sighting => {
           return sighting.shape == shapevalue;

       });
   }


    
   //Print results
    filteredtable.forEach( sighting => {
        //add a row for each object
        var row = d3.select("tbody").append("tr");
        //Print all values adding a html column within the created row
        Object.values(sighting).map( value => {   
        row.append("td").text(`${value}`);
        });
    }); 

}
        



 
