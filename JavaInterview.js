const user = [
   {
      id: 1,
      name: "Nagendra",
      isActive : true,
      age: 20
   },
   {
      id: 2,
      name: "Mohan",
      isActive : false,
      age: 21
   },  {
      id: 6,
      name: "yadav",
      isActive : true,
      age: 22
   },  {
      id: 3,
      name: "Nag",
      isActive : false,
      age: 23
   },  {
      id: 4,
      name: "Nagu007",
      isActive : true,
      age: 24
   },  {
      id: 5,
      name: "Nagndra Yadav",
      isActive : true,
      age: 25
   },
];

// find out all names of every object inside the array users.
      //level 1:

      const temp = [] // to store all the names;

      for(let i=0;i<user.length;i++){
         temp.push(user[i].name);
      }

      // console.log(temp);

      //level 2: solution 2 usig forEach();

      const temp2 =[];

      // unlike map(), forEach() does not reuturn anyThing it means it will perform operations on the actual array itself so unlike map(), forEach() we cannot store it into another variable or const

      user.forEach((i)=>{
         if(i.isActive === true){
            temp2.push(i.name);
         }
      });
      // console.log(temp2);

      // level 3 : using map();
      const activeUsers = user.filter((users)=> users.isActive).map((users)=> users.name);

      // console.log(activeUsers);


// HOW TO SORT THE USERS DEPENDING UPON THEIR AGE 

const sortedArr = user.sort((x,y)=>{
   if(x.age > y.age){  //this is for ascending order
      return 1;
   }else{
      return -1;
   }

   // if(x.age < y.age){  //this is for descending order
   //    return 1;
   // }else{
   //    return -1;
   // }
})

// console.log(sortedArr);


                                                //EPISODE-2                   

const user2 = [
{
   id: 1,
   name: "Nagendra",
   isActive : true,
   age: 20
},
{
   id: 2,
   name: "Mohan",
   isActive : false,
   age: 21
},  {
   id: 6,
   name: "yadav",
   isActive : true,
   age: 22
},  {
   id: 3,
   name: "Nag",
   isActive : false,
   age: 23
},  {
   id: 4,
   name: "Nagu007",
   isActive : true,
   age: 24
},  {
   id: 5,
   name: "Nagndra Yadav",
   isActive : true,
   age: 25
},
];      

            // CHECK IF USER WITH SUCH NAME EXIST?


   // level : 0 - simple bruteForce approach


   const funTofind = (name,user2)=>{
      bool  = false;
      for(let i=0;i<user2.length;i++){
         if(user2[i].name === name){
            bool = true;
         }
      }

      return bool;
   }


   // console.log(funTofind("nagendra",user2));


    // level : 1

    const funTofind2 = (name,user)=>{
      bool  = false;
      if(user.find((users)=> users.name === name) != undefined){
         bool = true;
      }

      return bool;

    }

    console.log(funTofind2("Nagendra",user2));