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
    generateId() {
        return Math.random().toString(36).substring(2);
    }
    ;
    generateCreatedDate() {
        return new Date();
    }
    ;
}
;
