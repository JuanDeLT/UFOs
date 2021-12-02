// import the data from data.js
const tableData = data;

// Reference the HTML tables using d3
var tbody = d3.select("tbody");

//looped through each object in the array, appended a row to the HTML table, added each value from the object into a cell
function buildTable(data) {
    tbody.html(""); //clear the data
    data.forEach((dataRow) => { // loop through each object in the data and append a row and cells for each value in the row
        let row = tbody.append("tr"); //find <tbody> tag and add a table row (tr)
        Object.values(dataRow).forEach((val) => { //loop through each field in the dataRow and add each value as a table cell (td)
            let cell = row.append("td")
            cell.text(val);
        });
    });
}