// TODO: load the dataset 
let attractions;
fetch('attractions.json')
  .then(response => response.json())
  .then(data => {
		attractions = data;
        attractions.sort((a, b) => b.Visitors - a.Visitors);  //sort desc
    });
    


function filterData(category) {
    /* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/

    let filteredAttractions = attractions.filter(function (el) {
        return el.Category === category;
    });
    console.log(filteredAttractions);

    let top5 = filteredAttractions.slice(0,5)
    console.log(top5);  //debugging
    renderBarChart(top5);
     
}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category

let selectElem = document.querySelector('#attraction-category');
selectElem.addEventListener('change', (event) => {
    let category = event.target.value;
    console.log(category);  //debugging
    filterData(category);
  });