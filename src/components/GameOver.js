import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';


const GameOver = (props) => {
  return (
    <Modal isOpen={props.gameOver} toggle={() => setOpen(false)}>
    <ModalHeader>
      You lose!
    </ModalHeader>
    <ModalBody>
        Great job, your score was {props.score}. <button onClick ={() => location.reload()}>Play again?</button>
    </ModalBody>
  </Modal>
  )
}

export default GameOver