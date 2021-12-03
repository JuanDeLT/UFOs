// // import the data from data.js
// const tableData = data;

// // Reference the HTML tables using d3
// var tbody = d3.select("tbody");

// //looped through each object in the array, appended a row to the HTML table, added each value from the object into a cell
// function buildTable(data) {
//     tbody.html(""); //clear the data
//     data.forEach((dataRow) => { // loop through each object in the data and append a row and cells for each value in the row
//         let row = tbody.append("tr"); //find <tbody> tag and add a table row (tr)
//         Object.values(dataRow).forEach((val) => { //loop through each field in the dataRow and add each value as a table cell (td)
//             let cell = row.append("td")
//             cell.text(val);
//         });
//     });
// }

// // making the click function
// function handleClick() {
//     // telling D3 to look for the #datetime id in the HTML tags. chaining it with 
//     //.property("value") tells D3 to also grab that information and hold it in the 'date' variable
//     let date = d3.select("#datetime").property("value"); // grab the datetime value from the filter
//     let filteredData = tableData;
//     if (date) { // check to see if a date was entered and filter the data using that date
//         filteredData = filteredData.filter(row => row.datetime === date);
//     }; // show only the rows where the date is equal to the date filter we created above
//     buildTable(filteredData); // rebuild the table using the filtered data, if not date was entered, then it will just be the original tableData
// };

// d3.selectAll("#filter-btn").on("click", handleClick); //#filter-btn is the selector string
// // by adding .on('click', handleClick); we're telling D3 to execute our handleClick() function when the button with an id of filter-btn is clicked

// buildTable(tableData);