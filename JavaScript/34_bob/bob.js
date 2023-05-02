//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
	const trimmedMessage = message.trim();
    const isUppercase = trimmedMessage === trimmedMessage.toUpperCase() && trimmedMessage !== trimmedMessage.toLowerCase();
    const isQuestion = trimmedMessage.slice(-1) === '?';
  
    if (!trimmedMessage) return 'Fine. Be that way!';
  
	if (isQuestion && isUppercase) return 'Calm down, I know what I\'m doing!';
    
    if (isQuestion) return 'Sure.';
	
    if (isUppercase) return 'Whoa, chill out!';
	
    return 'Whatever.';
};
