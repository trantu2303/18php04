//định nghĩa hàm
function functionName(){
    document.write("hello function");
}
//gọi hàm
/*
description : ham nay de tinh tong 2 so
created 04/08/2018
created by TVAT;
*/
functionName();
function sumNumber(a,b){
    document.write(a+b);
}
document.write('<br>');
sumNumber(1,2);

document.write('<br>');

function sumNumber2(a = 2 , b = 4){
    var c;
    c = a + b;
    return c;
}
var b = 2;
if(b  >2){
    document.write('lon hon 2')
}else{
    document.write('nho hon = 2');
}
var j = 3;
var c;
c = ++j + 5 ;
document.write('<br>');
document.write(c);
//
var k = 3;
var d;
d = k++ + 5 ;
document.write('<br>');
document.write(d);