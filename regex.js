(function(){

var problem = {
	title: "Spam man",
	description: "Something funny...",
	task: "Match all the strings that are email addresses.",
	examples: {
				"thomas@example.com" : true,
				"Notanemail@example" : false,
				"ragerdragonman1337@9gf8ghj3.net" : true
			  },
	tests: 	{
				"test@example.com" : true,
				"aaaaaaaaaaaaaa"   : false,
				"testcases@r"	   : false,
				"hello.com"		   : false,
				"jabba@tatooine.hutt" : true,
				"harry_potter@"		: false,
				"slytherin@hogwarts." : false,
			},
}

function loadProblem(problem){
	var eid = document.getElementById
	// Set problem description elements
	eid("problem_title").value = problem.title
	eid("problem_description").value = problem.description
	eid("problem_task").value = problem.task
	// Set the examples (table?)
}

function addTestResult(test, expected, results){
	var table = document.getElementById("test_results")
	var row = table.insertRow(-1)
	
	row.insertCell(0).innerHTML = test
	row.insertCell(1).innerHTML = expected
	row.insertCell(2).innerHTML = results
}

function evaluateRegex(){
	var regex = document.getElementById("regex").value
	document.getElementById("test_table").hidden = false
	document.getElementById("test_results").innerHTML = ""
	
	// Set the tests
	Object.keys(problem.tests).forEach(function(key){
		var matched = (key.search("^"+regex+"$") == 0 ? true : false)
		addTestResult(key, problem.tests[key], matched)
	})
}
window.evaluateRegex = evaluateRegex

})()