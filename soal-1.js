const changeWord = (selectedText, changedText, text) => {
  let result;
  if (kalimat1 === text) {
    result = kalimat1.replace(selectedText, changedText);
  } else {
    result = kalimat2.replace(selectedText, changedText);
  }
  return result;
};

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));
