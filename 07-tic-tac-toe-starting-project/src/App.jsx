import Player from './components/Player.jsx';
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from './components/Log.jsx';
import GameOver from './components/GameOVer.jsx';
import {WINNING_COMBINATIONS} from './winning_combiniations.js';

const PLAYERS = {
    X: "Player 1",
    O: "Player 2"
}

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function deriveActivePlayer(gameTurns) {
    let currentPLayer = "X";
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPLayer = "O";
    }
    return currentPLayer;
}

function deriveWinner(gameBoard, players) {
    let winner = null;

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
            winner = players[firstSquareSymbol];
        }
    }
    return winner;
}

function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }
    return gameBoard;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const [players, setPlayers] = useState(PLAYERS)

    const activePlayer = deriveActivePlayer(gameTurns);
    const gameBoard = deriveGameBoard(gameTurns);
    const winner = deriveWinner(gameBoard, players);
    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns(prevTurns => {
            let currentPLayer = deriveActivePlayer(prevTurns);
            const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: currentPLayer}, ...prevTurns];
            return updatedTurns;
        });
    }

    function handleRestart() {
        setGameTurns([]);
    }

    function handlePlayerNameChange(symbol, newName) {
        setPlayers(prevPlayers => {
            return {
                ...prevPlayers,
                [symbol]: newName
            };
        })
    }

    return (
        <main>
            <div id='game-container'>
                <ol id='players' className="highlight-player">
                    <Player initialName={PLAYERS.X} symbol="X" onChangeName={handlePlayerNameChange}
                            isActive={activePlayer === "X"}></Player>
                    <Player initialName={PLAYERS.O} symbol="O" onChangeName={handlePlayerNameChange}
                            isActive={activePlayer === "O"}></Player>
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
                <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}></GameBoard>
            </div>
            <Log turns={gameTurns}></Log>
        </main>
    )
}

export default App;
