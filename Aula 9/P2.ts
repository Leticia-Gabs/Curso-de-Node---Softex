import {pessoa} from "./Pessoa";

export class P1 extends pessoa {
    public cnpj : string

    constructor(nome, idade , cnpj ){
        super (nome, idade )

        this.cnpj = cnpj 
    }
    informação2(){}
}