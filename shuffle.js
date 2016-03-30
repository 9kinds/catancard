// thanks to 
// http://stackoverflow.com/a/12646864
function durst_shuffle(array) {
	// starting with index of array last element in the array 
	for (var i = array.length - 1; i > 0; i--) {
		// generate random number within range of array length
		var	randomIndex = Math.floor( Math.random() * (i+1) );
		// set temp value to same value as last item in the array 
		var temporaryValue = array[i];
		// now set last slot in array to contain value of random index
		array[i] = array[randomIndex];
		// then set that random index slot to contain the temp value, i.e. the old last item
		array[randomIndex] = temporaryValue;
	}
	return array;
}

w = "<img src='images/wheat.jpg' height='35px' alt='wheat'>";
o = "<img src='images/ore.jpg' height='35px' alt='ore'>";
l = "<img src='images/wood.jpg' height='35px' alt='lumber'>";
b = "<img src='images/brick.jpg' height='35px' alt='brick'>";
s = "<img src='images/wool.jpg' height='35px' alt='sheep'>";


var array = new Array(w,o,b,s,l);
durst_shuffle(array);

road = array[0] + array[1];
settlement = array[0] + array[1] + array[2] + array[3];
city = array[3] + array[3] +  array[4] + array[4] + array[4];
devcard = array[2] + array[3] + array[4];

document.getElementById("road-items").innerHTML = road;
document.getElementById("sett-items").innerHTML = settlement;
document.getElementById("city-items").innerHTML = city;
document.getElementById("devc-items").innerHTML = devcard;

w2 = '<img src="images/wood.jpg" height="30px" alt="wood">';
o2 = '<img src="images/ore.jpg" height="30px" alt="ore">';
l2 = '<img src="images/lumber.jpg" height="30px" alt="lumber">';
b2 = '<img src="images/brick.jpg" height="30px" alt="brick">';
s2 = '<img src="images/sheep.jpg" height="30px" alt="sheep">';

 

