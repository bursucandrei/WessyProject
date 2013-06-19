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

function formLoghin()
{
$.ajax({
			type:'post',
			url:'php/process_login.php',
			data:$('#loghinform').serialize(),
			success:function(response){
										$('#loghinresult').text(response);
										}

		});

}
