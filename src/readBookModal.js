import Modal from 'react-bootstrap/Modal';
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import './css/buttonFix.css';



function ReadBook(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => {
        setShow(false);
        console.log("It has closed");
    }

    const handleYes = () => {
        setShow(false);
        console.log(props.data)
       var url = "http://localhost:3000/pdf?hash="+props.data;

       window.location.href = url;
    } 

    const handleShow = () => setShow(true);


  
    return (
      <>
        <Button className="button" variant="primary" onClick={handleShow}>
        Read
        </Button>
        {/* {props.data.name} */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Read Book</Modal.Title>
          </Modal.Header>
    <Modal.Body>Click Yes to Open the Book {props.data} </Modal.Body>
          <Modal.Footer>
            <Button className="button" variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button className="button"  variant="primary" onClick={handleYes}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    );
  }
  
  export default ReadBook;