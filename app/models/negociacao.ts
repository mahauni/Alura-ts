export class Negociacao {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get data(): Date {
        // toda vez em que seja possivel modificar uma variavel,
        // clone a variavel e retorne o clone, pq ao modificar,
        // modificaria apenas o clone e não a data real.
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume(): Number {
        return this.valor * this.quantidade;
    }
}
