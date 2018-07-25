var students = document.getElementsByClassName("studentInfo");

var teamButtons = document.querySelectorAll("#team a");


function unHideStudents(){

	var hiddenStudents = document.getElementsByClassName("hide");

	for(var i = hiddenStudents.length-1; i >= 0; --i) {
		var hiddenStudent = hiddenStudents[i];
		hiddenStudent.classList.remove("hide");
	}


	for(var i = teamButtons.length-1; i >= 0; --i) {
		var teamButton = teamButtons[i];
		teamButton.classList.remove("active");
	}

}


var clearButton = document.getElementById("clear-all");
clearButton.addEventListener("click", clearClick, false);

function clearClick(event) {
	
	event.preventDefault();
	unHideStudents();

}

for(var i = 0; i < teamButtons.length; ++i) {

	var teamButton = teamButtons[i];
	teamButton.addEventListener("click", teamClick, false);

	function teamClick(event){

		event.preventDefault();

		var teamButton = this.id;
		var teamNumber = teamButton.charAt(5);

		unHideStudents();

		this.classList.add("active");

		for(var i = 0; i < students.length; ++i) {
			var student = students[i];
			var teamOfStudent = student.dataset.team;

			if (teamOfStudent !== teamNumber) {
				student.classList.add("hide");
			}
		}
	}
}

