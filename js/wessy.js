var randomnr;
var img;
function formRegister()
{
$.ajax({
			type:'post',
			url:'php/register.php',
			data:$('#registerform').serialize(),
			success:function(response){
										$('#rezultat').text(response);
										}

		});

}

function hideDiv()
{
randomnr=Math.floor(Math.random()*25);
randomnr=1+randomnr;
img = new Image(); // width, height values are optional params 
img.src = 'img/gameimg/pic'+randomnr+'.jpg';
img.alt='Personajul de ghicit';
img.className='img-polaroid';
img.id='divNewImg';
$('#alertDiv').text('Which one of this people is in this picture?');
$('#hideImg').replaceWith(img);
$('#btnClose').remove();
$('#btnPlay').replaceWith($('#btnConfirm'));
$('#btnDetails').replaceWith($('#btnHint'));
$('#btnCustomize').replaceWith($('#btnSkip'));
$('#btnFb').replaceWith($('#btnFacebook'));
$('#btnQu').replaceWith($('#btnQuit'));
}

function onclick_Confirm()
{
randomnr=Math.floor(Math.random()*25);
randomnr=1+randomnr;
var imgNew = new Image(); // width, height values are optional params 
imgNew.src = 'img/gameimg/pic'+randomnr+'.jpg';
imgNew.alt='Personajul de ghicit';
imgNew.className='img-polaroid';
$('#divNewImg').replaceWith(imgNew);
imgNew.id='divNewImg';
}

function onclick_Hint()
{


}