import fs from "fs";

// const proshop = fetch("https://www.proshop.dk/Baerbar-computer")
//   .then((res) => res.text())
//   .then((body) => {
//     console.log(body);
//   });

// const proshop = await fetch("https://www.proshop.dk/Baerbar-computer");
// const respose = await proshop.text();
// fs.writeFileSync("index.html", respose);

import { load } from "cheerio";

const htmlPageString = fs.readFileSync("index.html", "utf-8").toString();
const $ = load(htmlPageString);

$("#products [product]").each((index, element) => {
  const name = $(element).find(".site-product-link h2").text();
  const description = $(element).find(".site-product-link").text();
  const price = $(element).find(".site-currency-lg").text();
  console.log(name);
//   console.log(description);
  console.log(price);
  console.log("====");
});
