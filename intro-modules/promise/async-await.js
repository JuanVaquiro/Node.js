const { readFile } = require("fs");

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

const read = async () => {
  const res = await getText("./data/first.txt", "utf-8");
  console.log(res);
};

read();
