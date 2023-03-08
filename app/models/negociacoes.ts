import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adicione(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
    
    lista(): ReadonlyArray<Negociacao> {
        // se retornar apenas a negociação, não será possivel encapsular, pois ai seria possivel
        // modificar a lista de negociações mesmo a gente não querendo que possa podificar-la
        // se passassemos apenas o Array<T>, pois se passa uma referencia ao array passado
        return this.negociacoes;
    }
}