import { Modal, Button } from "react-bootstrap";

interface Props {
    show: boolean;
    handleClose: () => void;
    handleDelete: () => void;
}

const SimpleModal: React.FC<Props> = ({ show, handleClose, handleDelete }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Quiz?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete the quiz?</p>
                <p>This action can not be reversed.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SimpleModal;
