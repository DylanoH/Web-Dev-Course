<?php

    if ($_POST) {
      $onList = false;
      $usernames = array("Dylano", "Dyl", "Dyla", "Dyli");
      foreach ($usernames as $value) {
        if ($value == $_POST['name']) {

          $onList = true;
        }
      }
      if ($onList) {
        echo "<p>Hello ".$value."!</p>";
      }
      else {
        echo "<p>Your name is not on the list!</p>";
      }
    }

?>

<p>Whats your name?</p>
<form method="post">
  <input type="text" name="name" value="">

  <input type="submit" value="GO!">
</form>
