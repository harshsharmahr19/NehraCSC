onload  = start;

function start(){	
var i = 1;
function Move(){ 	
	i = (i%4)+1; // 4 is the Number of image in slider
	document.getElementById('i'+i).checked = true;
}
setInterval(Move,3000); //change img in 3 sec
}
// Function to open modal with clicked image
function expandImage(element) {
    var imgSrc = element.querySelector('img').src;
    document.getElementById('modal-img').src = imgSrc;
    document.getElementById('modal-container').style.display = 'block';
}

// Function to close modal
function closeModal() {
    document.getElementById('modal-container').style.display = 'none';
}