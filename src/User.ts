// 2. Klasėje turi būt reikšmės: name, age, nickName, password, dateCreated bei id;
type UserType = {
    userName: string; 
    age: number; 
    nickName: string; 
    password:string; 
    dateCreated: Date; 
    id:string;
}

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

    userName: string;
    age: number;
    nickName: string;
    password: string;
    dateCreated: Date = this.generateCreatedDate();
    id: string = this.generateId();
    
// 4. dataCreated bei id turi būt sugeneruojami automatiškai. (reiks parašyt metodus kurie sugeneruoja reikšmes);
    generateId(): string {
        return Math.random().toString(36).substring(2);
    };

    generateCreatedDate(): Date{
        return new Date();
    };

};



