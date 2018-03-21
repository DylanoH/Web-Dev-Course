<?php

  require '../app/start.php';

  $pages = $con->query("
    SELECT id, label, title, slug
    FROM pages
    ORDER BY created DESC
  ")->fetchAll(PDO::FETCH_ASSOC);

  require VIEW_ROOT . '/admin/list.php'

 ?>
