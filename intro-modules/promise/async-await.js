import { readFile } from "fs";

const getText = (pathFile) => {
  return new Promise((resolve, reject) => {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

// secuencial
const read = async () => {
  console.log('Leyendo primer archivo...')
  const res = await getText("./data/strean.txt");
  console.log('uno:', res)
  console.log('----> procesar cosas <----')
  console.log('Leyendo segundo archivo...')
  const res2 = await getText("./data/second.txt");
  console.log('dos:', res2)
};

read();
