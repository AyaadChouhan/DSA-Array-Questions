// Album in Albumns
// You have an object with years 2015-2020 as keys and some albums released for each year as key values. Write a function that takes an album and returns the year in which it was released.

// Examples
// releaseYear("Ode to Joy") ➞ 2019

// releaseYear("Honeymoon") ➞ 2015

// releaseYear("Fake_album") ➞ "Unknown"

function releaseYear(album) {
  const albums = {
    2015: ["Vulnicura", "Honeymoon", "Rebel Heart"],
    2016: ["Lemonade", "Blackstar", "A Moon Shaped Pool"],
    2017: ["Flower Boy", "Antisocialites"],
    2018: ["El Mal Querer", "Someone Out There", "Cranberry", "Kamikaze"],
    2019: ["thank u next", "Magdalene", "Ode to Joy"],
    2020: ["Rough and Rowdy Ways", "folklore", "Future Nostalgia", "Colores"],
  };
  let result = "";
  for (const key in albums) {
    for (const values of albums[key]) {
      if (album === values) {
        result = key;
      }
    }
  }
    return result ? result : "Unknown";
}
console.log(releaseYear("Ode to Joy"));
console.log(releaseYear("Honeymoon"));
console.log(releaseYear("Fake_album"));
// ➞ 2019

// ➞ 2015

// ➞ "Unknown"
