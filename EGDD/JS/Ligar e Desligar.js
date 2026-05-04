function light(sw) {
  var pic;
  if (sw == 0) {
    pic = "img/Desligada.PNG"
  } else {
    pic = "img/Ligada.PNG"
  }
  document.getElementById('myImage').src = pic;
}