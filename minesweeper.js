var divArray = []; 


function create_grid(width,height) {
	var divMaster = document.getElementById('master');
	console.log(divMaster);
	var divGrid = document.getElementById('grid');
	var tBody = document.getElementById('tbody');
	
	for (var i = 0; i < 9; i++) {
		var newTr = $('<tr>');

		$(tbody).append(newTr);
		for (var j= 0; j < width; j++) {
			var newTd = $('<td>');
			var newDiv = $('<div>');
			$(newTr).append(newTd);
			
			$(newTd).append(newDiv);
			divArray.push(newDiv);
			
		}
		
		

	} for (var i = 0; i < divArray.length; i++) {
		divArray[i].attr('style','background-color:red');
	}

}

create_grid(9,9);