//your JS code here. If required.
function daysOfAYear(year){
	let isLeap = false;
	if(year 400 % === 0) {
		//this may be leap year
		if(year % 100 === 0) {
			//century year
			 return year % 400 === 0 ? 366 : 365;
		}
		return 366;
	}
}
