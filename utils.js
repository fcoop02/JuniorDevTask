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
exports.odrediSpol = () => {
  let spol;
  if (Math.floor(Math.random() * 2) < 1) {
    spol = "Muško";
  } else {
    spol = "Žensko";
  }
  return spol;
};

exports.odrediMuskoIme = () => {
  let ime = muskaImena[Math.floor(Math.random() * muskaImena.length)];
  return ime;
};

exports.odrediZenskoIme = () => {
  let ime = zenskaImena[Math.floor(Math.random() * zenskaImena.length)];
  return ime;
};

exports.odrediPrezime = () => {
  let prezime =
    najcescaPrezimena[Math.floor(Math.random() * najcescaPrezimena.length)];
  return prezime;
};

exports.genrandomDate = (startDate, endDate) => {
  const timeDiff = endDate.getTime() - startDate.getTime();
  const randTime = Math.random() * timeDiff;
  const randDate = new Date(startDate.getTime() + randTime);
  return randDate;
};

exports.odrediGod = (birthday, now) => {
  const diff = now.getTime() - birthday.getTime();
  const currentAge = Math.floor(diff / 31557600000);
  return currentAge;
};

exports.swap = (array) => {
  [array[0], array[1]] = [array[1], array[0]];
  return array;
};

function quickSort(array, prezime) {
  if (array.length <= 1) return array;

  const pivot = array[0];
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i][prezime] < pivot[prezime]) left.push(array[i]);
    else right.push(array[i]);
  }

  return [...quickSort(left, prezime), pivot, ...quickSort(right, prezime)];
}

exports.addFiveYears = (date) => {
  const arr = date.split("/");
  const dateObj = new Date(arr[2] + "-" + arr[1] + "-" + arr[0]);
  return dateObj.setFullYear(dateObj.getFullYear() + 5);
};

exports.quickSort = quickSort;
