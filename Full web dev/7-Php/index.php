<?php

  $family = array("Dylano", "Sammie", "Oona");



  foreach ($family as $key => $value) {

    $family[$key] = $value." Hartman";

    echo "Array item ".$key." is ".$value."<br />";
  }

  for ($i=0; $i < sizeOf($family); $i++) {
    echo $family[$i]."<br />";
  }


?>
