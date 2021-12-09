let input =
  "49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d";

let solution = Buffer.from(input, "hex").toString("base64");
console.log(solution);

let solution2 = Buffer.from(input, "hex").toString("ascii");
console.log(solution2); // scary
