function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234'
}

function displayError(msg) {
	// display error message
	document.querySelector('.errorMsg').innerHTML = msg
}

function submitHandler(event) {
	event.preventDefault()
	console.log(this.cardNumber.value)
    const month = parseInt(this.cardMonth.value, 10);
    const year = parseInt(this.cardYear.value, 10);
    const now = new Date();
    const cardExp = new Date(year + 2000, month - 1);
	// clear any previous errors
	displayError('')
	// check credit card number
	if (isNaN(this.cardNumber.value)) {
		// it is not a valid number
		errorMsg += "Card number is not a valid number.\n";
	} else if (!isCardNumberValid(this.cardNumber.value)) {
		// it is a number, but is it valid?
		errorMsg += "Card number is not a valid card number.\n";
	}

    if (isNaN(month) || month < 1 || month > 12) {
        console.log("Month:", month);
        errorMsg += "Month must be a number between 01 and 12.\n";
    } else if (now >= cardExp) {
        errorMsg += "Your expiration date has already passed.\n";
    }

	if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg)
		return false
	}

	return true
}

document.querySelector("#creditCardForm").addEventListener('submit', submitHandler);
let errorMsg = "";