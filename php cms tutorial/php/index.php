
<?php

  require 'app/start.php';

  $pages = $con->query("
    SELECT id, label, slug
    FROM pages
  ")->fetch_all(MYSQLI_ASSOC);

  require VIEW_ROOT . '/home.php';

?>
