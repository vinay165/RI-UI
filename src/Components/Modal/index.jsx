import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Conditional from '../Conditional'
import './index.scss';

function ModalComponent(props) {
    const {
        button,
        title,
        children,
        render,
        hideFooter,
        okButton = 'Save',
        closeButton = 'Close',
        onClose = () => { }
    } = props;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleOk = () => {
        onClose()
        setShow(false)
    };

    return (
        <>
            <Conditional condition={button}>
                <div className='modal__button'
                    onClick={handleShow}>{button}
                </div>
                <Button variant="primary" onClick={handleShow}>
                    Modal
                </Button>
            </Conditional>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Conditional condition={children && !render}>
                    <Modal.Body>{children}</Modal.Body>
                </Conditional>
                <Conditional condition={!children && render}>
                    {render && render(handleClose)}
                </Conditional>

                <Conditional condition={!hideFooter}>
                    <Modal.Footer>
                        <Button variant="secondary"
                            onClick={handleClose}>
                            {closeButton}
                        </Button>
                        <Button variant="primary"
                            onClick={handleOk}>
                            {okButton}
                        </Button>
                    </Modal.Footer>
                </Conditional>

            </Modal>
        </>
    );
}

export default ModalComponent;
