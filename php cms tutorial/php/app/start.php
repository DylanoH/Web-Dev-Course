<?php

  ini_set('display_errors', 'On');

  define('APP_ROOT', __DIR__);
  define('VIEW_ROOT', APP_ROOT . '/views');
  define('BASE_URL', 'http://localhost/php');

  $dbserver = 'mysql.stackcp.com:49649';
  $dbname = 'cmstutorial-33354415';
  $dbpass = '1qaz2wsx';


  // $con = new PDO('mysql:host=mysql.stackcp.com:49649; dbname=cmstutorial-33354415', $dbname, $dbpass);


  try {
    $con = new PDO('mysql:host=mysql.stackcp.com:49649; dbname=cmstutorial-33354415', $dbname, $dbpass);
    //echo "connection succesful";
  }
  catch(PDOException  $e) {
    $error_message = $e->getMessage();
    echo "an error has occured: $error_message";
  }


  // try {
  //   $con = mysqli_connect($dbserver, $dbname, $dbpass, $dbname);
  //   echo "connection succesful";
  // }
  // catch(Exception $e) {
  //   $error_message = $e->getMessage();
  //   echo "an error has occured: $error_message";
  // }

 require 'functions.php';

 ?>
