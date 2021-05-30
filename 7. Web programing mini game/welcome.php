#!/usr/local/bin/php
<?php
session_save_path(__DIR__.'/sessions/');
session_name('login_w_password');
session_start();

$welcome = isset($_SESSION['loggedin']) && $_SESSION['loggedin'];

if(!$welcome){
  header('Location: login.php');
  exit;
}
?>

<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>Shut The Box</title>
    <script src="username.js"></script>
    <script src="welcome.js" defer></script>
  </head>

  <body>
    <header>
      <h1>Welcome! Ready to play “Shut The Box”?</h1>
    </header>

    <main>
      <section>
        <h2>
          Choose a username
        </h2>
        <p>
          So that we can post your score(s), please choose a username.
        </p>
        <fieldset>
          <label for="name">Username:</label>
          <input id="name" name="username" type="text">
          <input type="button" value="Submit" onclick="check_username(document.getElementById('name').value);">
        </fieldset>
      </section>


    </main>

    <footer>
      <hr>
      <small>
        &copy; Yueshuwei Wu, 2020
      </small>
    </footer>
  </body>

</html>
