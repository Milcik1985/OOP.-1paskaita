"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// 2. Klasėje turi būt reikšmės: name, age, nickName, password, dateCreated bei id;
var User = /** @class */ (function () {
    // 3. name, age, nickName, password turi būt paduodami kuriant naują instance. (per konstruktorių);
    function User(userName, age, nickName, password) {
        this.userName = userName;
        this.age = age;
        this.nickName = nickName;
        this.password = password;
    }
    return User;
}());
exports.User = User;
