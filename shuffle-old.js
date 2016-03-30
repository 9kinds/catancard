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

cardtext = "<p>ROAD = " + array1[0] + plus + array1[1] + 
	"</p><p>SETTLEMENT = " + array1[0] + plus + array1[1] + plus
	+ array1[2] + plus + array1[3] + 
	"</p><p>CITY = " + array1[3] + plus + array1[3] + plus + 
	array1[4]+ plus +array1[4]+ plus +array1[4] + 
	"</p><p>DEV CARD = " + array1[2] + plus + array1[3] + plus + array1[4] + "</p>"; 

document.write(cardtext); 

// a test array to see if i can get pics to work 
w2 = '<img src="images/wheat.jpg" height="30px" alt="wheat">';
o2 = '<img src="images/ore.jpg" height="30px" alt="ore">';
l2 = '<img src="images/lumber.jpg" height="30px" alt="lumber">';
b2 = '<img src="images/brick.jpg" height="30px" alt="brick">';
s2 = '<img src="images/sheep.jpg" height="30px" alt="sheep">';

var array2 = new Array(w2,o2,b2,s2,l2);
shuffle(array2);

roadtext = array2[0] + plus + array2[1];
settletext = array2[0] + array2[1] + array2[2] + array2[3];
citytext = array2[3] + array2[3] + array2[4] + array2[4]+ array2[4];  
devtext = array2[2] + array2[3] + array2[4]; 

