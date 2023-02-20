// console.log("Hello World");
// console.log(5 != 5);
// console.log(typeof 25);

// const chovek = {
//   name: "Jhon",
//   surname: "Doe",
// };

// console.log(chovek);

// a = 10;
// console.log(a);
a = 12;
// console.log(a);
const b = 15;
// console.log(b);

// let niza = [1, true, 2.5, "zdravo"];
// console.log(niza);

let student = {
  ime: "Pero",
  prezime: "Nakov",
  vozrast: 25,
};

console.log(student);

student.prezime = "Perovski";
console.log(student);

function testFn(a, b) {
  console.log(" a: ", a);
  console.log(" b: ", b);
  return "Test fn initiated";
}

console.log(testFn(a, b));
let test_fn = testFn(a, b);
console.log(test_fn);

const testFn1 = () => {
  console.log("test fn 1 initiated. This is an arrow funciotn");
};
testFn1();

// const testFn2 = (b, a = 25) => {
//   return a + b;
// };

// console.log(testFn2(50, 20));

const testFn3 = (o = {}) => {
  o.ime = "Zhivko";
  console.log(o);
};

const s = { ime: "zlate", prezime: "Zlatevski" };
testFn3(s);
console.log(s);

let ucenik = { ime: "Marko", ocena: 4 };
let ucenik2 = ucenik;

console.log(ucenik);
ucenik.ime = "Vlado";
console.log(ucenik);
console.log(ucenik2);

const convert = (type, value) => {
  let returnValue = null;
  switch (type) {
    case "c2f":
      return (value * 9) / 5 + 32;
      break;
    case "f2c":
      return ((value - 32) * 5) / 9;
      break;
    default:
      console.log("Cannont convert. The conversion type does not exist.");
      break;
  }
  return returnValue;
};

let temp = 25;
console.log(convert("c2f", temp));
let res = convert("p2p", temp);
console.log(res);

// c2f vrednost * 9/5 +32
// f2c (vrednost - 32) * 5/9

// definirajte dva objekti na uchenici
// da imaat ime prezime ocenka
// dokolku prviot ucenik ima pogolema ocena od vtoriot pechatete "Ime na prv ucenik, pa prezime na prv ucenik e podobar od ime na vtor ucenik pa prezime na vtor ucenik"
// dokolku e obratno ispecate obratno, dokolku se isti ispechatete ucenik 1 ima isto znaenje kako i ucenik 2

const ucenik1 = {
  ime: "Ivica",
  prezime: "Neskoski",
  ocenka: 4,
};

const ucenik3 = {
  ime: "Pero",
  prezime: "Perovski",
  ocenka: 5,
};

if (ucenik1.ocenka > ucenik3.ocenka) {
  console.log(
    `${ucenik1.ime} ${ucenik1.prezime} e podobar od ${ucenik3.ime} ${ucenik3.prezime}`
  );
} else if (ucenik1.ocenka < ucenik3.ocenka) {
  console.log(
    `${ucenik3.ime} ${ucenik3.prezime} e podobar od ${ucenik1.ime} ${ucenik1.prezime}`
  );
}

ucenik1.ocenka > ucenik3.ocenka
  ? console.log("asd")
  : ucenik1.ocenka < ucenik3.ocenka
  ? console.log("asd")
  : console.log(asd);
//

const niza1 = ["book1", "book2", "book3"];

for (let i = 0; i < niza1.length; i++) {
  console.log(niza1[i]);
}

let c = 0;
console.log(c);
c++;
console.log(c);
console.log(c++);
console.log(++c);
