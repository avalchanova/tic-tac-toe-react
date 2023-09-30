import Cell from './components/Cell.js';
import { useState, useEffect } from 'react';

const App = () => {
    const [cells, setCells] = useState(['', '', '', '', '', '', '', '', '']);
    const [go, setGo] = useState('circle'); // the first person to go will be the one who uses circle
    const [winningMessage, setWinningMessage] = useState(null);

    const message = 'It is ' + go + "'s turn.";
    console.log(cells);

    useEffect(() => {
        checkScore();
    }, [cells]); // everytime the array of cells changes (in this case the [cells] is the dependency), the useEffect
    //will run and the checkScore function will be evoked

    const checkScore = () => {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        winningCombos.forEach((array) => {
            let circleWins = array.every((cell) => cells[cell] === 'circle');
            if (circleWins) {
                setWinningMessage('Circle wins!');
                return;
            }
        });
        winningCombos.forEach((array) => {
            let crossWins = array.every((cell) => cells[cell] === 'cross');
            if (crossWins) {
                setWinningMessage('Cross wins!');
                return;
            }
        });
    };

    return (
        <div className="app">
            <div className="gameboard">
                {cells.map((cell, index) => (
                    <Cell
                        key={index}
                        id={index}
                        cell={cell}
                        cells={cells}
                        setCells={setCells}
                        go={go}
                        setGo={setGo}
                        winningMessage={winningMessage}
                    />
                ))}
            </div>
            <p>{winningMessage || message}</p>
            {/* if there is a winning message then we show it otherwise we show message */}
        </div>
    );
};

export default App;

// TODO:
// clear board after winning
// do not block page when clicked on the same cell
// instead display a warning message
