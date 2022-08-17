
          //Compare two JSON
          var obj1 = { name:"Person1",age:5 };
          var obj2 = { age:5, name:"Person1"};
          
          console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // false
          console.log(JSON.stringify(obj1.name) === JSON.stringify(obj2.name)); //true
          console.log(JSON.stringify(obj1.age) === JSON.stringify(obj2.age)); // true
          console.log(JSON.stringify(obj1.name) === JSON.stringify(obj2.age)); //flase
          console.log(JSON.stringify(obj1.age) === JSON.stringify(obj2.name)); // flase
