<?php
  require 'app/start.php';

  if (empty($_GET['page'])) {
    $page = false;
  }
  else {
    $slug = $_GET['page'];

    $page = $con->prepare("
      SELECT *
      FROM pages
      WHERE slug = ?
    ");

    $page->bind_param("s", $slug);

    $page->execute();

    $result = $page->get_result();

    var_dump($result);
  }

?>
