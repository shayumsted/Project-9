// U78784426
// Write a function that will initiate the page
function initializePage() {const dataContainer = d3.select("#data-container");

// Sample data points
    const data = [10, 20, 30, 40, 50];

// Create the div elements as data points
    const dataPoints = dataContainer.selectAll(".data-point")
        .data(data)
        .enter()
        .append('div')
        .classed("data-point", true)
        .text(d => d);

