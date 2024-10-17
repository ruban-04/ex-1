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