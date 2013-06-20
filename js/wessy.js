var randomnr=0;
var img;
var randNr=0;
var optiune=null;
var corect=null;
var countS=0;
var countQ=8;
var countSkip=0;
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
var left='<button type="button" class="btn btn-inverse" id="btnLeft" onclick="onclick_Left();"></button>';
var mid='<button type="button" class="btn btn-inverse" id="btnMiddle" onclick="onclick_Middle();"></button>';
var right='<button type="button" class="btn btn-inverse" id="btnRight" onclick="onclick_Right();"></button>';
var conf='<button type="submit" class="btn btn-primary" id="btnConfirm" onclick="onclick_Confirm();">Confirm</button>';
var hint='<button type="submit" class="btn btn-primary" id="btnHint" onclick="onclick_Hint();">Hint</button>';
var skip='<button type="submit" class="btn btn-primary" id="btnSkip">Skip</button>';
var fb='<button type="submit" class="btn btn-primary" id="btnFacebook">Facebook</button>';
var qu='<button type="submit" class="btn btn-primary" id="btnQuit" onclick="onclickQuit();">Quit</button>';

$('#fl').replaceWith(left);
$('#fr').replaceWith(right);
$('#fm').replaceWith(mid);



//$('#btnPlay').replaceWith($('#btnConfirm'));
$('#btnPlay').replaceWith(conf);

//$('#btnDetails').replaceWith($('#btnHint'));
$('#btnDetails').replaceWith(hint);

//$('#btnCustomize').replaceWith($('#btnSkip'));
$('#btnCustomize').replaceWith(skip);
$('#btnFb').replaceWith(fb);
$('#btnQu').replaceWith(qu);

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
$('#score').text("Score: " + countS);
$('#skip').text("Skips left: " + countSkip);
$('#question').text("Nr. of questions: " + countQ);
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
		countQ=countQ-1;
		$('#score').text("Score:" + countS);
		$('#question').text("Nr. of questions: " + countQ);
		}
	else
		{
		$('#corect').text("Wrong");
		countQ=countQ-1;
		$('#question').text("Nr. of questions: " + countQ);
		}

		
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

function onclickQuit(){
randomnr=0;
randNr=0;
optiune=null;
corect=null;
countS=0;
countQ=8;
countSkip=0;
var imgNew = new Image(); // width, height values are optional params 
imgNew.src = 'img/welcome.jpg';
imgNew.alt='Personajul de ghicit';
imgNew.id='hideImg';
$(img).replaceWith($(imgNew));
var play='<button type="submit" class="btn btn-primary" onclick="hideDiv();" id="btnPlay">Play</button>';
var det='<button type="submit" class="btn btn-primary" id="btnDetails">Details</button>';
var cust='<button type="submit" class="btn btn-primary" id="btnCustomize">Customize</button>';
var fb='<button type="submit" id="btnFb" style="visibility: hidden"></button>';
var qu='<button type="submit" id="btnQu" style="visibility: hidden"></button>';
var fl='<div id="fl"></div>';
var fr='<div id="fr"></div>';
var fm='<div id="fm"></div>';
$('#btnConfirm').replaceWith(play);
$('#btnHint').replaceWith(det);
$('#btnSkip').replaceWith(cust);
$('#btnFacebook').replaceWith(fb);
$('#btnQuit').replaceWith(qu);
$('#alertDiv').text('Game stopped!To start press PLAY!');
$('#btnLeft').replaceWith(fl);
$('#btnMiddle').replaceWith(fm);
$('#btnRight').replaceWith(fr);
}

