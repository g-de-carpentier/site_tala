$(function() {
	slide();
function slide() {
$('#sld1').delay(3000).fadeOut(2000).delay(10500).fadeIn(4000)
$('#sld2').fadeOut(0).delay(2500).fadeIn(4000).delay(3000).fadeOut(2000)
$('#sld3').fadeOut(0).delay(9000).fadeIn(4000).delay(3000).fadeOut(2000)


};
setInterval (slide, 19500);
});