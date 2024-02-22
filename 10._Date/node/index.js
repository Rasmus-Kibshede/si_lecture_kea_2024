// 2024-02-22T07:32:17.415Z
// Z står for zulu = zero = +0 i tidszone

console.log(new Date());
console.log(Date());

// Sekunder fra 1 januar 1970 = 1708587341603
console.log(Date.now());

// ISO 8601 = UTC YYYY-MM-DD
// Javascript og python følger denne standard, men det gør c++ ikke


const date = new Date();

const danishDate = new Intl.DateTimeFormat("da-dk").format(date);
console.log(danishDate);

const usDate = new Intl.DateTimeFormat("en-us").format(date);
console.log(usDate);