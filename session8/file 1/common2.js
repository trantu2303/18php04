/*function changeImage1(){
    document.getElementById("changeImage").src='ronaldo.jpg';
}
function changeImage2(){
    document.getElementById("changeImage").src='kaka1.jpg';
}
function changeImage3(){
    document.getElementById("changeImage").src='cavani.jpg';
}
  
  */
 function changeImage(image,name,color){
    document.getElementById('changeImage').src=image;
    document.getElementById('textDemo').innerHTML=name;
    document.getElementById('textDemo').style.color=color;
 }
