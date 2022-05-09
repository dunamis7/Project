// /*var myName = "Antwi Bright";

// var currentYear = 2019;


// var myage = prompt('Enter your age');

// var yerarBorn = currentYear - myage;

// alert('You were born in ' + yerarBorn);

// console.log(typeof currentYear);

// console.log(yerarBorn,currentYear);*/


// //Coding challenge 1

// var markMass, markHeight, johnMass, johnHeight;
// markMass = 78; markHeight= 1.69;
// johnMass =92; johnHeight = 1.95;

// var MarkBMI = markMass / (markHeight * markHeight);

// var JohnBMI = johnMass / (johnHeight * johnHeight);

// console.log('Marks BMI is:' + MarkBMI);
// console.log('Johns BMI is:' + JohnBMI);
// console.log(' ');

// // if(JohnBMI > MarkBMI){
// //     console.log("John has a higher BMI");
// // }
// // else{
// //     console.log("Mark has a higher BMI");
// // }


// //Tenary Operator
// JohnBMI > MarkBMI ? console.log('John has a higher BMI') : console.log('Mark has a higher BMI');


// // Coding Challenge 2
// var johnScore1, johnScore2, johnScore3;

// var mikeScore1, mikeScore2, mikeScore3;

// var maryScore1, maryScore2, maryScore3;

// johnScore1 = 489; johnScore2 = 120; johnScore3=103;
// mikeScore1=116; mikeScore2 = 994; mikeScore3=123;
// maryScore1=97; maryScore2 = 134; maryScore3=105;

// var averageJohn = (johnScore1+johnScore2+johnScore3)/3;
// var averageMike = (mikeScore1 + mikeScore2 + mikeScore3)/3;
// var averageMary = (maryScore1 + maryScore2 + maryScore3)/3;

// console.log('John average ' + averageJohn);
// console.log('Mike teams average ' + averageMike);
// console.log('Marys team average ' + averageMary);

// console.log(' ');

// if(averageJohn > averageMike){
//     console.log('John team wins');
// }else if (averageJohn === averageMike){
//     console.log('There was a draw');
// }else{
//     console.log('Mike team wins');
// }

// console.log(' ');

// if (averageJohn > averageMike  && averageJohn > averageMary){
//     console.log('John team wins');
// }else if (averageMike > averageJohn && averageMike > averageMary ){
//     console.log('Mike team wins');
// }else if(averageMary>averageJohn && averageMary>averageMike){
//     console.log('Mary team wins')
// }else if(averageJohn === averageMary && averageMike == averageMike){
//     console.log('There was a tie');
// }


//Functions Eg. On retirement

// function ageCalculator(birthYear){
//     var age = 2019 - birthYear;
//     return age;
// }



// function workAgeLeft(name, birthYear){
//     var age = ageCalculator(birthYear);
//     var workB4retire = 60 - age;

//     if(age>=60){
//         console.log(name  + ' has already  retired');
//     }
//     else{
//     console.log(name + ' retires in ' + workB4retire  + ' years');
//     }
// }

// workAgeLeft('Bright', 1990);


//Coding challenge 3 

// var bills = [124,48, 268];

// function tipCalculator(mybill){
//     var finalCost;
//     if (mybill < 50){
//       tipCost =  (20/100)*mybill;
       
//     }
//     else if (mybill >= 50 && mybill <=200){
//         tipCost = (15/100)*mybill;

//     }
//     else if (mybill > 200){
//         tipCost =  (10/100)*mybill;
 
//     }

//     return tipCost;
// }

// var tips = [ tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])  ];


// var finalCost =  [ tips[0] + bills[0] , tips[1] + bills[1], tips[2] + bills[2] ];

// console.log(tips,finalCost);



// Objects (Key value pairs)

// var brightData = {
//     firstName: 'Bright',
//     lastName: 'Antwi',
//     birthYear: 1998,
//     isMarried: true
// };

// var brightdata = new Object();

// brightdata.firstName = 'Bright';
// brightdata.lastName = 'Antwi';
// brightdata.birthYear = 1998;
// brightdata.isMarried = true;

// console.log(brightdata);

// brightdata.firstName = 'Owusu';

// console.log(brightdata);


// Objexts and Functions

// var paulinaData = {
//     name: 'Abrefah',
//     birthYear : 1997,
//     birthMonth : 'April',
//     nowQualification : 'WASSCE',
//     isMarried : false,
//     calcAge: function (){
//        this.age = 2019 - this.birthYear; // this - refers to the current object
//     //creates this.age === paulinaData.age
//     }
// };

// paulinaData.calcAge();
// console.log(paulinaData);



//////Coding Challenge 4

// var mark = {
// name : 'Mark',
// height : 4.2,
// mass :  60,
// calcBMI : function(){
// this.BMI =  this.mass / (this.height * this.height);
// }
//  };

//  var john = {
//     name : 'John',
//     height : 4.2,
//     mass :  60,
//     calcBMI : function(){
//         this.BMI  = this.mass / (this.height * this.height);
//     }
//      };

// mark.calcBMI();
// console.log(mark);

// console.log('  ');

// john.calcBMI();
// console.log(john);


// if(mark.BMI === john.BMI){
//     console.log("Both Mark and Joh has the same BMI");
// }else if(mark.BMI > john.BMI){
//     console.log("Mark has a higher BMI");
// }else{
//     console.log("John has a higher BMI");
// }



// Loops and Iterations
// var data = ['bag', 'key', 66, 'soap', true];

// for(var i=data.length-1; i >= 0; i--){
//     console.log(data[i]);
// }


// Mega Coding Challenge***** Coding Challenge

var john = {
    
    bill : [124, 48, 268, 180, 42],
    tipCalculator : function(){
        this.tips = [];
        this.finalCost = [];

     for (var i =0; i<this.bill.length; i++){
    
       if(this.bill[i] <50 ){
        this.tips[i] = 0.2*this.bill[i];
        this.finalCost[i] = this.tips[i] + this.bill[i];
       }

     else  if(this.bill[i] >= 50 && this.bill[i] <=200 ){
         this.tips[i] = 0.15 *this.bill[i];
         this.finalCost[i] = this.tips[i] + this.bill[i];
       }

       else  if( this.bill[i] > 200 ){
        this.tips[i] = 0.1 *this.bill[i];
        this.finalCost[i] = this.tips[i] + this.bill[i];
      }

     }
 }
};



var mark = {
    
    bill : [77, 375, 110, 45],
    tipCalculator : function(){
        this.tips = [];
        this.finalCost = [];

     for (var i =0; i<this.bill.length; i++){
    
       if(this.bill[i] <100 ){
        this.tips[i] = 0.2*this.bill[i];
        this.finalCost[i] = this.tips[i] + this.bill[i];
       }

     else  if(this.bill[i] >= 100 && this.bill[i] <= 300 ){
         this.tips[i] = 0.1 *this.bill[i];
         this.finalCost[i] = this.tips[i] + this.bill[i];
       }

       else  if( this.bill[i] > 300 ){
        this.tips[i] = 0.25 *this.bill[i];
        this.finalCost[i] = this.tips[i] + this.bill[i];
      }

     }
 }
};


john.tipCalculator();

console.log(john);

console.log('  ');

mark.tipCalculator();
console.log(mark);

console.log('  ');


function averageTipCalc (tipArray){
var sum=0;
for(var i = 0; i<tipArray.length; i++){
    sum = sum + tipArray[i];
}

return sum/tipArray.length;
}

var johnAverage =averageTipCalc(john.tips);
console.log(johnAverage);

var markAverage =averageTipCalc(mark.tips);
console.log(markAverage);

if(johnAverage > markAverage){
    console.log("John has  the highest tip average of :$" + johnAverage);
}else{
    console.log("Mark has  the highest tip average of :$" + markAverage);
}