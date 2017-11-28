$(document).ready(function() {
  $("#lightgallery").lightGallery();
});

$("#lightgallery").lightGallery({
  mode: "lg-fade"
});

$('#search').on("keyup change", function() {
  var input = document.getElementByID("search");
  var word = input.value.toUpperCase();
  var linkA = document.getElementByClassName("images");
  for(var count = 0; count < linkA.length; count++) {
    image = linkA[count].children();
    if (image.alt.toUpperCase().indexOf(word) === 0) {
      $(linkA[count].children()).attr("display","none");
    }
    else {
      $(linkA[count].children()).attr("display"," ");
    }
  }
});
