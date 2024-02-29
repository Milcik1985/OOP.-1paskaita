export class User {
    // 3. name, age, nickName, password turi būt paduodami kuriant naują instance. (per konstruktorių);
    constructor({ userName, age, nickName, password }) {
        this.dateCreated = this.generateCreatedDate();
        this.id = this.generateId();
        this.userName = userName;
        this.age = age;
        this.nickName = nickName;
        this.password = password;
        this.dateCreated = this.generateCreatedDate();
        this.id = this.generateId();
    }
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
    getName(userName) {
        return this.userName;
    }
    ;
    setName(name) {
        this.userName = name;
    }
    getAge(age) {
        return this.age;
    }
    ;
    getNickName(nickName) {
        return this.nickName;
    }
    ;
    generateId() {
        return Math.random().toString(36).substring(2);
    }
    ;
    generateCreatedDate() {
        return new Date();
    }
    ;
    // 8. Sukurti metodą, kuris atvaizduoja userio info išskyrus password;
    getUserInfo() {
        const userInfo = {
            userName: this.userName,
            age: this.age,
            nickName: this.nickName,
            dateCreated: this.generateCreatedDate(),
            id: this.generateId(),
        };
        return userInfo;
    }
    ;
}
;
