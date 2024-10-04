const user = {name:' fardeen', phone:'01776637858', address: 'Mirpur'}

// console.log(user);

const userJson = JSON.stringify(user);
// console.log(userJson);


const superSop ={
     onwer : 'abdullah',
     address :{
        location:'mirpur', houseNo: 367, area:'modday monipur'
     },
     product : ['leptop', 'mobile', 'monitor', 'keyboard']
}


// console.log(superSop);

const superJson = JSON.stringify(superSop);
// console.log(superJson);

const jsonObj = JSON.parse(superJson);
console.log(jsonObj);



