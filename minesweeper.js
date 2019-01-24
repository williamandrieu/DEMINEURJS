var divArray = []; 

function create_grid(width,height) {
	var divMaster = document.getElementById('master');
	console.log(divMaster);
	for (var i = 0; i < width*height; i++) {
		var newDiv = $('<div>');
		newDiv.attr('class','div1' )
		divArray[i]= newDiv; 
		$(divMaster).after(newDiv);
	}
}

create_grid(9,9);