// thanks to
// http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript


function shuffle(o){
    				for(var j, x, i = o.length; i; 
    				j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    				return o;
					};

w = "Wheat";
o = "Ore";
l = "Lumber";
b = "Brick";
s = "Sheep";
plus = " + ";

var array1 = new Array(w,o,b,s,l);
shuffle(array1);

cardtext = "ROAD = " + array1[0] + plus + array1[1] + 
	"<p>SETTLEMENT = " + array1[0] + plus + array1[1] + plus
	+ array1[2] + plus + array1[3] + 
	"<p>CITY = " + array1[3] + plus + array1[3] + plus + 
	array1[4]+ plus +array1[4]+ plus +array1[4] + "<p>\
	DEV CARD = " + array1[2] + plus + array1[3] + plus + array1[4]; 

document.write(cardtext); 