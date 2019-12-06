// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

 	// Check if Diner's Club
 	// has prefix of 38 or 39 and length of 14
 	// need 2 tests
	if((cardNumber.startsWith('38') || cardNumber.startsWith('39')) &&(cardNumber.length === 14)){
		return 'Diner\'s Club';
	}

	// Check if American Express
	// has prefix of 34 or 37 and length of 15
	// need 2 tests
	if((cardNumber.startsWith('34') || cardNumber.startsWith('37')) &&(cardNumber.length === 15)){
		return 'American Express';
	}

	// Check if Switch
	// has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19
	// if prefix is long, then choose Switch over Visa (reason why this code is right above Visa)
	if(cardNumber.startsWith('4903') || cardNumber.startsWith('4905') || cardNumber.startsWith('4911') ||
		cardNumber.startsWith('4936') || cardNumber.startsWith('564182') || cardNumber.startsWith('633110') ||
		cardNumber.startsWith('6333') || cardNumber.startsWith('6759')){
		
		if(cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19){
			return 'Switch'
		}
	}


	// Check if Visa
	// has prefix of 4 and length of 13, 16, or 19
	// need 3 tests
	if(cardNumber.startsWith('4') && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)){
		return 'Visa';
	}

	// Check if MasterCard
	// has prefix of 51~55 and length of 16
	// need 5 tests
	if(cardNumber.length === 16){
		var prefix = parseInt(cardNumber.substring(0,2));
		if(51 <= prefix && prefix <= 55 ){
			return 'MasterCard';
		}
	}

	// Check if Discover
	// has prefix of 6011, 644~649, or 65 and length of 16 or 19
	// need 16 tests
	if(cardNumber.length === 16 || cardNumber.length === 19){
		if(cardNumber.startsWith('6011') || cardNumber.startsWith('65')){
			return 'Discover';
		}
		
		var prefix = parseInt(cardNumber.substring(0,3));
		if(644<= prefix && prefix <= 649){
			return 'Discover';
		}
	}

	// Check if Maestro
	// has prefix of 5018, 5020, 5038, 6304 and length of 12~19
	// need 32 tests
	if((cardNumber.startsWith('5018') || cardNumber.startsWith('5020') || cardNumber.startsWith('5038') || cardNumber.startsWith('6304')) && (12 <= cardNumber.length && cardNumber.length <= 19)){
		return 'Maestro';
	}

	// Check if China UnionPay
	// has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19
	if(16 <= cardNumber.length && cardNumber.length <= 19){
		var prefix = parseInt(cardNumber.substring(0,6));
		if(622126 <= prefix <= 622925){
			return 'China UnionPay';
		}
		prefix = parseInt(cardNumber.substring(0,3))
		if(624 <= prefix <= 626){
			return 'China UnionPay';
		}
		prefix = parseInt(cardNumber.substring(0,4))
		if(6282 <= prefix <= 6288){
			return 'China UnionPay';
		}
	}
};


