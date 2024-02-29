// 1. Sukurti User klasę; zr.User.ts
// 2. Klasėje turi būt reikšmės: name, age, nickName, password, dateCreated bei id; zr.User.ts
import { User } from "./User.js";
// 3. name, age, nickName, password turi būt paduodami kuriant naują instance. (per konstruktorių); zr.User.ts
const newUser = new User("Jonas", 35, "Joncia", "Labas123");
console.log(newUser);
// 4. dataCreated bei id turi būt sugeneruojami automatiškai. (reiks parašyt metodus kurie sugeneruoja reikšmes);
// 5. name ir age turi turėt getterį bei setterį, nickName tik getterį;
// 6. Visi kintamieji turi būt private;
// 7. Visi metodai naudojami tik klasės viduje turi būt private;
// 8. Sukurti metodą, kuris atvaizduoja userio info išskyrus password;
// 9. Sukurti UserCreationType bei priskirti konstruktoriui;
// 10. Sukurti naują user index.ts faile. panaudoti getterius, setterius. Pabandyt displayint userį.
