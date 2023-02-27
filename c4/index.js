// const path = require("path");

// // get the base filename
// console.log(__filename);
// console.log(path.basename(__filename));

// console.log(__filename.split("\\")[__filename.split("\\").length - 1]);

// // Directory name
// console.log(path.dirname(__filename));
// console.log(__dirname);

// // File extension name
// console.log(path.extname(__filename));

// console.log(path.parse(__filename)); //  rezultat root: 'C:\\',dir: 'C:\\IvicaNeskoski\\node-js-2023\\c4',base: 'index.js',ext: '.js',name: 'index'

// console.log(path.parse(__filename).ext); // isto ko i pogore

// // concatenate paths
// //  ../c4/hello.html
// console.log(path.join(__dirname, "test", "hello.html"));

const fs = require("fs");
const path = require("path");

// const fileWrite = (filename, data) => {
//   return new Promise((success, fail) => {
//     fs.writeFile(filename, data, (err) => {
//       if (err) return fail(err);
//       return success();
//     });
//   });
// };

// fileWrite(path.join(__dirname, "test", "osenki.txt"), "4, 5 , 3, 2, 1, 5")
//   .then(() => {
//     // then==success
//     console.log("SUCCESS!");
//     return fileWrite(
//       path.join(__dirname, "test", "boi.txt"),
//       "crvena, zolta, zelena"
//     );
//   })
//   .then(() => {
//     // then== success
//     console.log("SUCCESS 2!!");
//     return fileWrite(
//       path.join(__dirname, "test", "boi2.txt"),
//       "plava, violetova, plava"
//     );
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const fileRead = (filename) => {
  return new Promise((resolve, reject) => {
    fs.read.File(filename, "utf8", (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
};

fileRead(path.join(__dirname, "test, boi2.txt"))
  .then((data) => {
    console.log("PROMISE RESOLVED");
    console.log(data);
  })
  .catch((err) => {
    console.log("PROMISES REJECTED");
    console.log(err);
  });

(async () => {
  try {
    let ocenki = await fileRead(path.join(__dirname, "test", "ocenki.txt"));
    console.log("ocenki", ocenki);
  } catch (err) {
    console.log(err);
  }
})();
