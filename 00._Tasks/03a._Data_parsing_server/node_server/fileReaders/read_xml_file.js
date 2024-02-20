import xml2js from "xml2js";
import fs from "fs";
import { getFileURLPath } from "../util.js";

export const readXMLFile = (fileName) => {
  let re;
  const parser = new xml2js.Parser();
  const file = fs.readFileSync(getFileURLPath(fileName), "utf8");
  parser.parseString(file, function (err, result) {
    re = result;
  });

  return re;

  // var parser = new xml2js.Parser();
  // return parser
  //   .parseStringPromise(file)
  //   .then(function (result) {
  //     console.log(result);
  //   })
  //   .catch(function (err) {
  //     // Failed
  //   });
};
