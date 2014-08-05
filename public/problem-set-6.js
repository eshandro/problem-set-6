// Problem 1
// secondGreatLow - return a string with the 2nd lowest and highest number from an array
// [ 7,7,12, 98, 106] --- '12 98'

var secondGreatLow = function(arr) {
	if (arr.length <= 2) {
		return arr.sort();
	}
	var answer = []
	var arrModified = arr.filter(function(num, index) {
		if( num !== arr[index-1] ) {
			return num;
		}
	});
	var greatest = Math.max.apply(null, arrModified);
	var lowest = Math.min.apply(null, arrModified);

	arrModified.splice(arrModified.indexOf(greatest), 1);
	arrModified.splice(arrModified.indexOf(lowest),1);

	answer.push(Math.min.apply(null, arrModified));
	answer.push(Math.max.apply(null, arrModified));

	return answer;
}
var testList = [ 7,7,12, 98, 106];
console.log(secondGreatLow(testList))

// Problem 2 
// timeConvert - take # and returns number of hours and minutes it converts to 
// 63 -- 1:3

var timeConvert = function(num) {
	var hours = Math.floor(num/60);
	var minutes = num % 60;
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	return hours + ':' + minutes;
}
console.log(timeConvert(34), timeConvert(63), timeConvert(134));
