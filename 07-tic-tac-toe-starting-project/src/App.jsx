import Player from './components/Player.jsx'
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from './components/Log.jsx'

function deriveActivePlayer(gameTurns) {
    let currentPLayer = "X";
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPLayer = "O";
    }
    return currentPLayer;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = deriveActivePlayer(gameTurns);

    function handleSelectSquare(rowIndex, colIndex) {
        // setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : "X")
        setGameTurns(prevTurns => {
            let currentPLayer = deriveActivePlayer(prevTurns);
            const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: currentPLayer}, ...prevTurns];
            return updatedTurns;
        });
    }

    return (
        <main>
            <div id='game-container'>
                <ol id='players' className="highlight-player">
                    <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}></Player>
                    <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}></Player>
                </ol>
                <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}></GameBoard>
            </div>
            <Log turns={gameTurns}></Log>
        </main>
    )
}

export default App
