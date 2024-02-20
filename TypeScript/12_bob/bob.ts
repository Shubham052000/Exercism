export function hey(message: string): string {
  const formattedMessage = message.replaceAll(" ", "").replaceAll("\t", "").replaceAll("\n", "").replaceAll("\r", "")
  const isNumericString = message === message.toUpperCase() && message === message.toLowerCase();
  const isUpper = message === message.toUpperCase() && !isNumericString;

  if(formattedMessage.length === 0){
   return "Fine. Be that way!" 
  }
  if(formattedMessage.at(-1) === "?" && isUpper){
    return "Calm down, I know what I'm doing!"
  }
  if(formattedMessage.at(-1) === "?"){
    return "Sure."
  }
  if(isUpper){
    return "Whoa, chill out!"
  }
  
  return "Whatever."
}
