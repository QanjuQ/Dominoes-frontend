import React from 'react';

const dominoSideValues = {
    0: [],
    1: [4],
    2: [3,5],
    3: [2,4,6],
    4: [0,2,6,8],
    5: [0,2,4,6,8],
    6: [0,3,6,2,5,8]
};

function Cell(props) {
    return (
    <td className = "cell">
      {props.content}
    </td>
  );
};

function Row(props) {
    const cells = props.cells;
    const cellList = cells.map((number) =>{
        let content = '';
        if(props.cellsToFill.includes(number)){
            content = <button className = 'dot'/>;
        }
      return <Cell key={"cell-" + number + props.index}
                content = {content} />
    });
    return (<tr>{cellList}</tr>);
};


function DominoSide (props) {
    const dotArrangement = {
        vertical : [[0,1,2],[3,4,5],[6,7,8]],
        horizontal : [[0,3,6],[1,4,7],[2,5,8]]};
    const rows = dotArrangement[props.direction].map((cells,index) =>
        <Row key = {"row-" + index} index = {index} cells = {cells}  cellsToFill = {dominoSideValues[props.value]}/>);

    return ( <table cellPadding = "0" cellSpacing = "0"
    className = {["side", props.position].join(" ")} >
    <tbody>{rows}</tbody></table>);
};

function Domino (props) {
    const layout = {
        vertical : ["top","bottom"],
        horizontal : ["left","right"],
    };
    return(
    <div className = {["domino", props.direction].join(" ")}>
    <DominoSide value = {props.top} position = {layout[props.direction][0]} direction= {props.direction}/>
    <DominoSide value = {props.bottom} position = {layout[props.direction][1]} direction= {props.direction}/>
    </div>
    );
}

export default Domino;
