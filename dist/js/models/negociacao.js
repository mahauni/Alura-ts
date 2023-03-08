export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        // toda vez em que seja possivel modificar uma variavel,
        // clone a variavel e retorne o clone, pq ao modificar,
        // modificaria apenas o clone e não a data real.
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.valor * this.quantidade;
    }
}
