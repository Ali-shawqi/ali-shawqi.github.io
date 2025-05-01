function fetchGradeData() {
	//This function will query the PostgreSQL database and return grade data
	console.log("Fetching Grade data...");
	//create a new request for HTTP data
	var xhr = new XMLHttpRequest();
	//This is the address on the machine we are asking for data
	let apiRoute = "/api/grades";
	// When the request changes status, we run this anonymous function
	xhr.onreadystatechange = function (){
		let results;
		// Check if we're done
		if (xhr.readyState === xhr.DONE) {
			// Check if we're successful
			if(xhr.status !== 200){
				console.error(`Could not get grades.
				Status: ${xhr.status}`);
			}
			// And then call the function to update the HTML with our data
		populateGradebook(JSON.parse(xhr.responseText));
		}
	}.bind(this);
	xhr.open("get",apiRoute,true);
	xhr.send();
	}

function populateGradebook(data) {
	// This function will take the fetched grade grade data and populate the table
	console.log("populating gradebook with data:", data);
	let tableElm = document.getElementById("gradebook"); // Get the gradebook data element
	data.forEach(function (assignment) { // For each row of data we're passed in 
		let row = document.createElement('tr'); // Create a table row element

		let nameCell = document.createElement('td'); // The first column's table data will be the name
		nameCell.appendChild(document.createTextNode(assignment.last_name + ", " + assignment.first_name));

		let gradeCell = document.createElement('td'); // The second column will be the grade
		gradeCell.appendChild(document.createTextNode(assignment.total_grade));

		// Add the table data column to the table row
		row.appendChild(nameCell);
		row.appendChild(gradeCell);
		// Add the row the table itself to make the data visable
		tableElm.appendChild(row);
	});
}

const gradeData = fetchGradeData();


