<?php
include 'functions.php';
sec_session_start();
$username=$_SESSION['username'];
$link = mysql_connect('fenrir', 'henry', 'kqPZkuF2B9')
    or die('Could not connect: ' . mysql_error());

mysql_select_db('henry') or die('Could not select database');


$query ="SELECT score FROM score WHERE username=\"".$username."\""."ORDER BY score DESC LIMIT 5";

$result = mysql_query($query) or die('Query failed: ' . mysql_error());
$inreg=mysql_fetch_array($result);
echo $inreg['score'].' ('.$inreg['username'].' )';

?>
