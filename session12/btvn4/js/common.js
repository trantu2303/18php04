function sumtotal(){
  a = document.getElementById('ten').value;
  b = document.getElementById('sdt').value;
  c = document.getElementById('diachi').value;
  d = document.getElementById('email').value;
  e = document.getElementById('password').value;
  if(a == ''){
      document.getElementById('1').innerHTML="Ban Can Dien Ten Vao";
  }else{
      document.getElementById('1').innerHTML="";
  }
  if(b == ''){
    document.getElementById('2').innerHTML="Ban Can Dien sdt Vao";
}else{
    document.getElementById('2').innerHTML="";
}
if(c == ''){
    document.getElementById('3').innerHTML="Ban Can Dien dia chi Vao";
}else{
    document.getElementById('3').innerHTML="";
}
if(d == ''){
    document.getElementById('4').innerHTML="Ban Can Dien email Vao";
}else{
    document.getElementById('4').innerHTML="";
}
if(e == ''){
    document.getElementById('5').innerHTML="Ban Can Dien pasword Vao";
}else{
    document.getElementById('5').innerHTML="";
}
};
