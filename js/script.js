window.onload = function() {
  var randomVal = Math.floor((Math.random() * 100) + 1);
  document.querySelector("button").onclick = function() {
    var value = parseInt(document.querySelector(".guess-input").value);
    
    alert(randomVal);
    if (value < randomVal) 
        document.getElementById("guess-message").innerHTML = "The guessed value is smaller.";
    else if (value === randomVal)
    	document.getElementById("guess-message").innerHTML = "Right answer";
    else 
    	document.getElementById("guess-message").innerHTML = "The guessed value is larger.";
  }
}