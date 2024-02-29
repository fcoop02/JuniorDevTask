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

export function odrediMuskoIme() {
  let ime = muskaImena[Math.floor(Math.random() * muskaImena.length)];
  return ime;
}

export function odrediZenskoIme() {
  let ime = zenskaImena[Math.floor(Math.random() * zenskaImena.length)];
  return ime;
}

export function odrediPrezime() {
  let prezime =
    najcescaPrezimena[Math.floor(Math.random() * najcescaPrezimena.length)];
  return prezime;
}

export function genrandomDate(startDate, endDate) {
  const timeDiff = endDate.getTime() - startDate.getTime();
  const randTime = Math.random() * timeDiff;
  const randDate = new Date(startDate.getTime() + randTime);
  return randDate;
}

export function odrediGod(birthday, now) {
  const diff = now.getTime() - birthday.getTime();
  const currentAge = Math.floor(diff / 31557600000);
  return currentAge;
}