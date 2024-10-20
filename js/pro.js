
// section 1
$('.theicon').on('click',function () {
    
    $('.menu').animate({left:'0px'})
})
$('#i').on('click',function(){
    $('.menu').animate({left:'-260px'},1000)
})
// section 2 
$('#section2 p').hide()
$('.one').on('click',function () {
    $('.p1').slideToggle(500)
    $('.p2').slideUp()
    $('.p3').slideUp()
    $('.p4').slideUp()
})
$('.two').on('click',function () {
    $('.p2').slideToggle(500)
    $('.p3').slideUp()
    $('.p1').slideUp()
    $('.p4').slideUp()
})
$('.three').on('click',function () {
    $('.p3').slideToggle(500)
    $('.p1').slideUp()
    $('.p2').slideUp()
    $('.p4').slideUp()

})
$('.four').on('click',function () {
    $('.p4').slideToggle(500)
    $('.p1').slideUp()
    $('.p2').slideUp()
    $('.p3').slideUp()

})


// section 3

var countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();

var x = setInterval(function() {
var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

$('.days').html(days+'d')
$('.hour').html(hours+'h')
$('.min').html(minutes+'m')
$('.sec').html(seconds+'s')
}, 1000);
// section 4
$('textarea').keypress(function(){
var thelimit=140-this.value.length ;
var thetext=' character remaining';   
   if (thelimit<=0) {
    $('#last p').html(' your available character finished ').css('color','red')
   }else{
    $('#last p').html(thelimit+ thetext)
   }
})
