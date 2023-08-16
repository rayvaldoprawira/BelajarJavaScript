const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
    "Indo",
  ];
  // copy countries array (avoid mutation)
  const arrayCountries = [...countries];
  console.log(arrayCountries);
  
  // Arrays are mutable. Create a copy of array which does  not modify the original array. sort the copy and store it in sortedCountries
  const sortedCountries = arrayCountries.sort();
  console.log(sortedCountries);
  
  const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];
  
  const mernStack = ["MongoDB", "Express", "React", "Node"];
  
  // Sort the webTechs array and mernStack array
  const sortedWebTechs = webTechs.sort();
  console.log(sortedWebTechs);
  const sortedMernStack = mernStack.sort();
  console.log(sortedMernStack);
  
  // Extract all the countries contain the word 'land' from the countries array and print it as array
  const countriesWithLand = countries.filter((country) =>
    country.includes("land")
  );
  console.log(countriesWithLand);
  
  // Find the country containing the hightest number of characters in the countries array
  const countryWithLongestName = countries.reduce((a, b) =>
    a.length > b.length ? a : b
  );
  console.log(countryWithLongestName);
  
  // Extract all the countries containing only four characters from the countries array and print it as array
  const countriesWithFourChars = countries.filter(
    (country) => country.length === 4
  );
  console.log(countriesWithFourChars);
  
  // Extract all the countries containing two or more words from the countries array and print it as array
  const countriesWithTwoOrMoreWords = countries.filter((country) =>
    country.includes(" ")
  );
  console.log(countriesWithTwoOrMoreWords);
  
  // Reverse the countries array and capitalize each country and stored it as an array
  const reversedCountries = countries.reverse();
  // capitalize each element
  const capitalizedCountries = reversedCountries.map((country) =>
    country.toUpperCase()
  );
  console.log(capitalizedCountries);
  
  // menghitung sisa pemasukan
  const pemasukan = 1000000;
  const pengeluaran = [250000, 80000, 140000, 310000];
  
  const sisaPemasukan = pengeluaran.reduceRight(function (acc, curr) {
    return acc - curr;
  });
  // nilai variabel sisaPemasukan diambil dari hasil reduce array pengeluaran
  // acc adalah akumulator (accumulator)
  // nilai awal akumulator diambil dari argument kedua yaitu variabel pemasukan
  // curr adalah nilai elemen pada tiap iterasi
  
  console.log(sisaPemasukan); // 220000
  
  /*
   algoritma reduce
    1. ambil nilai awal akumulator dari argument kedua
    2. ambil nilai elemen pertama dari array
    3. lakukan operasi pada akumulator dan elemen pertama
  */
  
  // 310000 - 140000 = 170000
  // 170000 - 80000 = 90000
  // 90000 - 250000 = -160000