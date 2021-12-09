/* challenge 1 */
let input =
  "49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d";

let solution = Buffer.from(input, "hex").toString("base64");
console.log(solution);

let solution2 = Buffer.from(input, "hex").toString("ascii");
console.log(solution2); // scary

/* challenge 2 */
let input1 = "1c0111001f010100061a024b53535009181c";
let input2 = "686974207468652062756c6c277320657965";

const fixedXOR = (str1, str2) => {
  str1 = str1.split("");
  str2 = str2.split("");
  let a = [];
  let b = [];
  for (var i = 0; i < str1.length; i += 2) {
    a.push(str1[i].concat(str1[i + 1]));
  }
  for (var i = 0; i < str2.length; i += 2) {
    b.push(str2[i].concat(str2[i + 1]));
  }
  a = a
    .map((e) => parseInt(e, 16).toString(2))
    .map((e) => {
      while (e.length < 8) {
        e = "0" + e;
      }
      return e;
    })
    .reduce((a, b) => a.concat(b));
  b = b
    .map((e) => parseInt(e, 16).toString(2))
    .map((e) => {
      while (e.length < 8) {
        e = "0" + e;
      }
      return e;
    })
    .reduce((a, b) => a.concat(b));

  let xR = [];
  let aR = [];

  for (var i = 0; i < a.length; i++) {
    xR.push(a[i] ^ b[i]);
  }

  xR = xR.join("");

  for (var i = 0; i < xR.length; i += 8) {
    aR.push(xR.slice(i, i + 8));
  }
  aR = aR.map((e) => parseInt(e, 2).toString(16)).join("");
  return aR;
};
console.log(fixedXOR(input1, input2));
