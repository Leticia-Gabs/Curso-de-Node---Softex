import {pessoa} from "./Pessoa";

export class P1 extends pessoa {
    public cpf : string

    constructor(nome, idade, cpf ){
        super (nome, idade )

        this.cpf = cpf
    }
    informação1(){}
}