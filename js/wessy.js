var randomnr=0;
var img;
var randNr=0;
var optiune=null;
var corect=null;
var countS=0;
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
randNr=Math.floor(Math.random()*25);
randNr=1+randNr;
img = new Image(); // width, height values are optional params 
img.src = 'img/gameimg/pic'+randNr+'.jpg';
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
var elem = document.getElementById('btnRadio');
$(elem).show();



$.ajax({
			type:'post',
			url:'php/afisare.php',
			data:"numar="+randNr,
			success:function(response){
									    var obj = JSON.parse(response);
										var op = new Array();
										op[0] = obj.numeC;
										corect=obj.numeC
										op[1] = obj.wrong1;
										op[2] = obj.wrong2;
										var newop=shuffle(op);
										$('#btnLeft').text(newop[0]);
										$('#btnMiddle').text(newop[1]);
										$('#btnRight').text(newop[2]);
										}

		});
$('#score').text("Score:" + countS);
}

function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = (Math.random() * counter--) | 0;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
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




$.ajax({
			type:'post',
			url:'php/afisare.php',
			data:"numar="+randomnr,
			success:function(response){
									    var obj = JSON.parse(response);
										var op = new Array();
										op[0] = obj.numeC;
										corect=obj.numeC;
										op[1] = obj.wrong1;
										op[2] = obj.wrong2;
										var newop=shuffle(op);
										$('#btnLeft').text(newop[0]);
										$('#btnMiddle').text(newop[1]);
										$('#btnRight').text(newop[2]);
										}

		});

$('#hint').text('');

$('.btn-group button').removeClass('active');

corect=corect.toString();
	if(optiune == corect)
		{
		$('#corect').text("Correct");
		countS=countS+1;
		$('#score').text("Score:" + countS);
		}
	else
		$('#corect').text("Wrong");

}


$(function() {

  $(".alignment .btn").click(function() {
  optiune=$(this).text();
  }); 
});



function onclick_Hint()
{
if(randomnr!=0){
$.ajax({
			type:'post',
			url:'php/hint.php',
			data:"numar="+randomnr,
			success:function(response){
									    $('#hint').text(response);
										}

		});}else {
					$.ajax({
								type:'post',
								url:'php/hint.php',
								data:"numar="+randNr,
								success:function(response){
									    
														$('#hint').text(response);
															}
		
		
				});
}
}

function onclick_Left()
{
op1=$('#btnLeft').val();
$('#hint').text(op1);
}

