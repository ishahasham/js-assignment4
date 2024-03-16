// Chapter 14 

var linebreak="<br>";


// 1. Declare an empty array using JS literal notation to store
// student names in future.
var arr1=[];

// 2. Declare an empty array using JS object notation to store
// student names in future.
var studentNames=[];

// 3. Declare and initialize a strings array.
var arr1=["isha","aliza","mehak"];

// 4. Declare and initialize a numbers array.
var numbersArray=[1,2,3,4,5];

// 5. Declare and initialize a boolean array.
var booleanArray=[true,false];

// 6. Declare and initialize a mixed array.\
var mixedArray=["isha",5,true,5*4];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

var qualifications=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
var final="";
for(var i=0; i<qualifications.length; i++ ){
    final +=qualifications[i]+linebreak
}
document.write("<H1>Qualifications</h1>"+final);


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var students=["Micheal","John","Tony"];
var studentScore=[320,230,480];
for(var i=0; i<students.length; i++){
    var percentages=(studentScore[i]*100)/500;
    document.write("Score of "+students[i]+" is "+studentScore[i]+". Percentage: "+percentages+"%"+linebreak);
}

// 9. Initialize an array with color names. Display the array
// elements in your browser.
var color=["red","black","white"];
document.write("<h1>Array of colors:</h1>"+linebreak+color+linebreak);

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
var inputColor=prompt("Enter a color you want to add in beginning:")
color.unshift(inputColor);
document.write("<b>Update:</b>"+linebreak+color+linebreak);

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
var inputColor1=prompt("Enter a color you want to add in end:")
color.push(inputColor1);
document.write(linebreak+"<b>Update:</b>"+linebreak+color+linebreak);

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
color.unshift("brown","peach");
document.write(linebreak+"<b>Update:</b>"+linebreak+color+linebreak);

// d. Delete the first color in the array. Display the updated
// array in your browser.
color.shift();
document.write(linebreak+"<b>Update:</b>"+linebreak+color+linebreak);

// e. Delete the last color in the array. Display the updated
// array in your browser.
color.pop();
document.write(linebreak+"<b>Update:</b>"+linebreak+color+linebreak);

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
var inputColor2=prompt("Enter the color you want to add:")
var inputColor3=prompt("Enter index number where you want to add:");
color.splice(inputColor3,2,inputColor2);
document.write(linebreak+"<b>Update:</b>"+linebreak+color+linebreak);

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. 
var inputColor4=prompt("Enter how many color you want to delete:");
var inputColor5=prompt("Enter index number where you want to delete:");
color.splice(inputColor5,inputColor4);
document.write(linebreak+"<b>Update:</b>"+linebreak+color+linebreak);


// Chapter 17-20 

// 1. Declare and initialize an empty multidimensional array.
var multidimensional=[[],[],[]];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:
var multidimensional=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// 3. Write a program to print numeric counting from 1 to 10.
for(var i=1; i<=10; i++){
    document.write(i + linebreak);
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
var num1=+prompt("Enter a number to show its multiplication table");
var num2=+prompt("Enter length of multiplication table");
for(i=1; i<=num2; i++){
    document.write(num1+"x"+i+"="+num1*i+linebreak);
}

// 5. Write a program to print items of the following array
// using for loop:
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(i=0; i<fruits.length; i++){
    document.write(fruits[i]+linebreak);
}
for(i=0; i<fruits.length; i++){
    document.write("Element at index "+i+"is "+fruits[i]+linebreak)
}


// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// Counting 
document.write("<b>Counting</b>"+linebreak);
for(var i=1; i<=15; i++){
    document.write(i+",");
}

// Reverse counting 
document.write(linebreak+"<b>Reverse Counting</b>"+linebreak);
for(var i=10; i>=1; i--){
    document.write(i+",");
}

// Even 
document.write(linebreak+"<b>Even</b>"+linebreak);
for(var i=0; i<=20; i=i+2){
    document.write(i+",");
}

// odd 
document.write(linebreak+"<b>Odd</b>"+linebreak);
for(var i=1; i<=19; i=i+2){
    document.write(i+",");
}

// Series
document.write(linebreak+"<b>Series</b>"+linebreak);
for(var i=2; i<=20; i=i+2){
    document.write(i+"k,");
}

// 7. You have an array
// A = ["cake", "apple pie", "cookie", "chips", "patties"]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search=prompt("Welcome to ABC Bakery. What do you want to order sir/madam?");
var flag=false;
for(i=0; i<A.length; i++){
    if(A[i]===search){
        flag=true;
        break;
    }
}
    
if(flag){
    document.write(linebreak+search+"is <b>available</b> at index "+i+" in our bakery")
}
else{
    document.write(linebreak+"We are sorry."+search+" is <b>not available</b> in our bakery.")
}

// 8. Write a program to identify the largest number in the
// given array.
var b = [24, 53, 78, 91, 12]
var largest=b[0];
for(var i=0; i<b.length; i++){
    if(b[i]>largest){
        largest=b[i]
    }
}
document.write(linebreak+"Array items: "+b+linebreak+"The largest number is "+largest)

//9- Write a program to identify the largest number in the
// given array.
var c = [24, 53, 78, 91, 12]
var smallest=c[0];
for(var i=0; i<b.length; i++){
    if(c[i]<smallest){
        smallest=c[i]
    }
}
document.write(linebreak+"Array items: "+c+linebreak+"The smallest number is "+smallest+linebreak)

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
var num3=5;
for(i=1; i<=20; i++){
    document.write(num3*i+",")
}


// Chapter 14-20 

// IF STATEMENT NESTED 
// 1. Code an if statement enclosing a nested if. If password is not
// empty, then check if password is not greater than 5 , then display
// an alert that says &quot;Password must be greater than 5&quot; if greater
// than 5 then Alert &quot;OK&quot;.
var password= prompt("Enter password");
if(password !==''){
    if(password.length<=5){
        alert("Password must be greater than five");
    }
    else{
        alert("OK!")
    }
}

// 2. Try this statement by yourself 
if (A === 1){ 
    if (c === "Max") {
        alert("OK");
    }
}

// 3. Code the first line of an if statement that avoids the nesting above
// by testing for multiple conditions.
if((A===1) && (c === "Max")){
    alert("OK")
}

// 4. Declare two variables and assign them the same number value.
// Test two conditions, using nested if statements. Test whether the
// first variable equals the second variable and also whether it is less
// than or equal to the second variable. If the test passes—and it
// will—display an alert message.
var value1=2;
var value2=2;
if(value1===value2){
    if(value1<=value2){
        alert("Condition pass!!!")
    }
}

// ARRAY 1

// 1. Declare an empty array.
var ar1=[];

// 2. Code an array with 1 string element
var ar1=["world"];

// 3. var alphabet = [&quot;h&quot;,&quot;i&quot;,&quot;j&quot;,&quot;k&quot;]. Now print the letter “j” in alert
// using array index
var alphabet=["h","i","j","k"]
alert(alphabet[2]);

// 4. var alphabet=[&quot;h&quot;,&quot;i&quot;,&quot;j&quot;,&quot;k&quot;, “l”,”m”, “n”, “o”]. Find the total
// length of array.
var alphabet=["h","i","j","k","l","m","n","o"]
alert(alphabet.length)

// 5. Declare an array with one element and Add a second element
// with index in array. Create an alert whose message is the new
// element.
var fruits=["apple"];
fruits[1]=["banana"];
alert(fruits[1])

// ARRAY 2

// 1. Code an array with 1 string element.
// Add an additional element to the array using push.
// Create an alert whose message is the last element.
var alphabet=["h"]
alphabet.push=["i","j","k","l"]

// 2. var Alphabet=[&quot;h&quot;,&quot;i&quot;,&quot;j&quot;,&quot;k&quot;]
// Remove the last element from the array Alphabet.
alphabet.pop();

// 3. var Alphabet=[&quot;h&quot;,&quot;i&quot;,&quot;j&quot;,&quot;k&quot;]
// Add a new element, a number, to the end of an array.
alphabet.push(2);

// ARRAY 3

// 1. var sizes = [&quot;S&quot;, &quot;M&quot;, &quot;XL&quot;, &quot;XXL&quot;, &quot;XXXL&quot;]. Remove the first
// element of an array.
var sizes=["S","M","XL","XXL","XXXL"];
sizes.shift();

// 2. var sizes = [&quot;S&quot;, &quot;M&quot;, &quot;XL&quot;, &quot;XXL&quot;, &quot;XXXL&quot;].
// Add three number elements to the beginning of an array.
sizes.unshift(1,2,3);

// 3. Declare an array with one element.
// Add a second element to the beginning of the array.
// Create an alert whose message is the new first element.
var newAr1=["potato"];
newAr1.unshift("tomato");
alert(newAr1[0])

// 4. var sizes = [&quot;S&quot;, &quot;M&quot;, &quot;XL&quot;, &quot;XXL&quot;, &quot;XXXL&quot;].
// Insert &quot;L&quot; into the array between &quot;M&quot; and &quot;XL&quot;.
sizes.splice(1,0,"L");

// 5. var sizes = [&quot;S&quot;, &quot;M&quot;, &quot;XL&quot;, &quot;XXL&quot;, &quot;XXXL&quot;].
// Copy the first 3 sizes of the array and put them into a new array,
// regSizes.
var regSizes= sizes.slice(0,3);

// 6. var pets = [&quot;dog&quot;, &quot;cat&quot;, &quot;ox&quot;, &quot;duck&quot;, &quot;frog&quot;].
// Add 2 elements after &quot;dog&quot; and remove &quot;cat&quot;, &quot;ox&quot;, and &quot;duck&quot;.
var pets=["dog","cat","ox","duck","frog"];
pets.splice(1,3,"turtle","goat");

// 7. var pets = [&quot;dog&quot;, &quot;cat&quot;, &quot;ox&quot;, &quot;duck&quot;, &quot;frog&quot;]; Remove &quot;cat&quot; and
// &quot;ox&quot;.
var pets1=["dog","cat","ox","duck","frog"];
pets1.splice(1,2);

// 8. var pets = [&quot;dog&quot;, &quot;cat&quot;, &quot;ox&quot;, &quot;duck&quot;, &quot;frog&quot;, &quot;flea&quot;]; Reduce it to
// &quot;duck&quot; and &quot;frog&quot; using slice.
var pets2=["dog","cat","ox","duck","frog","flea"];
pets2.splice(3,2);

// FOR LOOPS

// 1. Write a statement in which loop is to run 10 times.
for(var i=0; i<10; i++){};

// 2. Code the first line of a for loop with the usual counter name,
// usual starting value, and usual increment. Run it 12 times
// using &lt;= to specify how many loops.
for(var i=0; i<=11; i++){}; 

// 3. What are the 5 characters missing from this code, excluding
// any spaces that are missing? Type them in order, with no
// spaces or commas between them.
// for var i = 0 i &lt;= 4 i++ 
// missing character are '(', ';' ,';' ,';' ,')'
for (var i = 0; i<= 4; i++){}

// 4. Code the first line of a for loop with a counter name that&#39;s
// not i. Code the usual starting value and usual increment. Run
// it 100 times using &lt; to specify how many loops.
for(var i=0; i<100; i++){};

//5. Code the first line of a for loop with the usual counter and
// the usual starting value. Run it 3 times using &gt; to specify how
// many loops. Decrement it with each iteration.
for(var i=3; i>0; i--){}

// Set a variable named “flag” with an initial Boolean value of
// your choice.
var flag=false;

// Code the first line of a for loop with the usual counter, the
// usual starting value, and the usual incrementing. Limit the
// number of loops by the number of elements in the array
// pets.
for(var i=0; i<pets.length; i++){}

// Set a for loop to run 10 iterations.
// On the second iteration, display the counter in an alert. (It should
// be 1.)
// Break out of the loop.
for(var i=0; i<10; i++){
    if(i===2){
        alert(i);
        break;
    }
}

// 11. Complete this code to display an alert if a match isn&#39;t found.

var matchFound = false;
for (var i = 0; i<list.length; i++){
    if (userInput === list[i]) {
    matchFound = true;
    break;
}
};

if(matchFound===true){
    alert("Match found");
}
else{
    alert("Match not found")
}

// nested loop
// 12. var firstArr = [“a”, “b”, “c”, “d”, “e”, “f”]; var secondArr = [1,

//     2, 3, 4, 5, 6];
//     Code the first line of a for loop with the usual counter, the usual
//     starting value, and the usual incrementing. Limit the number of
//     loops by the number of elements in the array firstArr.
//     In the scope of main loop Code the nested loop. Limit the number
//     of nested loops by the number of elements in the array
//     secondArr.
//     After that concatenate the both loops.
//     Expected Output:
//     a1
//     a2
//     a3
//     a4
//     …
//     f6

var firstArr=["a","b","c","d","e","f"];
var secondArr=[1,2,3,4,5,6];
for(i=0; i<firstArr.length; i++){
    for(j=0; j<secondArr.length; j++){
        document.write(firstArr[i]+secondArr[j])
    }
}