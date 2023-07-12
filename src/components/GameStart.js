import React, {useState} from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

const GameStart = () => {
    const [open, setOpen] = useState(true)
  return (
    <Modal isOpen={open} toggle={() => setOpen(false)}>
    <ModalHeader>
      Welcome to Whack-a-Square
    </ModalHeader>
    <ModalBody>
        Choose the size of your board, and your desired time setting. Once the game has begun, simply click the green squares while avoiding the red ones!
        Click anywhere to begin selection!
    </ModalBody>
  </Modal>
  )
}

export default GameStart