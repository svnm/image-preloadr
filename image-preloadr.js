/**
 * image-preloadr IE
 * preloads an array of images to the dom at the bottom of the body element
 */
var imagePreloadr = function (srcArray) {

  for (var i = 0, len = srcArray.length; i < len; i++) {
      var img = new Image(); 
      img.src = srcArray[i];
      img.style.display = 'none';
      document.body.appendChild(img);
  }
}


module.exports = imagePreloadr;