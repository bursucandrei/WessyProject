<?php
	include 'functions.php';
	sec_session_start();
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
	 
	 
	 if(isset($_POST['scor']))
	 {
	 date_default_timezone_set('Europe/Bucharest');
	 $timezone = date('m/d/Y h:i:s a', time());
	 $username=$_SESSION['username'];
	 $score= $_POST['score'];
	 /*$sql = "INSERT INTO score ".
       "(username,score,time) ".
       "VALUES('$username','$score','$timezone')";*/
	   
	    $sql = "INSERT INTO score ".
       "(username,score,time) ".
       "VALUES('bursuc','95','06/11/2013 09:28:07 am')";
     $result=mysql_query($sql,$conexiune);
	 if (!$result)
     {
	 die ('A survenit o eroare la interogare: ' . mysql_error());
     }
	 }
	 else
	 echo 'Insert nu a reusit!';
?>