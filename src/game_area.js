import React from "react";
import Domino from "./domino";
import {dominoes} from './utils';
import Game from './game';
import Player from './player';

function PlayerDeck(props){
    let dominoes = props.dominoes.map(
        (domino,index) => (<Domino key= {"domino" + index} top = {domino[0]} bottom = {domino[1]} direction={props.direction} />));

    return (<div className = { ["player-deck", props.className ].join(" ")}>
        {dominoes}
    </div>);
};


function Dock (props){
    return(<div className = "dock" >
       {props.dominoes.map((domino,index)=>(<FlippedDomino key = {"fdomino" + index}/>))}
    </div>);

}

function FlippedDomino (props) {
    return (<div className="domino"/>)
}

function createGame () {
    let game = new Game(dominoes.slice());
    [1,2,3,4].map((id)=>new Player(id)).forEach((player)=> game.addPlayer(player));
    game.setup();
    return game;
};

function GameArea(){
    let game = createGame();
    let state = game.state();
    return (<div className = "game-area">
    <Dock dominoes = {state.dock}/>
    <PlayerDeck dominoes = {state.players[1]} direction = "vertical" className = "top-deck"/>
    <PlayerDeck dominoes = {state.players[2]} direction = "vertical" className = "bottom-deck"/>
    <PlayerDeck dominoes = {state.players[3]} direction = "horizontal" className = "left-deck"/>
    <PlayerDeck dominoes = {state.players[4]} direction = "horizontal" className = "right-deck"/>
    </div>);

}

export default GameArea;
