// understanding objects in js

let user = {
    name: 'Anbuden',
    age: 23,
    mail: 'dhanushn113@gmail.com'
}
console.log(user);
delete user.age;
console.log(user);


console.log(Object.values(user));
for (let key in user) {
    console.log(user[key]);
}

user['roll'] = 233;
console.log(user);

user.phno=123;
console.log(user);

user.name='A Anbuden';
console.log(user);


let a = {
    c:2,
    d:4,
    e:7
}

console.log(a);
let b;
b = a;
console.log(b);
b.e=6;
console.log(b);