let age = prompt("Enter Your Age ?", "");
let umur = 18-age;
if (age >=30){
document.write("You're old enough to drive");
}
if (age <=18){
    document.write("You're left "+ umur + " years to drive")
}

let umur1 = 23;
if (age > umur1){
console.log(`You Are ${age-umur1} older than me`);
}
else {
    console.log(`You Are ${umur1-age} younger than me`);
}

let a = 4
let b = 3
if (a>b){
    console.log("a greater than b");
    
}
else {
    console.log("a less than b");
}

a>b ? console.log("a grater than b") : console.log("a less than b");


let oddNumber = prompt("Enter a Number : ");
if(oddNumber%2 == 0){
    document.write("<p>" + oddNumber + " is an even number</p>");
}
else{
    document.write("<p>"+oddNumber + " is an odd number</p>");
}

let scores = prompt("Enter a scores : ");
if(scores >= 80 && scores <=100 ){
    document.write("<p> Your Grade Is A </p>");
}
if(scores >=70 && scores <=79){
    document.write("<p> Your Grade Is B </p>");
}
if(scores >=60 && scores<=69){
    document.write("<p> Your Grade Is C </p>");
}
if(scores >=50 && scores <=59){
    document.write("<p> Your Grade Is D </p>");
}
if(scores>=0 && scores <=49){
    document.write("<p> Your Grade Is F </p>");
}


const month = prompt("Enter a current month : ").toLocaleLowerCase();

if ( 
    month=== "january" ||
    month=== "march"||
    month=== "may"||
    month=== "july"||
    month=== "august"||
    month=== "october"||
    month=== "december"
    ){
        document.write(`${month} has 31 days.`);
    }
else if (
    month=== "april"||
    month=== "june"||
    month=== "september"||
    month=== "november"
){
    document.write(`${month} has 30 days.`);
}
else if (
    month=== "february"
){
    document.write(`${month} has 28 days or 29 days in every 4 years`);
}

const month1 = prompt("Enter the month : ").toLocaleLowerCase();
month1.toLowerCase();

if(
    month1 === "september" ||
    month1 === "october"||
    month1 === "november"
    ){
        document.write("<p>The Season is Autumn</p>");
    }
    else if (
        month1 === "december"||
        month1 === "january"||
        month1 === "ferbruary"
    ){
        documnet.write("<p>The Season is Winter</p>");
    }
    else if 
    (month1 === "march"||
     month1 === "april"||
     month1 === "may"
     ){
        document.write("<p>The Season is Spring </p>")

    }
    else if (
        month1 === "june"||
        month1 === "july"||
        month1 === "august"
    ){
        document.write("<p>The Season is Summer</p>");
    }
