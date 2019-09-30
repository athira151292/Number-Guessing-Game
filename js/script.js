window.onload = function() {
  var randomVal = Math.floor((Math.random() * 100) + 1),
  	  output = document.getElementById("guess-message"),
  	  count = 0;
  document.querySelector("button").onclick = function() {
    var value = parseInt(document.querySelector(".guess-input").value);
    if (checkValidity(value)) {
	    if (count < 10) {
		    if (value < randomVal) 
		        output.innerHTML = "The guessed value is smaller.";
		    else if (value === randomVal) {
					switch(count) {
						case 0:
							output.innerHTML ="Yayyy!! Right answer.You guessed it in " + (count+1) + "st attempt";
							break;
						case 1:
							output.innerHTML ="Yayyy!! Right answer.You guessed it in " + (count+1) + "nd attempt";
							break;
						case 2:
							output.innerHTML ="Yayyy!! Right answer.You guessed it in " + (count+1) + "rd attempt";
							break;
						default:
							output.innerHTML ="Yayyy!! Right answer.You guessed it in " + (count+1) + "th attempt";
							break;
					}
				}
		    else 
		    	output.innerHTML = "The guessed value is larger.";
		    count = count + 1;
		 }
		 else 
		 	output.innerHTML = "Your 10 attempts are over";
	}
  }

  function checkValidity(value) {
  	if (value > 100 || value < 1) {
  		output.innerHTML = "Value should be between 1 and 100";
  		return false;
  	}
  	else 
  		return true;
  }
}