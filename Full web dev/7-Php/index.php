<?php
  $myArray = array("Dylano", "Sammie", "Oona");
  $myArray[] = "Lucy";
  print_r ($myArray);

  echo $myArray[1];

  $array2 = array(

    "France" => "French",
    "USA" => "Engliosh",
    "Germany" => "German"

  );

  unset($array2["France"]);
  print_r($array2) ;

  echo sizeOf($array2);
?>
