const zenskaImena = [
  "Mia",
  "Nika",
  "Lucija",
  "Mila",
  "Ema",
  "Marta",
  "Rita",
  "Sara",
  "Eva",
  "Dora",
];

const muskaImena = [
  "Luka",
  "Jakov",
  "David",
  "Petar",
  "Ivan",
  "Roko",
  "Fran",
  "Mateo",
  "Niko",
  "Matej",
];

const najcescaPrezimena = [
  "Knežević",
  "Horvat",
  "Kovačević",
  "Pavlović",
  "Blažević",
  "Božić",
  "Lovrić",
  "Babić",
  "Marković",
  "Bošnjak",
  "Grgić",
  "Brkić",
  "Filipović",
  "Vidović",
  "Kovačić",
  "Tomić",
  "Jukić",
  "Novak",
  "Martinović",
  "Petrović",
];

export function odrediSpol() {
  let spol;
  if (Math.floor(Math.random() * 2) < 1) {
    spol = "Muško";
  } else {
    spol = "Žensko";
  }
  return spol;
}

function odrediMuskoIme() {
  let ime = muskaImena[Math.floor(Math.random() * muskaImena.length)];
  return ime;
}

function odrediZenskoIme() {
  let ime = zenskaImena[Math.floor(Math.random() * zenskaImena.length)];
  return ime;
}

function odrediPrezime() {
  let prezime =
    najcescaPrezimena[Math.floor(Math.random() * najcescaPrezimena.length)];
  return prezime;
}

export function genPerson(spol) {
  if (spol == "Muško") {
    const personInfo = {
      Ime: odrediMuskoIme(),
      Prezime: odrediPrezime(),
      DatumRodenja: " ",
      Godine: " ",
      Spol: "Muško",
      GeoLokacija: " ",
    };
    return personInfo;
  } else {
    const personInfo = {
      Ime: odrediZenskoIme(),
      Prezime: odrediPrezime(),
      DatumRodenja: " ",
      Godine: " ",
      Spol: "Žensko",
      GeoLokacija: " ",
    };
    return personInfo;
  }
}
