function maskedPlaceholder(name) {
	// ie fix
	if(document.getElementsByClassName == undefined) { 
	   document.getElementsByClassName = function(cl) { 
	      var retnode = []; 
	      var myclass = new RegExp('\\b'+cl+'\\b'); 
	      var elem = this.getElementsByTagName('*'); 
	      for (var i = 0; i < elem.length; i++) { 
	         var classes = elem[i].className; 
	         if (myclass.test(classes)) { 
	            retnode.push(elem[i]); 
	         } 
	      } 
	      return retnode; 
	   } 
	};
	// ie fix

	var placeholderMask = document.getElementsByClassName(name);
	
	function maskedPlaceholder(currentInput, dataPlaceholder) {
		if (document.addEventListener) {                
			currentInput.addEventListener('focus', function() {
				if (currentInput.value == dataPlaceholder) { 
					currentInput.value = "";
			  	}
			});

			currentInput.addEventListener('blur', function() {
				if (currentInput.value == "") { 
					currentInput.value = dataPlaceholder;
			  	}
			});
		} else if (document.attachEvent) {              
			currentInput.attachEvent('onfocus', function() {
				if (currentInput.value == dataPlaceholder) { 
					currentInput.value = "";
			  	}
			});

			currentInput.attachEvent('onblur', function() {
				if (currentInput.value == "") { 
					currentInput.value = dataPlaceholder;
			  	}
			});
		}
	};

	for (var i = 0; i < placeholderMask.length; i++) { 
	    	dataPlaceholder = placeholderMask[i].getAttribute("data-placeholder"); 
		placeholderMask[i].setAttribute("value", dataPlaceholder);
		maskedPlaceholder(placeholderMask[i], dataPlaceholder);
	}
};
