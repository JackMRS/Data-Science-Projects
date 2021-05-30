window.onload = function() {
  document.getElementById("name").defaultValue = get_username(document.cookie);
  };


function check_username(e) {
  //make sure it is not empty
  if (!e) {
    alert("Please enter a username!");
    return;
  }

  let alert_str = "";

  // collect all error messages
  if (e.length < 5) {
    alert_str = alert_str + "Username must be 5 characters or longer.\n";
  }
  if (e.length > 40) {
    alert_str = alert_str + "Username cannot be longer than 40 characters.\n";
  }
  if (e.indexOf(" ") > -1) {
    alert_str = alert_str + "Username cannot contain spaces.\n";
  }
  if (e.indexOf(",") > -1) {
    alert_str = alert_str + "Username cannot contain comma\n";
  }
  if (e.indexOf(";") > -1) {
    alert_str = alert_str + "Username cannot contain semicolons";
  }
  // only move on if alert is an empty string = no alert
  if (alert_str) {
    alert(alert_str);
    return;
  }
  // finnaly check for strange characters
  if (!e.match(/^([a-z0-9\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\]\{\}\:\'\|\`\~\<\.\>\/\?]+)$/i)) {
    alert("Username can only use characters from the following string: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\]\{\}\:\'\|\`\~\<\.\>\/\?");
    return;
  }
  // After the usernanme passes all these tests, create the cookie
  update_username(e);
  // redirect to shut the box
  window.location.href = "shut_the_box.php";
}


function update_username(username) {
  // delete the previous cookie
  document.cookie = `username=${username}; expires=${past()}; path=/`;
  // create new cookie with the default path 
  document.cookie = `username=${username}; expires=${hour_in_future()}; path=/`;
}

function hour_in_future() {
  let hour_in_future = new Date();
  hour_in_future.setHours(hour_in_future.getHours() + 1);
  return hour_in_future.toUTCString();
}

function past() {
  const past = new Date(1);
  return past.toUTCString();
  }


