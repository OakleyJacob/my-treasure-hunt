import React, { useEffect, useState } from 'react'

const Square = (props) => {
    const [size, setSize] = useState('5')
    const [whackPhase, setWhackPhase] = useState(0)
    useEffect(() => {
        setSize(props.size)
    }, [props])

    const handleClick = () => {
        if (whackPhase == 0){
            console.log('nothing');
            return
        }
        else if (whackPhase ==1 ){
            props.getClicks(true, props.id)
            setWhackPhase(3)
        }
        else if (whackPhase ==2 ){
            props.getClicks(false, props.id)
        }
    }
    useEffect(() => {
        if (props.contents === 'O'&&whackPhase !== 3){
            setWhackPhase(1)
        }
        else if (whackPhase !==3){
            setWhackPhase(0)
        }
    }, [props])
    const myColors = () => {
        switch (whackPhase){
            case 0:
                return {backGroundColor: 'white'}
            case 1:
                return {backgroundColor: 'green'}
            case 2:
                return {backgroundColor: 'red'}
            case 3:
                return {backgroundColor: 'blue'}
        }
    }
    const myStyle = (int) => {
       switch (int){
            case '5':
                return {
                    height: '15vh',
                    aspectRatio: 1
                }
            case '6':
                return {
                    height: '12.5vh',
                    aspectRatio: 1
                }
            case '7':
                return {
                    height: '10.7142857143vh',
                    aspectRatio: 1
                }
            case '8':
                return {
                    height: '9.375vh',
                    aspectRatio: 1
                }
            case '9':
                return {
                    height: '8.33333333333333333vh',
                    aspectRatio: 1
                }
            case '10':
                return {
                    height: '7.5vh',
                    aspectRatio: 1
                }


    }}
  return (

    <div style = {myColors()}><div className = 'square' style = {myStyle(size)} onClick = {() => handleClick()}>{props.contents}</div></div>
  )
}

export default Square