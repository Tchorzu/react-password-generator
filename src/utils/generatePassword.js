export function generatePassword({ passLength, special, number, bigLetters }) {
  let charArray = "abcdefghijklmnopqrstuvwxyz";
  if (special) {
    charArray += "!@#$%^&*()-=_+[]{}<>?,.|";
  }
  if (number) {
    charArray += "1234567890";
  }
  if (bigLetters) {
    charArray += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  let password = "";

  for (let i = 0; i < passLength; i++) {
    let index = Math.random() * charArray.length;
    password += charArray.charAt(index);
  }

  return password;
}
