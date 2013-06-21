<?php
include 'db_connect.php';
include 'functions.php';
sec_session_start(); // a custom secure way of starting a php session. 

 
if(isset($_POST['email'], $_POST['password'])) { 
   $username = $_POST['email'];
   
   $password = $_POST['password']; 
   
   $_SESSION['username'] = $username;

 /*  $salt="f9aab579fc1b41ed0c44fe4ecdbfcdb4cb99b9023abb241a6db833288f4eea3c02f76e0d35204a8695077dcf81932aa59006423976224be0390395bae152d4ef";
   $password = hash('sha512', $password.$salt);*/

   if(login($username, $password, $mysqli) == true) {
      // Login success
      echo 'Success: You have been logged in!';
	  
      header( 'Location:http://students.info.uaic.ro/~andrei.bursuc/Wessy/start.html' ) ;
   } else {
      // Login failed
      echo 'Error!Login failed';
	  
   }
 }else { 
   // The correct POST variables were not sent to this page.
   echo 'Invalid Request';
}
?>