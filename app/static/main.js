$(document).ready(function(){

var test_cases = [
	"whatever@a.domain.example.com",
	"name@example.com",
	"jerry-dragon_slayer123@dragonquest.example.net",
	"bob.marley@cool-music.example.org",
]

var results = $("#results")
results.text(test_cases.join("\n"))

$("#go-button").on("click", function(e){
	e.preventDefault()

	var regex_text = $("#regex").val()
	var regex = RegExp(regex_text)
	
	
})

})
