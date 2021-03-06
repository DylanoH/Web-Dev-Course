<?php

$error = "";
$successMessage = "";

  if ($_POST) {

      if (!$_POST["email"]) {

          $error .= "An email address is required.<br>";

      }

      if (!$_POST["content"]) {

          $error .= "The content field is required.<br>";

      }

      if (!$_POST["subject"]) {

          $error .= "The subject is required.<br>";

      }

      if ($_POST['email'] && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) === false) {

          $error .= "The email address is invalid.<br>";

      }

      if ($error != "") {

        $error = '<div class="alert alert-danger" role="alert"><p>There were error(s) in your form:</p>' . $error . '</div>';
      }
      else {

        $emailTo = "dylano.hartman@gmail.com";
        $subject = $_POST['subject'];
        $content = $_POST['content'];
        $headers = "From: ".$_POST['email'];

        if (mail($emailTo, $subject, $content, $headers)) {
          $successMessage = '<div class="alert alert-success" role="alert">Your message was sent, we\'ll get back to you ASAP!</div>';
        }
        else {
          $error = '<div class="alert alert-danger" role="alert"><p><strong>Your message couldn\'t be sent - please try again later</div>';
        }


      }
  }
?>


<!DOCTYPE html>
<html>
  <head>
    <title></title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <script type="text/javascript" src="jquery/jquery.min.js"></script>

    <link rel="stylesheet" href="stylesheets/style.css">
  </head>

  <body>

    <div class="container">
      <h1>Get in touch!</h1>

        <div id="error"><?php echo $error; ?></div>

        <form method="post">
          <fieldset class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="Enter email">
            <small class="text-muted">We'll never share your email with anyone else.</small>
          </fieldset>
          <fieldset class="form-group">
            <label for="subject">Subject</label>
            <input type="text" class="form-control" id="subject" name="subject" >
          </fieldset>
          <fieldset class="form-group">
            <label for="exampleTextarea">What would you like to ask us?</label>
            <textarea class="form-control" id="content" name="content" rows="3"></textarea>
          </fieldset>
          <button type="submit" id="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>

    <script src="jquery/jquery.easing.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
    <script type="text/javascript" src="javascript/script.js"></script>
  </body>
</html>
