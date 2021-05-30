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

if(!isset($_COOKIE['username'])){
  header('Location: welcome.php');
  exit;
}

?>

<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>Shut the box</title>
    <script src="shut_the_box.js" defer></script>
  </head>
  
   <body>

    <header>
      <h1>Shut The Box</h1>
    </header>

    <main>
      <section>
        <h2>
          The Rules
        </h2>

        <ol type="i">
          <li>Each turn, you role the dice (or die) and select 1 or more boxes which sum to the value of your roll.
          </li>
          <li>
            You will not be allowed to pick the boxes which you choose on subsequent turns.
          </li>
          <li>
            When the sum of the boxes which are left is less than or equal to 6, you will roll a single die.
          </li>
          <li>
            When you cannot make a move or you give up, the sum of the boxes which are left gives your score.
          </li>
          <li>
            Lower scores are better and a score of 0 is called "shutting the box".
          </li>
        </ol>
      </section>

      <section>
        <h2>
          Dice roll
        </h2>
        <fieldset>
          <input type="button" value="Roll dice" onclick="roll_dice();">
          Result:<span></span>
        </fieldset>
      </section>

      <section>
        <h2>
          Box selection
        </h2>
        <table>


          <thead>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox"></td>
              <td><input type="checkbox"></td>
              <td><input type="checkbox"></td>
              <td><input type="checkbox"></td>
              <td><input type="checkbox"></td>
              <td><input type="checkbox"></td>
              <td><input type="checkbox"></td>
              <td><input type="checkbox"></td>
              <td><input type="checkbox"></td>
            </tr>
          </tbody>
        </table>

                    <fieldset>
                          <input type="button" value="Submit box selection" onclick="sum_checked_values();">
                          <input type="button" value="I give up / I can't make a valid move" onclick="finish();">
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