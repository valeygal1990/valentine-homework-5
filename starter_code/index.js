$(document).ready(function(){


//User enters a city name in the form

//event input city name

//and hits the submit button.

//User clicks on submit or presses enter on their keyboard

//The entire webpage refreshes

//Background image changes to the image of the corresponding city.







$('form').submit(changeBackground);

function changeBackground() {

	var cityName = $.'trim'($('#city-type').val().toUpperCase());
    // The stuff I want to do when my form submits goes here
    // For Austin background
    if (cityName == 'Austin'||cityName=='ATX'){
    	event.preventDefault();
    	$('body').removeClass();
    	$('body').addClass('austin');
    	console.log ('Austin Background');
    	console.log (cityName);
    	//for LA background
    } else if (cityName == 'Los Angeles'||cityName=='LA'||cityName=='LAX'){
    	event.preventDefault();
    	$('body').removeClass();
    	$('body').addClass('la');
    	console.log ('LA Background');
    	console.log (cityName);
    	//for NYC background
    } else if (cityName == 'New York'||cityName=='NYC'||cityName=='New York City'){
    	event.preventDefault();
    	$('body').removeClass();
    	$('body').addClass('nyc');
    	console.log ('NYC Background');
		console.log (cityName);
		//for SF background
    } else if (cityName == 'San Francisco'||cityName=='SF'||cityName=='Bay Area'){
    	event.preventDefault();
    	$('body').removeClass();
    	$('body').addClass('sf');
    	console.log ('SF Background');
    	console.log (cityName);
    	//for Sydney Background
    } else if (cityName == 'Sydney'||cityName=='SYD'){
    	event.preventDefault();
    	$('body').removeClass();
    	$('body').addClass('sydney');
    	console.log ('Sydney Background');
    	console.log (cityName);
    	//for none
    	} else {
    	event.preventDefault();
    	$('body').removeClass();
    	console.log ('Citipix_skyline');
    	console.log (cityName);
    }
}









});