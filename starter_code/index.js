$(document).ready(function())


//User enters a city name in the form

//event input city name

//and hits the submit button.

//User clicks on submit or presses enter on their keyboard

//The entire webpage refreshes

//Background image changes to the image of the corresponding city.

var cityName = "#city-type"

$('#city-type').submit(changeBackground);

function changeBackground() {
    // The stuff I want to do when my form submits goes here
    if (cityName == "Austin"){
    	event.preventDefault();
    	$('body').removeClass();
    	$('body').css('Background','.austin');
    	$('#cityName').html('Austin');
    	console.log ('Austin Background');

    } else if (cityName == 'Los Angeles'){
    	event.preventDefault();
    	$('body').removeClass();
    	$('body').css('Background','.la');
    	$('#cityName').html('Los Angeles');
    	console.log ('LA Background');

    } else if (cityName == 'New York'){
    	event.preventDefault();
    	$('body').removeClass();
    	$('body').css('Background','.nyc');
    	$('#cityName').html('New York');
    	console.log ('NYC Background');

    } else if (cityName == 'San Francisco'){
    	event.preventDefault();
    	$('body').removeClass();
    	$('body').css('Background','.sf');
    	$('#cityName').html('San Francisco');
    	console.log ('SF Background');

    } else if (cityName == 'Sydney'){
    	event.preventDefault();
    	$('body').removeClass();
    	$('body').css('Background','.sydney');
    	$('#cityName').html('Sydney');
    	console.log ('Sydney Background');

    } else if (cityName != 'Austin' 'Los Angeles' 'New York' 'San Francisco' 'Sydney'){
    	event.preventDefault();
    	$('body').removeClass();
    	$('body').css('Background');
    	console.log ('Citipix_skyline');
    }
}









});