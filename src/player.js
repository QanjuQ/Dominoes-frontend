class Player{
    constructor(name){
        this.name = name;
        this._dominoes = [];
    }

    addDominoes (dominoes) {
        dominoes.forEach((domino)=>this._dominoes.push(domino));
    }

    addDomino (domino) {
        this._dominoes.push(domino);
    }

    state() {
       return { [this.name] : this._dominoes };
    }
}

export default Player;
