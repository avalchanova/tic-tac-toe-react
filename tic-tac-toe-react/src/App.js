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
                    />
                ))}
            </div>
            <p>{message}</p>
        </div>
    );
};

export default App;
