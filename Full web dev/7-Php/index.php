<?php

  if($_GET){

    $isPrime = true;

    for($i = 2; $i < $_GET["number"]; $i++) {
      if($_GET["number"] % $i == 0) {
        $isPrime = false;
      }
    }

    if ($isPrime == true) {
      echo "<p>".$i." is a prime number!</p>";
    }
    else {
      echo "<p>".$i." is not prime!</p>";
    }
  }

  // echo "Hi there ".$_GET["number"]."!";



?>

<p>Enter a whole number</p>

<form class="" >
  <input type="number" name="number" >
  <input type="submit" value="go!" >
</form>
