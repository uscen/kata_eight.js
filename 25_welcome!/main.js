// The Database
let databseApi = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function greet(languge) {
  let lang;
  switch (languge) {
    case "english":
      lang = databseApi.english;
      break;
    case "czech":
      lang = databseApi.czech;
      break;
    case "danish":
      lang = databseApi.danish;
      break;
    case "dutch":
      lang = databseApi.dutch;
      break;
    case "estonian":
      lang = databseApi.estonian;
      break;
    case "finnish":
      lang = databseApi.finnish;
      break;
    case "danish":
      lang = databseApi.danish;
      break;
    // ...
    default:
      lang = databseApi.english;
  }
  return lang;
}
console.log(greet("english"));
console.log(greet("dutch"));
console.log(greet("czech"));

//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 02                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
function greet02(languge) {
  let welcomeMsg;
  if (databseApi.hasOwnProperty(languge)) {
    welcomeMsg = databseApi[languge];
  } else {
    welcomeMsg = databseApi["english"];
  }
  return welcomeMsg;
}
console.log(greet02("english"));
console.log(greet02("dutch"));
console.log(greet02("czech"));
