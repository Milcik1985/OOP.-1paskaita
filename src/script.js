"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Sukurti User klasę; zr.User.ts
// 2. Klasėje turi būt reikšmės: name, age, nickName, password, dateCreated bei id; zr.User.ts
var User_js_1 = require("./User.js");
// 3. name, age, nickName, password turi būt paduodami kuriant naują instance. (per konstruktorių); zr.User.ts
var newUser = new User_js_1.User({
    userName: "Jonas",
    age: 35,
    nickName: "Joncia",
    password: "Labas123",
    dateCreated: new Date(),
    id: "",
});
var newUser2 = new User_js_1.User({
    userName: "Tomas",
    age: 45,
    nickName: "Tomcia",
    password: "Labas123",
    dateCreated: new Date(),
    id: "",
});
console.log(newUser);
console.log(newUser2);
// 4. dataCreated bei id turi būt sugeneruojami automatiškai. (reiks parašyt metodus kurie sugeneruoja reikšmes); zr.User.ts
// 5. name ir age turi turėt getterį bei setterį, nickName tik getterį;
// 6. Visi kintamieji turi būt private;
// 7. Visi metodai naudojami tik klasės viduje turi būt private;
// 8. Sukurti metodą, kuris atvaizduoja userio info išskyrus password;
// 9. Sukurti UserCreationType bei priskirti konstruktoriui;
// 10. Sukurti naują user index.ts faile. panaudoti getterius, setterius. Pabandyt displayint userį.
