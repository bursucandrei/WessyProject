var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject(){
    var xmlHttp;
	
	if(window.ActiveXObject){
	try{
	xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}catch(e){
	xmlHttp=false;
	}
	}else{
		try{
	xmlHttp = new XMLHttpRequest();
	}catch(e){
	xmlHttp=false;
	}
	}
	if(!xmlHttp)
	alert("Cant create that object!");
	else
	return xmlHttp;
	
}

function process(){
processUser();
emailProcess();
}

function processUser()
{
if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
	username=encodeURIComponent(document.getElementById("username").value);
	xmlHttp.open("GET","interogare.php?username="+username,true);
	xmlHttp.onreadystatechange = handleServerResponse;
	xmlHttp.send(null);
	

	}else{
		setTimeout('processUser()',10);
		}

}

function emailProcess()
{
if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
	email=encodeURIComponent(document.getElementById("email").value);
	xmlHttp.open("GET","email.php?email="+email,true);
	xmlHttp.onreadystatechange = handleServerResponse1;
	xmlHttp.send(null);	}else{
		setTimeout('emailProcess()',10);
		}
}

function handleServerResponse(){
	if(xmlHttp.readyState==4){
		if(xmlHttp.status==200){
			xmlResponse=xmlHttp.responseXML;
			xmlDocumentElement= xmlResponse.documentElement;
			message = xmlDocumentElement.firstChild.data;
			if (message=='0')
		 	document.getElementById("underInput").innerHTML='<span style="color:green">' + 'Enter a valid username!' +'</span>';
			else
			if(message=='01')
			document.getElementById("underInput").innerHTML='<span style="color:red">' + 'Username is not valid!' +'</span>';
			else
			if(message=='02')
			document.getElementById("underInput").innerHTML='<span style="color:green">' + 'Username is valid!' +'</span>';
			setTimeout('processUser()',10);
			
		}
		else{
			//alert('Something went wrong');
		}
	}
}

function handleServerResponse1(){
	if(xmlHttp.readyState==4){
		if(xmlHttp.status==200){
			xmlResponse=xmlHttp.responseXML;
			xmlDocumentElement= xmlResponse.documentElement;
			mes = xmlDocumentElement.firstChild.data;
		 	if (mes=='0')
		 	document.getElementById("emailInput").innerHTML='<span style="color:green">' + 'Enter a valid email adress!' +'</span>';
			else
			if(mes=='01')
			document.getElementById("emailInput").innerHTML='<span style="color:red">' + 'Email adress exist in database!' +'</span>';
			else
			if(mes=='02')
			document.getElementById("emailInput").innerHTML='<span style="color:green">' + 'Email adress not exist in database!' +'</span>';
			setTimeout('emailProcess()',10);
			
		}
		else{
			//alert('Something went wrong');
		}
	}
}