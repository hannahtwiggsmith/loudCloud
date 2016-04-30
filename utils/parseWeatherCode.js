// I like that this is modularized!
//weather data has more options than users care to
//think about, so some have been grouped.
module.exports = function(number){
	// I wouldn't make weatherType and code global to the file unless they
	// need to be global to the file... and it doesn't seem to me like they do
	var weatherType;
	var code = number.toString();
	switch(code.charAt(0)) {
	    case '2':
	        weatherType = "Thunderstorm"
	        break;
	    case '3':
	        weatherType = "Drizzle"
	        break;
	    case '5':
	        weatherType = "Rain"
	        break;
	    case '6':
	        weatherType = "Snow"
	        break;
	    case '7':
	    	// This if/else seems useless -- sets the same weatherType in each case
	    	if(code.charAt(1) == 4){
	    		weatherType = "Fog"
	    	}else{weatherType = "Fog"} //actually, this is particulates in general
	        break;
	    case '8':
	    	if(code.charAt(2) == 0){
	    		weatherType = "Clear"
	    	}else{weatherType = "Cloudy"}
	        break;
	    case '9':
	    	if(code.charAt(1) == 0){
	    		weatherType = "Thunderstorm" //actually, this is all extreme weathers
	    	}else if (code.charAt(1) == 5 && (code.charAt(2) == 1 || code.charAt(2) == 2 || code.charAt(2) == 3)){
	    		weatherType = "Calm"
	    	}else {weatherType = "Thunderstorm"} //actually, this is various winds or hurricanes
	        break;
	    default: weatherType = "Thunderstorm" //who knows what this weather is?!
	}
	return weatherType
}
