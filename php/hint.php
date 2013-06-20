<?php
$link = mysql_connect('fenrir', 'henry', 'kqPZkuF2B9')
    or die('Could not connect: ' . mysql_error());

mysql_select_db('henry') or die('Could not select database');

if(isset($_POST['numar']))
   {
   $randomNr=$_POST['numar'];
$query ="SELECT hint FROM picture WHERE id=\"".$randomNr."\"";

$result = mysql_query($query) or die('Query failed: ' . mysql_error());
$inreg=mysql_fetch_array($result);
echo $inreg['hint'];
	}
	else echo 'Post a esuat';

?>
