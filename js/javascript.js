$(document).ready(function() {
  $("#lightgallery").lightGallery();
});

$("#lightgallery").lightGallery({
  mode: "lg-fade"
});

$('#search').on("keyup change", function() {
  input = document.getElementByID("search");
  word = input.value.toUpperCase();
  linkA = document.getElementByClassName("images");
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
