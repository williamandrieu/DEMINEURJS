
function int_aleatoire(max) {
	return (Math.floor(max*Math.random()));
}

var divArray = []; 
var randArray = [];
var coucou = "coucou";


function bomb_generation(nbBomb,NbCase) {
	for (var i = 0; i < nbBomb; i++) {
		randArray.push(int_aleatoire(NbCase-1));
	}

	for (var j = 0; j <= randArray.length; j++) {
			console.log(randArray[j]);
			/*if(randArray.includes(j)){
				
				z++;
			}*/
		}
}
bomb_generation(10,81);
console.log(randArray);


function create_grid(width,height) {
	var divMaster = document.getElementById('master');
	var divGrid = document.getElementById('grid');
	var tBody = document.getElementById('tbody');
	
	for (var i = 0; i < width; i++) {

			var newTr = $('<tr>');
			$(tbody).append(newTr);

			for (var j= 0; j < width; j++) {

				var newTd = $('<td>');
				var newDiv = $('<div>');
				$(newTr).append(newTd);
				$(newTd).append(newDiv);
				divArray.push(newDiv);
			}
	} 
	for (var i = 0; i < divArray.length; i++) {
		divArray[i].attr('style','background-color:red;width:20px;height:20px;');
		divArray[i].attr('onclick','console.log(coucou)');

	}

}




create_grid(14,14);