<?php

  $link = mysqli_connect("shareddb1e.hosting.stackcp.net", "users-1-32326cd8", "ApsdE5JUQY8v5GuS", "users-1-32326cd8");

  if (mysqli_connect_error()) {
    die ("There was an error connecting to the database");
  }

  // $query = "INSERT INTO `users` (`email`, `password`) VALUES('priscillahartman@gmail.com', 'paard7')";
  // mysqli_query($link, $query);

  // $query = "UPDATE `users` SET email = 'dylanohartman@gmail.com' WHERE id = 1 LIMIT 1";
  // mysqli_query($link, $query);

  $query = "UPDATE `users` SET password = '8kUeeRdhe9Wc2Zp3' WHERE email = 'dylanohartman@gmail.com' LIMIT 1";
  mysqli_query($link, $query);

  $query = "SELECT * FROM users";
  if($result = mysqli_query($link, $query)) {
    $row = mysqli_fetch_array($result);
    echo "your email is: ".$row[email]." and your password is ".$row[password];
  }

 ?>
