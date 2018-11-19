export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    phones = new Array<Phone>();
    token: string;
  }

export class Phone {
    ddd: string;
    phoneNumber: string;
  
    constructor(
      ddd?: string,
      phoneNumber?: string) {
        this.ddd = ddd;
        this.phoneNumber = phoneNumber;
    }    
}

export class LoginDTO {
  email: string;
  password: string;
}

export class UserFiltro {
  id: string;
  nome: string;
}