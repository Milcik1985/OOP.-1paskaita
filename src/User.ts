// 2. Klasėje turi būt reikšmės: name, age, nickName, password, dateCreated bei id;
type UserType = {
    userName: string; 
    age: number; 
    nickName: string; 
    password:string; 
    dateCreated: Date; 
    id:string;
}

// 9. Sukurti UserCreationType bei priskirti konstruktoriui;

type UsearCreationType = Omit<UserType, "id" & "dateCreated">

export class User {

// 3. name, age, nickName, password turi būt paduodami kuriant naują instance. (per konstruktorių);
    constructor({userName, age, nickName, password}:UsearCreationType){
        this.userName = userName;
        this.age = age;
        this.nickName = nickName;
        this.password = password;
        this.dateCreated = this.generateCreatedDate();
        this.id = this.generateId();
        }
// 6. Visi kintamieji turi būt private (pridedam priekyje kiekvieno property "private");
    private userName: string;
    private age: number;
    private nickName: string;
    private password: string;
    private dateCreated: Date = this.generateCreatedDate();
    private id: string = this.generateId();

// 4. dataCreated bei id turi būt sugeneruojami automatiškai. (reiks parašyt metodus kurie sugeneruoja reikšmes);


    /*generateId(): string {
        return Math.random().toString(36).substring(2);
    };

    generateCreatedDate(): Date{
        return new Date();
    };*/

// 5. name ir age turi turėt getterį bei setterį, nickName tik getterį;
/*getName() {
    return this.userName;
};

setName(name: string) {
    this.userName = name;
}

getAge() {
    return this.age;
};

getNickName() {
    return this.nickName;
};*/


// 7. Visi metodai naudojami tik klasės viduje turi būt private;
getName(userName: UserType["userName"]) {
    return this.userName;
};

setName(name: UserType["userName"]) {
    this.userName = name;
}

getAge(age: UserType["age"]) {
    return this.age;
};

getNickName(nickName: UserType["nickName"]) {
    return this.nickName;
};

private generateId(): string {
    return Math.random().toString(36).substring(2);
};

private generateCreatedDate(): Date{
    return new Date();

};

// 8. Sukurti metodą, kuris atvaizduoja userio info išskyrus password;
getUserInfo() {
    type NewUsearCreationType = Omit<UserType, "password">;
    const userInfo: NewUsearCreationType = {
        userName: this.userName,
        age: this.age,
        nickName: this.nickName,
        dateCreated: this.generateCreatedDate(),
        id: this.generateId(),
    }
    return userInfo;
};




};
