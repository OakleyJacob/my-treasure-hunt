import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Square from './components/Square';
function App() {
  const [gameActive, setGameActive] = useState(false)
  const [size, setSize] = useState(5)
  const [score, setScore] = useState(0)
  const [usedSquares, setUsedSquares] = useState([])
  const [squares, setSquares] = useState()
  const handleSliderChange = (e) => {
    if (!gameActive){
    setSize(e.target.value)
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

  const [randomInt, setRandomInt] = useState();
 const playGame = async ()  => {
    while (gameActive) {
      const randomID = await randomizeAfterOneSecond();
      const newSquares = (getNewSquares(randomID))
      setRandomInt(randomID)
      setSquares(newSquares)
      } 
      
      
      }
  useEffect(() => {
    console.log("Squares: "+squares);
  }, [squares])
  useEffect(() => {
    console.log("Random Int:"+ randomInt);
  },[randomInt])
  const getNewSquares = (id) => {
    console.log("Squares: "+squares);
    console.log(id);
    console.log("Random Int:"+randomInt);
    return squares
        .map((value, index) => {
 
        if (value === 'O'){
          console.log('y');
          return "Y"; 
        }
        else {
          return 'X'
        }
        
      }).map((value, index) => {
 
        if (index == id){
          return "O";
        }
        
        else {
          return value
        }
      })
  }
  const randomizeAfterOneSecond = () => {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let randomInt = Math.floor(Math.random() * squares.length)
        while(usedSquares.includes(randomInt)){
          randomInt = Math.floor(Math.random() * squares.length)
        }
        resolve(randomInt);
      }, 1000); 
    
  })}
  const getClicks = (status, id) => {
    const newUsedSquares = usedSquares
    newUsedSquares.push(id)
    setUsedSquares(newUsedSquares)
    status?(setScore(score+5), console.log(score+5)):(setGameActive(false), console.log('you lose'))
  }
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
    <input type="range" min="5" max="10" value={size} className="slider" id="myRange" onChange = {handleSliderChange}></input>
    <button onClick = {handleStart}>Start Game</button>
      <div className="gameBoard">
      {squares?.map((value, index) => {
        return <Square getClicks = {getClicks} size = {size} contents = {value} key = {index} id = {index}/>
      })} 
      </div>
    </>
  );

}
export default App;
