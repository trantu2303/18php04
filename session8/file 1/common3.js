/*function getValue(){
    var a;
    a = document.getElementById('number1').value;
    document.getElementById('result').innerHTML=a;
}*/
function sumTotal(){
	var a, b;
	a = document.getElementById('number1').value;
	b = document.getElementById('number2').value;
	document.getElementById('result').innerHTML = parseInt(a) + parseInt(b);
}