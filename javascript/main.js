$(document).ready(function(){
	$(document).mousemove(function(e){
		mouseX = e.pageX; 
		mouseY = e.pageY;
		moveEyes('face1pupils', 175, 125,mouseX, mouseY, -500, 500, -160, 300); 
		moveEyes('face2pupils', 75, 75, mouseX, mouseY, -203, 542, -155, 340); 
		moveEyes('face3pupils', 100,75,mouseX,mouseY,-605,800,-162,365);
	}); 
 });
 
 function moveEyes(pupilsID, centerX, centerY,mouseX, mouseY, leftBound, rightBound, topBound, bottBound)
 {
	var eyes = '#' + pupilsID; 
	centerX += $(eyes).offset().left; 
	centerY += $(eyes).offset().top; 

	var dx = mouseX - centerX; 
	var dy = mouseY - centerY; 
	
	if(dx > rightBound) dx = rightBound; if(dx < leftBound) dx = leftBound; 
	if(dy > bottBound) dy = bottBound; if(dy < topBound) dy = topBound; 
	$(eyes).css('left', dx/25); 
	$(eyes).css('top', dy/22); 
	
	//$(eyes).css('top', 30); 
	//$('#debugText').html('MouseX: ' +mouseX+ ', MouseY: ' + mouseY); 
	//$('#debugText').html('centerX: ' +centerX +', centerY: '+ centerY); 
	//$('#debugText').html('dx: ' +dx+ ', dy: ' + dy +', distance squared: ' +distSqr + ', degrees: ' +degrees); 
 }