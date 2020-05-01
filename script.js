

function myKeyPress(e){

  /* TODO: retrieve the value from the text input */
  var mytextbox = "my textbox element";


  // TODO: set the value of the textbox with the formatted value

  var keyPressed;
  if(window.event) { // IE
    keyPressed = e.keyCode;
  } else if(e.which){ // Netscape/Firefox/Opera
    keyPressed = e.which;
  }

  var x = String.fromCharCode(keyPressed);
  var y = formatPhoneNumber(document.getElementById("textinput").value);
  document.getElementById('formattedNumber').value = y;

  console.log("Key Pressed = " + x);
  console.log("  Formatted = " + y);

  if ( x.length==10) {
    var y = formatPhoneNumber(x);
  
  }



  // TODO: Add a condition to ignore entries beyond 10 digits

}

function formatPhoneNumber(value){

  /* TODO:  Use replace function to ignore extra - character */

  if(value.length > 3 && value.length <= 6)
    value = value.slice(0,3) + "-" + value.slice(3);
  else if(value.length > 6)
    value = value.slice(0,3) + "-" + value.slice(3,6) + "-" + value.slice(6);

  return value;
}
