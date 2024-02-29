// 2. Klasėje turi būt reikšmės: name, age, nickName, password, dateCreated bei id;
export class User {

// 3. name, age, nickName, password turi būt paduodami kuriant naują instance. (per konstruktorių);
    constructor(userName, age, nickName, password) {
        this.userName = userName;
        this.age = age;
        this.nickName = nickName;
        this.password = password;
    }
    userName: string;
    age: number;
    nickName: string;
    password: string;
    dateCreated: Date;
    id: string;
}