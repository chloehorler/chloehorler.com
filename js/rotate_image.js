var image = document.getElementById("profile");

function rotateImage(){
	var position = image.src.charAt(image.src.length-5);

	if(position == 2){
		position = 0;
	}
	else{
		position++;
	}
	
	image.src = "img/profile" + position + ".png";
}

setInterval(rotateImage, 5000);
image.addEventListener('click', rotateImage);
