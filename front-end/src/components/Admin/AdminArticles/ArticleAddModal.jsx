import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './adminarticles.css';

function ArticleAddModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Article
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex flex-row w-100'>
                    <div className='d-flex flex-column w-50'>
                        <span className='w-25'>Mountain name</span>
                        <input type="text" className='article-modal-add'/>
                    </div>
                    <div className='d-flex flex-column w-50'>
                        <span className='w-25'>Province</span>
                        <input type="text" className='article-modal-add'/>
                    </div>
                </div>
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ArticleAddModal;