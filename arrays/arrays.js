// No.1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// function bubblesort(ages){
//     for (let i =0; i < ages.length; i++){
//         for (let j = 0; j <ages.length -i -1;j++){
//             if (ages[j]> ages[j+1]){
//                     [ages[j],ages[j+1]] = [ages[j+1],ages[j]];
//             }
//         }
//     }

//     return ages;
// }

// bubblesort();

const sortedAges = ages.sort();
console.log(sortedAges)

let minAge = sortedAges[0];
let maxAge = sortedAges[sortedAges.length-1];

console.log(`Min Age Is ${minAge} and Max Age Is ${maxAge}`);

// Median

let medianAge = 0;
if (sortedAges.leng % 2 === 0){
    medianAge=(sortedAges[sortedAges.length/2-1] + sortedAges[sortedAges.length / 2]) / 2;
}

else{
    medianAge = sortedAges[Math.floor(sortedAges.length/2)];
}

console.log(`Median age is ${medianAge}`);

// Average
let sum = 0;
for (let i = 0; i< sortedAges.length; i++){
    sum+= sortedAges[i];
}

let averageAge = sum / sortedAges.length;
document.write(`<p>Average Age is ${averageAge}</P>`);

// find the range
let range = maxAge - minAge;
console.log(range);

// compare the value of (min - average) and (max - average), use Abs() Method

let minAvg = Math.abs(minAge - averageAge);
console.log(`Max AVG is ${minAvg}`);
let maxAvg = Math.abs(maxAge - averageAge);
console.log(`Max AVG is ${maxAvg}`);

const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]

  let slicedCoun = countries.slice(0, 10);
  console.log(slicedCoun);

  let midCoun = "";
  if (countries.length % 2 === 0) {
    midCoun = countries[countries.length / 2];
  }
  else{
    midCoun = countries[Math.floor(countries.length/ 2)];
  }
  console.log(`Middle Country is ${midCoun}`);


// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let firstHalf = [];
let secondHalf = [];

if (countries.length % 2 === 0 ){
    firstHalf = countries.slice(0, countries.length / 2);
    secondHalf = countries.slice(countries.length / 2);
} else {
    firstHalf = countries.slice(0, countries.length / 2 + 1 );
    secondHalf = countries.slice(countries.length / 2 + 1);
}
  console.log(firstHalf);
  console.log(secondHalf);