const data = [1, 2, 3, 4, 5, 6, 7];

function hapusData() {
  setTimeout(function () {
    // hapus salah satu data
    data.pop();
  }, 100);
}

function tampilData() {
  setTimeout(function () {
    // tampilkan semua data
    console.log(data);
  }, 300);
}

// hapusData();
// tampilData();

// callback function
function hapusDataCallback(call) {
  // hapus salah satu data
  setTimeout(function () {
    // hapus salah satu data
    data.pop();
    call();
  }, 700);
}

hapusDataCallback(tampilData);

// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGenerator() {
  return Math.random().toString(36).substr(2, 9);
}

function userIdGeneratedByUser() {
  let length = prompt("Enter the number of characters");
  let number = prompt("Enter the number of ids");
  let result = [];
  for (let i = 0; i < number; i++) {
    result.push(userIdGenerator().substr(0, length));
  }
  return result;
}
console.log(userIdGeneratedByUser());

// Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator() {
  let r = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  return `rgb(${r},${b},${g})`;
}
console.log(rgbColorGenerator());

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors() {
  let result = [];
  for (let i = 0; i < 10; i++) {
    result.push(hexaColorGenerator());
  }
  return result;
}

function hexaColorGenerator() {
  let hexa = "0123456789abcdef";
  let result = "#";
  for (let i = 0; i < 6; i++) {
    result += hexa[Math.floor(Math.random() * 16)];
  }
  return result;
}

console.log(arrayOfHexaColors());

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors() {
  let result = [];
  for (let i = 0; i < 10; i++) {
    result.push(rgbColorGenerator());
  }
  return result;
}

console.log(arrayOfRgbColors());

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hexa) {
  let result = [];
  for (let i = 1; i < hexa.length; i += 2) {
    result.push(parseInt(hexa[i] + hexa[i + 1], 16));
  }
  return result;
}

console.log(convertHexaToRgb("#ffffff"));