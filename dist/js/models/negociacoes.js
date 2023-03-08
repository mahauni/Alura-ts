export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicione(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        // se retornar apenas a negociação, não será possivel encapsular, pois ai seria possivel
        // modificar a lista de negociações mesmo a gente não querendo que possa podificar-la
        // se passassemos apenas o Array<T>, pois se passa uma referencia ao array passado
        return this.negociacoes;
    }
}
