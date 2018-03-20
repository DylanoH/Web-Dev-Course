<?php require VIEW_ROOT . '/templates/header.php'; ?>

  <h2>Edit page</h2>

  <form class="" action="<?php echo BASE_URL; ?>/admin/edit.php" method="post" autocomplete="off">
    <label for="title">
      Title
      <input type="text" name="title" id="title" value="<?php echo e($page['title']); ?>">
    </label>
    <label for="label">
      Labels
      <input type="text" name="label" id="label" value="<?php echo e($page['label']); ?>">
    </label>
    <label for="slug">
      Slug
    <input type="text" name="slug" id="slug" value="<?php echo e($page['slug']); ?>">
    </label>
    <label for="body">
      Body
      <textarea name="body" id="body" rows="10" cols="30"><?php  echo e($page['body']); ?></textarea>
    </label>

    <input type="hidden" name="id" value="<?php echo e($page['id']); ?>">

    <input type="submit" value="Edit page">
  </form>

<?php require VIEW_ROOT . '/templates/footer.php'; ?>
