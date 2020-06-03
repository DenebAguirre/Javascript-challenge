// from data.js
var tableData = data;

// YOUR CODE HERE!

//Iterate over our data who is a object list
tableData.forEach( ufo => {
    // for each object add a row
    var row = d3.select("tbody").append("tr");
    // Get the values from the object
    Object.values(ufo).map( x => {
    //And print them inside a column  
        row.append("td").text(`${x}`);
        });
    });


var form = d3.select("#filters")
var button = d3.select("#filter-btn")

form.on("submit", playfilter)
button.on("click", playfilter)

function playfilter() {
    d3.event.preventDefault();
    var inputtag = d3.select("#datetime")
    var inputvalue = inputtag.property("value")
    
    filteredtable = tableData.filter( x => {
       if (x.datetime == inputvalue) {
            d3.select("tbody").html("");
            d3.select("tbody").html("").append("tr").append("td").text("Si hay");
            console.log(x);
       } else {
        d3.select("tbody").html("");
        d3.select("tbody").append("tr").append("td").text("Lo siento no hay");
   }
    })
}
