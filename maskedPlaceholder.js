var placeholderMask = document.getElementsByClassName("placeholder-mask");


function maskedPlaceholder(currentInput, dataPlaceholder) {
	currentInput.addEventListener('focus', function() {
		currentInput.value = "";
	});

	currentInput.addEventListener('blur', function() {
			if (currentInput.value == "") { 
			currentInput.value = dataPlaceholder;
	  	}
	});
};


for (var i = 0; i < placeholderMask.length; i++) { 
    dataPlaceholder = placeholderMask[i].getAttribute("data-placeholder"); 
	
    placeholderMask[i].setAttribute("value", dataPlaceholder);

	maskedPlaceholder(placeholderMask[i], dataPlaceholder);
}
