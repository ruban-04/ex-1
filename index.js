// Arithmetic operator
var a=10;
var b=30;

// addion

var result = (a+b);
console.log(result)
 
// subration

var result1 = (a-b);
console.log(result1)

// multiplication

var result2= (a*b);
console.log(result2)

// divivion

var result3 = (a/b);
console.log(result3)

// modules

var result4 = (a%b);
console.log(result4)

// expo

var result5 = (a**b);
console.log(result5)


// if else

var result=50;
if(result>60)

    {
        console.log("pass")
    }
    else
    {
        console.log("fail")
    }


    var score=60
    if(score>90)
    {
        console.log("nivin")
    }
    else if(score>=60)
    {
        console.log("samar")
    }
    else if(score>10)
    {
        console.log("prakash")
    } 
    else{
        console.log("ruban")
    }
    
// increment;

    var a=10;
    ++a;
    console.log(a);
  
    var a=10;
    b=a++;
    console.log(b)
     // decrement
    var a=60;
    a--;
    console.log(a);

    var a=60;
    b=--a;
    console.log(b);

// assignment operator

       var x=35;
       var y=10;
        
      //  addition

       var result=(x+=y);
       console.log(result)

      //  subraction

      var result=(x-=y);
      console.log(result)

      // multiplication

      var result=(x*=y);
      console.log(result)

      // division

      var result=(x/=y);
      console.log(result)

      // modules

      var result=(x%=y);
      console.log(result)

      // expo

      var result=(x**=y);
      console.log(result)




  //  Comparison operator

  var a =50;
  var b=35;

  // greaterthan

  var tValue=(a>b);
  console.log(tValue)

  //  lessthan

  var Value=(a<b);
  console.log(Value)

  // greaterthan or equalto

  let value1 =(20>=15);
  console.log(value1)

    // lessthan or equalto

    let value2 =(20<=15);
    console.log(value2)

    var a=10;
    var b='10';

    // double equal to

    var total = (a==b);
    console.log(total)

    // triple equal to

     var totalValue =(a===b)
     console.log(totalValue)

    //  not equalto

    var value3 = (10!==10);
    console.log(value3)

// logical operator

// And

var and =(10>5)&&(10<5)
console.log(and)

var and =(10>5)&&(2<5)
console.log(and)

//  or

var or =(10>5)||(10<5)
console.log(or)

// not

var not = !(5<10);
console.log(not)

// DataTypes

      // String

      var name="lion";
      console.log(typeof(name));

      // number
      
      var num="20"+5;
      console.log(num);

      var num=30+5;
      console.log(num);

      // boolean

      var boolean=(100==100);
      console.log(boolean)

      // undefined

      var z;
      console.log(z)

      // null

      var val= null;
      console.log(val)

     // form
     
      function MyButton(event) {
        event.preventDefault();
      
       const username = document.getElementById('Username').value;
       const password = document.getElementById('Password').value;
    
        console.log("Username: ",username);
        console.log("Password: ",password);
    
    
    
        // Datas

        let dataText = `<h2>Data</h2>
        <p><b>Username</b>:${username}</p>
        <p><b>Password</b>:${password}</p>`;
        let result = document.getElementById('result');
        result.innerHTML = dataText; 
        result.style.marginLeft = "25rem";
        result.style.paddingTop = "2rem";
    }

    // bitwise operator

    var a = 5;
    var b = 1;

    //  And&

    let Add = a&b;
    console.log(Add);

    // or |

        let orop=a|b;
    console.log(orop);

    // Xor ^

      let xorop=a^b;
    console.log(xorop);

    // not ~

    let not1 = ~ (6>2);
    console.log(not1);

    // left shift <<

    let left=a<<b;
    console.log(left);

    // right shift >>

    let right=a>>b;
    console.log(right);

   //    Zero fill right shift  >>>

   let zero=a>>>b;
    console.log(zero);
  
    // array values

    let foods1 = ["idly", "dosa", "chapaththi"];
    console.log(foods1[1]);

    // array length

    let foods2 = ["idly", "dosa", "chapaththi"];
   console.log(foods2.length);

   // array reverse

   let foods3 = ["idly", "dosa", "chapaththi"];
   foods3.reverse();
   console.log(foods3); 

   // array sort 
   
   let foods4 = ["idly", "dosa", "chapaththi"];
   foods4.sort();
   console.log(foods4);

  // array at
  
  let foods5 = ["idly", "dosa", "chapaththi"];
  console.log(foods5.at(1));

 //  array fill

  let foods6 = ["idly", "dosa", "chapaththi"];
  foods6.fill("parotta",1,3);
  console.log(foods6);

//  array from

  let str = "Ruban";
  let Myname = Array.from(str);
  console.log(Myname);

//   array join

let foods7 = ["idly", "dosa", "chapaththi"];
let  dish= foods7.join(".");
console.log( dish);

// array toString

let no = 123;
let noString = no.toString();
console.log(noString); 

// array pop

let foods8 = ["idly", "dosa", "chapaththi"];
let lastfood = foods8.pop(); 
console.log(foods8);

// forEach

let foods9 = ["idly", "dosa", "chapaththi"];
foods9.forEach(function (food) {
console.log(food);
});

// array shift

let foods10 = ["idly", "dosa", "chapaththi"];
let firstfood = foods10.shift(); 
console.log(foods10);

// array push

let food11 = ["idly", "dosa", "chapaththi"];
let  food1=food11.push("pongal"); 
console.log(food11);  

// array unShift

let foods12 = ["idly", "dosa", "chapaththi"];
let food =foods12.unshift("pongal"); 
console.log(foods12); 
    
// array concat

let breakfast1 = ["idly","dosa","chapaththi"]
let breakfast2 = ["poori","pongal","vadai"]
let breakfastresult = breakfast1.concat(breakfast2);
console.log(breakfastresult)

//  Array copyWithIn

 let arrnum = [1, 2, 3, 4, 5, 6];
 arrnum.copyWithin(2,4);
 console.log(arrnum);

//  some

let numbers = [1, 2, 3, 4, 5];
let someresult = numbers.some(num => num > 3);
console.log(someresult); 
    
// splice

let food13 =  ["idly", "dosa", "chapaththi"];
food13.splice(0, 2); 
console.log(food13); 

// flat

let flatnum = [1, 2, [3, 4],[5, 6]];
let ans1 = flatnum.flat();
console.log(ans1);


// lastIndexOf

let lastnum = [1, 2, 3, 2, 4, 2];
let  ans2= lastnum.lastIndexOf(2);
console.log(ans2); 

 // array of

let array = Array.of(1, 2, 3); 
console.log(array);

// array every

let everynum = [2, 4, 6, 8];
let ans3 =  everynum.every(num => num % 2 === 0);
console.log(ans3); 

// array slice

let foods14 =  ["idly", "dosa", "chapaththi"];
let slice = foods14.slice(1, 3);
console.log(slice);

// flatMap

// let mapnum = [1, 2, 3];
// let map = mapnum.flatMap(num => [num, num * 2]);
// console.log(map); 

// findIndex

let find1 = [10, 20, 30, 40];
let ans4 = find1.findIndex(num => num > 25);
console.log(ans4); 

// find

let find2 = [10, 20, 30, 40];
let ans5 = find2.find(num => num > 25);
console.log(ans5);

// includes

let include =  ["idly", "dosa", "chapaththi"];
let ans6 = include.includes('chapaththi');
console.log(ans6 );

// entries

let foods15  =  ["idly", "dosa", "chapaththi"];
let iterator = foods15 .entries();

for (let [index, value] of iterator) {
    console.log(index, value);
}

// reduceRight

let reduceRight = [1, 2, 3, 4];
let ans7 = reduceRight.reduceRight((acc, num) => acc + num, 0);
console.log(ans7);

// reduce

let reduce = [1, 2, 3, 4];
let ans8 = reduce.reduce((acc, num) => acc + num, 0);
console.log(ans8); 

// isArray

let food16 = ["idly", "dosa", "chapaththi"];
let ans9 = Array.isArray(food16);
console.log(ans9);

// filter

let filter = [1, 2, 3, 4, 5];
let ans10 = filter.filter(num => num > 3);
console.log(ans10);

// keys

let keys = ["idly", "dosa", "chapaththi"];
let food17 = keys.keys();

for (let key of food17) {
    console.log(key);
}

// map

let map = [1, 2, 3, 4];
let ans11 = map.map(num => num * 2);
console.log(ans11); 

