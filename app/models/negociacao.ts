export class Negociacao {
    private _data;
    private _quantidade;
    private _valor;

    constructor(data, quantidade, valor) {
        this._data = data;
        this._valor = valor;
        this._quantidade = quantidade;
    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor
    }

    get volume() {
        return this._valor * this._quantidade
    }
}
