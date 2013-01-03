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
	
	var radians = Math.atan2(mouseX - centerX, mouseY - centerY);
	var degrees = (radians * (180 / Math.PI) * -1) + 90; 
	
	var dx = mouseX - centerX; 
	var dy = mouseY - centerY; 
	var distSqr = (dx * dx) + (dy * dy); 
	
	if(dx > rightBound) dx = rightBound; if(dx < leftBound) dx = leftBound; 
	if(dy > bottBound) dy = bottBound; if(dy < topBound) dy = topBound; 
	$(eyes).css('left', dx/25); 
	$(eyes).css('top', dy/22); 
	
	//$(eyes).css('top', 30); 
	//$('#debugText').html('MouseX: ' +mouseX+ ', MouseY: ' + mouseY); 
	//$('#debugText').html('centerX: ' +centerX +', centerY: '+ centerY); 
	$('#debugText').html('dx: ' +dx+ ', dy: ' + dy +', distance squared: ' +distSqr + ', degrees: ' +degrees); 
 }
 
 var img = $('.image');
	if(img.length > 0){
    var offset = img.offset();
    function mouse(evt){
        var center_x = (offset.left) + (img.width()/2);
        var center_y = (offset.top) + (img.height()/2);
        var mouse_x = evt.pageX; var mouse_y = evt.pageY;
        var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
        var degree = (radians * (180 / Math.PI) * -1) + 90; 
        img.css('-moz-transform', 'rotate('+degree+'deg)');
        img.css('-webkit-transform', 'rotate('+degree+'deg)');
        img.css('-o-transform', 'rotate('+degree+'deg)');
        img.css('-ms-transform', 'rotate('+degree+'deg)');
    }
    $(document).mousemove(mouse);
	}