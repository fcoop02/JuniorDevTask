const femaleNames = [
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

const maleNames = [
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

const commonLastName = [
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
exports.MaleFemale = () => {
  let s;
  if (Math.floor(Math.random() * 2) < 1) {
    s = "Muško";
  } else {
    s = "Žensko";
  }
  return s;
};

exports.genMaleName = () => {
  let name = maleNames[Math.floor(Math.random() * maleNames.length)];
  return name;
};

exports.genFemaleName = () => {
  let name = femaleNames[Math.floor(Math.random() * femaleNames.length)];
  return name;
};

exports.genLastName = () => {
  let lastName =
    commonLastName[Math.floor(Math.random() * commonLastName.length)];
  return lastName;
};

exports.genrandomDate = (startDate, endDate) => {
  const timeDiff = endDate.getTime() - startDate.getTime();
  const randTime = Math.random() * timeDiff;
  const randDate = new Date(startDate.getTime() + randTime);
  return randDate;
};

exports.genYear = (birthday, now) => {
  const diff = now.getTime() - birthday.getTime();
  const currentAge = Math.floor(diff / 31557600000);
  return currentAge;
};

exports.swap = (array) => {
  [array[0], array[1]] = [array[1], array[0]];
  return array;
};

function quickSort(array, lastName) {
  if (array.length <= 1) return array;

  const pivot = array[0];
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i][lastName] < pivot[lastName]) left.push(array[i]);
    else right.push(array[i]);
  }

  return [...quickSort(left, lastName), pivot, ...quickSort(right, lastName)];
}

exports.addFiveYears = (date) => {
  const arr = date.split("/");
  const dateObj = new Date(arr[2] + "-" + arr[1] + "-" + arr[0]);
  return dateObj.setFullYear(dateObj.getFullYear() + 5);
};

exports.quickSort = quickSort;
