import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['My uncle ', 'My dog ', 'I ', 'The Teacher ', 'I ', 'My neighbor '];
  let action = ['lost ', 'eat ', 'have ', 'ask me ', 'forgot ', 'stole me '];
  let what = ['his IPhone ', 'my homework ', 'a flight ', 'to present my project ', 'watching your video ', 'my money '];
  let when = ['yesterday', 'this afternoon', 'this weekend', 'this friday', 'after you sent me', 'in the moorning'];

  let texto_excusa = document.getElementById("Exusa_mayor");
  texto_excusa.innerHTML = who[Math.floor(Math.random()*who.length)]+action[Math.floor(Math.random()*action.length)]+what[Math.floor(Math.random()*what.length)]+when[Math.floor(Math.random()*when.length)];

  console.log(texto_excusa.innerHTML);
};
