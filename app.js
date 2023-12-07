// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var kalvian1 = "Subham";
console.log("The driver's name is " + kalvian1);
var kalvian2 = "Parul";
console.log("The navigator's name is " + kalvian2);
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if(kalvian1.length>kalvian2.length){
  console.log("The driver has the longest name, it has " +kalvian1.length+ " characters.")
}
else if(kalvian1.length<kalvian2.length){
  console.log("It seems that the the navigator has the longest name, it has " +kalvian2.length+ " characters.")
}
else{
  console.log(" Wow, you both have equally long names, " +kalvian2.length+ "characters!.")
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5. 
function vowel(a){
  let vowels = "aeiou";
  let vowelFlag = false;
  let string = " ";
  let index = [];
  for(let i=0; i<a.length;i++){
    if(vowels.includes(a[i].toLowerCase())){
    vowelFlag = true;
    index.push(i);
    string += a[i];
    }
  }
    if(vowelFlag){
      var ans =a + string.split('').join(' ')+ " "+ index.join(' ');
      console.log(ans)
    }
    else{
      console.log("No vowels");
    }
}
vowel(kalvian1)
vowel(kalvian2);
// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
function characters(a){
var count1 = 0;
var count2 = 0;
for(let i=0; i<a.length; i++){
 if(a[i] === a[i].toUpperCase()){
   count1++;
 }
 else{
   count2++;
 }
}
console.log(count1);
console.log(count2);
}
characters(kalvian1);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
let upper = " ";
for(let i=0; i<kalvian1.length;i++){
upper += kalvian1[i].toUpperCase() + " ";
}
console.log(upper);
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
let string2 = " ";
for(let i = kalvian2.length-1; i>=0; i--){
  string2 += kalvian2[i];
}
console.log(string2);
// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName" 
console.log(kalvian1,kalvian2)
console.log(kalvian2,kalvian1)
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if(kalvian1>kalvian2){
  console.log("The driver's name goes first.")
}
else if(kalvian1>kalvian2){
  console.log("Yo, the navigator goes first definitely.")
}
else{
  console.log("What?! You both have the same name?")
}
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
var strings = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Nihil perferendis neque reprehenderit a, voluptatibus ipsam unde dolore quod nesciunt ut.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis explicabo ex architecto corporis natus, voluptate nisi assumenda officia sunt amet maiores. Vero alias temporibus aliquid, eius ullamatque est doloremque!';
let count = 0;
let realCount = 0;
for(let i=0; i<strings.length-1; i++){
  if (strings[i]==" "){
    realCount++;
  }
  if(strings[i] === 'e' && strings[i+1]==='t')
    count++;
}
console.log("Total no.of words: "+realCount);
console.log("et words count: "+ count);
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
let string5 = "step on no pets"
let without = "";
for(let i=0;i<string5.length;i++){
  if(string5[i]!=" "){
    without += string5[i];
  }
} 
without = without.toLowerCase()
// console.log(without)
let flag = true;
let n = without.length-1;

for(let i=0; i<without.length; i++){
  if(without[i]!=without[n-i]){
    flag = false;
    // console.log(without[i],without[n-i])
    break;
  }
}
if(flag){
  console.log("Yes, it is a palindrome.")
}
else{
  console.log("It is not a palindrome.")
  }