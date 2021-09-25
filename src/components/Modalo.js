import React from 'react';
import { Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

export default function Modalo (props) {

  return (
    <>

      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>{props.post.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.post.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
