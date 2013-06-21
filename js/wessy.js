var randomnr=0;
var img;
var randNr=0;
var optiune=null;
var corect=null;
var countS=0;
var countQ=2;
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

function formLogin()
{
$.ajax({
			type:'post',
			url:'php/process_login.php',
			data:$('#loginform').serialize(),
			success:function(response){
										$('#log').text(response);
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

$('#btnPlay').replaceWith($('#btnConfirm'));
//$('#btnPlay').replaceWith(conf);

$('#btnDetails').replaceWith($('#btnHint'));
//$('#btnDetails').replaceWith(hint);

$('#btnCustomize').replaceWith($('#btnSkip'));
//$('#btnCustomize').replaceWith(skip);
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


$.ajax({
			type:'post',
			url:'php/user.php',
			success:function(response){
										$('#usr').text("User: "+response);
										}

		});

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

		if(countQ==0)
		{
			$('#alertDiv').text("Game over!");
			$('#btnRadio').remove();
			var bscore='<button type="submit" class="btn btn-primary" onclick="bscore();" id="btnBscore">View best score</button>';
			var myScor='<button type="submit" class="btn btn-primary" href="#mscore" data-toggle="modal" onclick="mscore();" id="btnMscore">View your scores</button>';
			var clasament='<button type="submit" class="btn btn-primary" onclick="clasament();" id="btnClasament">Clasament</button>';
			var restart='<button type="submit" class="btn btn-primary" onclick="restart();" id="btnRestart">Restart</button>';
			$('#btnConfirm').replaceWith(bscore);
			$('#btnHint').replaceWith(myScor);
			$('#btnSkip').replaceWith(clasament);
			$('#btnFacebook').replaceWith(restart);
			$('#btnQuit').remove();
			
		}
}


$(function() {

  $(".alignment .btn").click(function() {
  optiune=$(this).text();
  }); 
});

function bscore()
{
$.ajax({
			type:'post',
			url:'php/bscore.php',
			success:function(response){
										$('#bsc').text("Best score for this game is:\n"+response);
										}

		});
}

function mscore()
{

}

function clasament()
{

}

function restart()
{
location.reload();
}

function btnExit()
{
$.ajax({
			type:'post',
			url:'php/logout.php'

		});
		self.location="index.html";
}

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
/*randomnr=0;
randNr=0;
optiune=null;
corect=null;
countS=0;
countQ=8;
countSkip=0;
var imgNew = new Image(); // width, height values are optional params 
imgNew.src = 'img/welcome.jpg';
imgNew.alt='Personajul de ghicit';

$(img).replaceWith($(imgNew));
imgNew.id='hideImg';
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
$('#btnRight').replaceWith(fr);*/
location.reload();
}

function generate_table() {


    $.ajax({
			type:'post',
			url:'php/mscore.php',
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
  // get the reference for the body
  var body = document.getElementsByTagName("table")[0];
 
  // creates a <table> element and a <tbody> element
  var tbl     = document.createElement("table");
  var tblBody = document.createElement("tbody");
 
  // creating all cells
  for (var j = 0; j < 100; j++) {
    // creates a table row
    var row = document.createElement("tr");
 
    for (var i = 0; i < 2; i++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("cell is row "+j+", column "+i);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
 
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
 
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}
