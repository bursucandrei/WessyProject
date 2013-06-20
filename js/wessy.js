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
$('#hideImg').remove();
$('#btnClose').remove();
$('#btnPlay').replaceWith($('#btnConfirm'));
$('#btnDetails').replaceWith($('#btnHint'));
$('#btnCustomize').replaceWith($('#btnSkip'));
$('#btnFb').replaceWith($('#btnFacebook'));
$('#btnQu').replaceWith($('#btnQuit'));


}
