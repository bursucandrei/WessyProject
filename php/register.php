<?php
include 'functions.php';
$dbh="fenrir";
$dbn="henry";
$dbu="henry";
$dbp="kqPZkuF2B9";
$conexiune=mysql_connect($dbh,$dbu,$dbp);

if(!$conexiune)
{
	die("A murit[conexiune]!".mysql_error());
}
if(!mysql_select_db($dbn,$conexiune))
{
	die("A murit[select_db]!".mysql_error());
}

if(isset($_POST['emailR'], $_POST['passwordR'] , $_POST['usernameR'], $_POST['ageR'] , $_POST['websiteR'])) { 
   $username = $_POST['usernameR'];
   
   $password = $_POST['passwordR'];
   
   $email=$_POST['emailR'];
   
   $age=$_POST['ageR'];
   
   $url=$_POST['websiteR'];
   
   $salt="f9aab579fc1b41ed0c44fe4ecdbfcdb4cb99b9023abb241a6db833288f4eea3c02f76e0d35204a8695077dcf81932aa59006423976224be0390395bae152d4ef";
   $password = hash('sha512', $password.$salt);
   $sql = "INSERT INTO members ".
       "(username,email, password,salt, age, website) ".
       "VALUES('$username','$email','$password','$salt','$age' ,'$url')";

$result=mysql_query($sql,$conexiune);
if (!$result)
{
	die ('A survenit o eroare la interogare: ' . mysql_error());
}
else
    {
	echo 'Register succes!!';
	}
   }else { 
   // The correct POST variables were not sent to this page.
   echo 'Invalid Request';
}
?>