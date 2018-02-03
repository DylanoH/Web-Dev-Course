<?php

  if (is_numeric($_GET['number']) && $_GET['number'] > 0 && $_GET['number'] == round($_GET['number'], 0)) {

    $isPrime = true;

    for ($i=2; $i < $_GET['number']; $i++) {
      if ($_GET['number'] % $i == 0) {
        // number is not a prime
        $isPrime = false;
      }
    }

    if ($isPrime) {
      echo "<p>".$i." is a prime number!</p>";
    }
    else {
      echo "<p>".$i." is not a prime number!</p>";
    }

  }

  else if($_GET){
    echo "<p>Please enter a whole positive number</p>";
  }

?>

<p>enter a number</p>
<form>
  <input type="text" name="number" value="">

  <input type="submit" value="GO!">
</form>
