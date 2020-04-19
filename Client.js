$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});


function PreloadImage(imgSrc, callback){
  var objImagePreloader = new Image();

  objImagePreloader.src = imgSrc;
  if(objImagePreloader.complete){
    callback();
    objImagePreloader.onload=function(){};
  }
  else{
    objImagePreloader.onload = function() {
      callback();
      //    clear onLoad, IE behaves irratically with animated gifs otherwise
      objImagePreloader.onload=function(){};
    }
  }
}