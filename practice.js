//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      // To bring context to your code

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      // 1. Explicit - Explicit is purposely set/done
      // Its when you Call, Apply or Bind
      // 2. Implicit - Implicit is when the code is Implied
      // left of the dot, obj.doSomething()
      // 3. Default/Window - Default/Window is when nothing is left of the dot
      // 4. New - New is when you make something completely new

  // 3) What is the difference between call and apply?

        // They are the same thing.

  // 4) What does .bind do?




//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    var user = {
      username: "BillybobThorton",
      email: "BillybobThorton@gmail.com",
      getUsername: function () {
        return this.username;
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername()

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
  function Car(make, model, year, move) {
    // var this = {}
    this.make = make;
    this.model = model;
    this.year = year;
    this.move = 0
    this.moveCar = function() {
      return this.move += 10;
    }
    // return this;
  }


var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  getYear.call(prius);
  getYear.call(mustang);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

// 1. Explicit, 2. Implicit, 3. Default
var userName = getMyUsername.call(myUser); //Fix this
console.log(userName)
//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  // iliketurtles

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  // myUser

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
