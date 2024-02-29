// 1. Sukurti User klasę; zr.User.ts
// 2. Klasėje turi būt reikšmės: name, age, nickName, password, dateCreated bei id; zr.User.ts
import { User } from "./User.js";

// 3. name, age, nickName, password turi būt paduodami kuriant naują instance. (per konstruktorių); zr.User.ts
const newUser = new User ({
    userName:"Jonas", 
    age: 35, 
    nickName: "Joncia", 
    password: "Labas123", 
    dateCreated: new Date(), 
    id: "",
});

const newUser2 = new User({
    userName:"Tomas", 
    age: 45, 
    nickName: "Tomcia", 
    password: "Labas123", 
    dateCreated: new Date(), 
    id: "",
})

console.log(newUser);
console.log(newUser2);

// 5. name ir age turi turėt getterį bei setterį, nickName tik getterį; zr.User.ts

newUser.setName("Vytautas");
const newUserName = newUser.getName();
console.log(newUserName)

const userName = newUser.getName();
console.log(userName);


newUser2.setName("Gitanas");
const newUserName2 = newUser2.getName();
console.log(newUserName2);

const userName2 = newUser2.getName();
console.log(userName2);


const userAge = newUser.getAge();
console.log(userAge)

const userAge2 = newUser2.getAge();
console.log(userAge2)

const nickName = newUser.getNickName();
console.log(nickName);

const nickName2 = newUser2.getNickName();
console.log(nickName2);

// 4. dataCreated bei id turi būt sugeneruojami automatiškai. (reiks parašyt metodus kurie sugeneruoja reikšmes); zr.User.ts
// 5. name ir age turi turėt getterį bei setterį, nickName tik getterį; zr.User.ts
// 6. Visi kintamieji turi būt private; zr.User.ts
// 7. Visi metodai naudojami tik klasės viduje turi būt private; zr.User.ts
// 8. Sukurti metodą, kuris atvaizduoja userio info išskyrus password;
const newUserInfo = newUser.getUserInfo();
console.log(newUserInfo);

// 9. Sukurti UserCreationType bei priskirti konstruktoriui; zr.User.ts
// 10. Sukurti naują user index.ts faile. panaudoti getterius, setterius. Pabandyt displayint userį.