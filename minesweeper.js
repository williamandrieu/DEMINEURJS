
function int_aleatoire(max) {
	return (Math.floor(max*Math.random()));
}

var divArray = []; 
var randArray = [];
var coucou = "coucou";
var gridHeight;
var me;
var a = [];



function bomb_generation(nbBomb,nbCase) {
	for (var i = 0; i < nbBomb; i++) {
		randArray.push(int_aleatoire(nbCase-1));
	}
}




function create_grid(width,height,nbBomb) {
	gridHeight = height;
	gridWidth = width;

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
				newDiv.addClass('case '+(divArray.length-1));
			}
	} bomb_generation(nbBomb,width*height);
	for (var i = 0; i < divArray.length; i++) {
		if (randArray.includes(i)) {
			divArray[i].attr('style','background-color:blue;width:24px;height:24px;');
			divArray[i].addClass('bomb');
		}else{
		divArray[i].attr('style','background-color:red;width:24px;height:24px;');
		}
		$(divArray[i]).attr('onclick','onBomb(this)');

	}
	
	console.log(randArray);
}

function onBomb(element) {
	
	var caseNumber = $(element).attr('class');
	var caseNumberArray = caseNumber.split(" ");
	
	if(randArray.includes(parseInt(caseNumberArray[1]))){
		$(element).attr('style','background-color:blue;width:24px;height:24px;background-image: url("./bomb2.png");');
		console.log("boum!!");
	} else {
		$(element).attr('style','background-color:white;width:24px;height:24px;');
		nextBomb(element, caseNumberArray[1]);
		
	}
}

function nextBomb(element,index) {
	
	me = element;
	var count = 0;
	index = parseInt(index);
	//console.log(index+1);
	//console.log((index+1)%gridHeight);
	if ((index+1) % gridHeight == 0) {
		if(randArray.includes(parseInt(index+gridHeight))){ count++;}
		if(randArray.includes(parseInt(index-gridHeight))){ count++;}
		if(randArray.includes(parseInt(index-1))){ count++;}
		if(randArray.includes(parseInt((index-gridHeight)-1))){ count++;}


	} else if (index % gridHeight == 0) {

		if(randArray.includes(parseInt(index+gridHeight))){ count++;}
		if(randArray.includes(parseInt(index-gridHeight))){ count++;}
		if(randArray.includes(parseInt(index+1))){ count++;}
		if(randArray.includes(parseInt(index+(gridHeight+1)))){ count++;}
		if(randArray.includes(parseInt((index-gridHeight)+1))){ count++;}

	}

	  else{

		if(randArray.includes(parseInt(index+(gridHeight+1)))){ count++;}
		if(randArray.includes(parseInt(index+(gridHeight-1)))){ count++;}
		if(randArray.includes(parseInt(index-(gridHeight+1)))){ count++;}
		if(randArray.includes(parseInt(index-(gridHeight-1)))){ count++;}
		if(randArray.includes(parseInt(index+gridHeight))){ count++;}
		if(randArray.includes(parseInt(index-gridHeight))){ count++;}
		if(randArray.includes(parseInt(index-1))){ count++;}
		if(randArray.includes(parseInt(index+1))){ count++;}
	}
	var tmp = 'case '+index;
	
	$(document.getElementsByClassName(tmp)).text(count);

	return count;
}


function emptyCase(index) {
	//for (var i = 0; i < a.length; i++) {
	//	var index = a[i]
	
		//console.log($(document.getElementsByClassName('case '+index)).text()+"<<<<<<<<<<<<")
		if($(document.getElementsByClassName('case '+index)).text() == "0"){
			if ((index+1) % gridHeight == 0) {
				$(document.getElementsByClassName('case '+(parseInt(index)+gridHeight))).click();
				$(document.getElementsByClassName('case '+(parseInt(index)-gridHeight))).click();
				$(document.getElementsByClassName('case '+(parseInt(index)-1))).click();
				return true;
			}else {
				
				
				$(document.getElementsByClassName('case '+(parseInt(index)+gridHeight))).click();
				$(document.getElementsByClassName('case '+(parseInt(index)-gridHeight))).click();
				$(document.getElementsByClassName('case '+(parseInt(index)-1))).click();
				$(document.getElementsByClassName('case '+(parseInt(index)+1))).click();
				return true;
			}
			//$(document.getElementsByClassName('case '+((index+gridHeight)+1))).click();
			//$(document.getElementsByClassName('case '+(index+gridHeight)-1)).click();
			//$(document.getElementsByClassName('case '+((index-gridHeight)+1))).click();
			//$(document.getElementsByClassName('case '+((index-gridHeight)-1))).click();
			return true;
			
		}
	
}
//}
function function_name() {
	for (var i = 0; emptyCase(i) == true; i++) {
		//console.log("bite");
		emptyCase(i);

	}
}

function timer(){
		var time_avant= Date.now();
		timer=setInterval(function() {
			time_sec=Math.floor(((Date.now()-time_avant)%60000)/1000);
			time_sec=(time_sec+"").padStart(2, '0');
			time_min=Math.floor(((Date.now()-time_avant)%3600000)/60000);
			time_min=(time_min+"").padStart(2, '0');
			document.getElementById("sec").innerHTML=time_sec;
			document.getElementById("min").innerHTML=time_min;}, 5);

}
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}


create_grid(9,9,10);