// using prof's js function since it is more flexiable
function get_username(ck) {
  // First make sure the string at least have "username" as a substring
  if (ck.indexOf('username=') > -1) {
    // clean up the space 
    ck = ck.replace(/\s/g, '');
    //split the string into substrings
    let ck_arr = ck.split(";");
    for (i = 0; i < ck_arr.length; ++i) {
      // our target substring should start with "username="
      if (ck_arr[i].indexOf('username=') === 0) {
        //return waht is left in this piece of substring
        return ck_arr[i].substr('username='.length);
      }
    }
  }
  return "";
}



