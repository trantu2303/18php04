
$('#start').click(function(){
    $('#zidame').animate({left:'300px'},1500);
    $('#ronaldinho').animate({right:'300px'},1500);
    $('#flower_click').removeAttr("disabled");
});
$('#flower_click').click(function(){
	$('#flower').show();
});

