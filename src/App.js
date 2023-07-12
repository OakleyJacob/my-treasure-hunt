import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Square from './components/Square';
import GameOver from './components/GameOver';
import GameStart from './components/GameStart';

function App() {
  const [gameActive, setGameActive] = useState(false)
  const [score, setScore] = useState(0)
  const [size, setSize] = useState(5)
  const [time, setTime] = useState(1750)
  const [usedSquares, setUsedSquares] = useState([])
  const [squares, setSquares] = useState()
  const handleSliderChange = (e) => {
    if (!gameActive){
    setSize(e.target.value)
    }
  }
  const handleTimeSliderChange = (e) => {
    if (!gameActive){
    setTime(e.target.value)
    console.log(time);
    }
  }
  useEffect(() => {
    const newSquares = []

    switch (size){
      
      case '5':
          for (let i = 1; i <= size**2; i++) {
          newSquares.push('Z');

          }
          break
      case '6':
        for (let i = 1; i <= size**2; i++) {
          newSquares.push('Z');
       
        }
        break
      case '7':
        for (let i = 1; i <= size**2; i++) {
          newSquares.push('Z');
        }
        break
      case '8':
        for (let i = 1; i <= size**2; i++) {
          newSquares.push('Z');
        }
        break
      case '9':
        for (let i = 1; i <= size**2; i++) {
          newSquares.push('Z');
        }
        break
      case '10':
        for (let i = 1; i <= size**2; i++) {
          newSquares.push('Z');
        }
        break
        }
        if (newSquares.length>0){
          setSquares(newSquares)

        }
    
  }, [size])

  const playGame = async ()  => {
    setSquares(getNewSquares(Math.floor(Math.random() * squares.length)))
    while (gameActive) {
      const randomID = await randomizeAfterOneSecond();
      const newSquares = (getNewSquares(randomID))
      
      setSquares(newSquares)
      } 
      
      
      }

  const getNewSquares = (id) => {

    return squares.map((value, index) => {
 
        if (index == id){
          return "O";
        }
        
        else {
          return value
        }
      })
  }
  const randomizeAfterOneSecond = () => {
    if (gameActive){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let randomInt = Math.floor(Math.random() * squares.length)
        while(usedSquares.includes(randomInt)){
          randomInt = Math.floor(Math.random() * squares.length)
        }
        resolve(randomInt);
      }, time); 
    
  })}}
  const getClicks = (status, id) => {
    const newUsedSquares = usedSquares
    newUsedSquares.push(id)
    setUsedSquares(newUsedSquares)
    status?(setScore(score+Math.floor((15-size)/(time/1000)))):(setGameActive(false), setGameOver(true))
  }
  const [gameOver, setGameOver] = useState(false)
  useEffect(() => {
    if(gameActive){
      playGame()
    }
  }, [gameActive])
  useEffect(() => {
    const firstSquares = []
    for (let i = 1; i <= 25; i++) {
      firstSquares.push('X');
  }
  setSquares(firstSquares)}
  , [])

  const handleStart = () => {
    setGameActive(true)
  } 
  return (
    <>
   
      <div className="gameBoard">
      <GameStart />
      <GameOver gameOver={gameOver} score = {score}/>
      {squares?.map((value, index) => {
        return <Square gameActive = {gameActive} getClicks = {getClicks} size = {size} contents = {value} key = {index} id = {index}/>
      })} 
      </div>
      <h2> <input type="range" min="5" max="10" value={size} className="slider" id="myRange" onChange = {handleSliderChange}></input>  Size: {size}x{size}</h2> 
      <h2> <input type="range" min="500" max="3000" value={time} className="slider" id="myTimeRange" onChange = {handleTimeSliderChange}></input> Time(in s): {(time/1000).toFixed(1)}</h2> 
     <div>{gameActive||<button onClick = {handleStart}>Start Game</button> }{gameActive&& <h2>Your score is currently {score}!</h2>}</div> 
    </>
  );

}
export default App;
