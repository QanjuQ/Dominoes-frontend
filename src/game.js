import {randomIndex,deleteAt} from './utils';

class Game {
    constructor(dominoes) {
        this._dock = dominoes;
        this.players = [];
    }

    addPlayer(player) {
        this.players.push(player);
    }

    setup() {
        this.players.forEach(player =>
            player.addDominoes(this.takeDominoes(5)));
    }

    takeDominoes(number) {
        let dominoes = [];
        for (let count = 0; count < number; count++) {
            let index = randomIndex(this._dock.length)
            dominoes.push(this._dock[index]);
            this._dock = deleteAt(this._dock,index);
        }
        return dominoes;
    }

    state () {
        return { players: this.players.reduce((state, player)=> ({...state,...player.state()}),{}),
            dock: this._dock};

    }

}

export default Game;
