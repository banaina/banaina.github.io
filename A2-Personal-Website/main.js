
// modal js code reference: https://www.w3schools.com/css/tryit.asp?filename=trycss_image_modal_js 
// multiple modals reference: https://jsfiddle.net/snowMonkey/f1zav0ge/

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption

//using a class to reference modal images
var images = document.getElementsByClassName('myImages');

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    console.log(evt);
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}