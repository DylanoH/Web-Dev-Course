<?php

  $emailTo = "dylano.hartman@gmail.com";
  $subject = "Test";
  $body = "Yo!";

  $headers = "From: dylano.hartman@gmail.com";

  if(mail($emailTo, $subject, $body, $headers)) {

    echo "email sent";
  }
  else {
    echo "email failed to sent";
  }


?>
