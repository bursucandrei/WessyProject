
<?php
include 'db_connect.php';
include 'functions.php';
sec_session_start(); // a custom secure way of starting a php session. 
 
if(isset($_POST['email'], $_POST['p'])) { 
   $username = $_POST['email'];
   
   $password = $_POST['p']; // The hashed password.

   if(login($username, $password, $mysqli) == true) {
      // Login success
      echo 'Success: You have been logged in!';
   } else {
      // Login failed
      echo 'Error!Login failed';
	  
   }
 }else { 
   // The correct POST variables were not sent to this page.
   echo 'Invalid Request';
}
?>