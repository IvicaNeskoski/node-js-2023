// const { rejects } = require("assert");
const fs = require("fs");
// const { resolve } = require("path");

const fileRead = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
};

(async () => {
  try {
    let dataString = await fileRead("studenti.json");
    let studenti = JSON.parse(dataString);

    console.log(studenti);

    let prosek = [
      ...studenti.sort((a, b) => {
        if (a.prosek > b.prosek) {
          return -1;
        } else if (a.prosek < b.prosek) {
          return 1;
        }

        return 0;
      }),
    ];
    //    let sortIme = [...studenti.sort((a, b) => )
    //     if (a.ime.charAt(0) > b.ime.charAt(0)) )]
    //       return 1;
    //     } else if (a.ime < b.ime) {
    //       return -1;
    //     }
    //     return 0;
    //   }),
    // ]; da se prekopira celo
    console.log(prosek);
  } catch (err) {
    console.log(err);
  }
})();
