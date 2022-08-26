let kalimat1 = "Andini sangat mencintai kamu selamanya";
let kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

const changeWord = (selectedText, changedText, text) => {
  let result;
  if (kalimat1 === text) {
    result = kalimat1.replace(selectedText, changedText);
  } else {
    result = kalimat2.replace(selectedText, changedText);
  }
  return result;
};

console.log(changeWord("Andini", "Frans", kalimat1));
