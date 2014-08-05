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