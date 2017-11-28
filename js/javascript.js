$(document).ready(function() {
  $("#lightgallery").lightGallery();
});

$("#lightgallery").lightGallery({
  mode: "lg-fade"
});

$('#search').on("keyup change", function() {
  var input = document.getElementById("search");
  var word = input.value.toUpperCase();
  var linkA = document.getElementsByClassName("images");
  for(var count = 0; count < linkA.length; count++) {
    image = linkA[count].children;
    if (image[0].alt.toUpperCase().indexOf(word) === -1) {
      $(image[0]).hide();
    }
    else {
      $(image[0]).show();
    }
  }
});
