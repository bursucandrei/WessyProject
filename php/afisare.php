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

   if(isset($_POST['numar']))
   {
   $randomNr=$_POST['numar'];
   
   $query="SELECT numeC,wrong1,wrong2 FROM picture WHERE id=\"".$randomNr."\"";
   
   	$result=mysql_query($query,$conexiune);
		if (!$result)
			{
				die ('A survenit o eroare la interogare: ' . mysql_error());
			}
				
			$inreg=mysql_fetch_array($result);
			echo json_encode($inreg);
   }
   
   else
   echo 'Post a esuat!';


?>