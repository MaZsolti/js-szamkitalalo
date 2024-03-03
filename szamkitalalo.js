let szam;
let felhasznaloTippje;
const startBtn = document.querySelector(".js-start");
const tippBtn = document.querySelector(".js-tipp");
const uzenet = document.querySelector(".js-messages");

function veletlenSzam() {
  return Math.floor(Math.random() * 100) + 1;
}
function start() {
  szam = veletlenSzam();
  return (uzenet.innerText = `A játék elkezdődött! Írja be a tippjét a beviteli mezőbe, és nyomja meg a "Tippelek!" gombot!`);
}
startBtn.addEventListener("click", start);

function beolvasas() {
  return document.querySelector("[name=tipp]").value;
}

function osszevetes() {
  let instrukcio = "";
  felhasznaloTippje = Number(beolvasas());
  if (szam < felhasznaloTippje) {
    instrukcio = "A tippje nagyobb a kitalálandó számnál.";
  } else if (szam > felhasznaloTippje) {
    instrukcio = "A tippje kissebb a kitalálandó számnál.";
  } else {
    instrukcio = "Gratulálok kitalálta a számot!";
  }
  uzenet.innerText = instrukcio;
  beolvasas.value = "";
}

tippBtn.addEventListener("click", osszevetes);
