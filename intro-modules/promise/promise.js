const { readFile } = require("fs");

new Promise((resolve, reject) => {
  readFile("./data/first.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});

const getText = (pathFile) => {
  return new Promise((resolve, reject) => {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data)
    });
  });
};

getText('./data/second.txt')
  .then((res) => console.log(res)) 
  .catch((err) => console.log(err))