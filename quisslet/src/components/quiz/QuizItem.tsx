import { Link } from "react-router-dom";
import { Quiz } from "../../App";
import SimpleModal from "../ui/SimpleModal";
import { useState } from "react";

interface Props {
    quiz: Quiz;
    handleRemove: (id: number) => void;
}

const QuizItem: React.FC<Props> = ({ quiz, handleRemove }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <li
                className="list-group-item d-flex justify-content-evenly align-items-center"
                key={quiz.id}
            >
                <Link to={"/quiz/" + quiz.id}>{quiz.title}</Link>
                <Link to={"/quiz/edit/" + quiz.id}>Edit</Link>
                <button
                    className="btn btn-warning"
                    onClick={() => {
                        setShowModal(true);
                    }}
                >
                    Delete
                </button>
            </li>
            <SimpleModal
                show={showModal}
                handleClose={() => {
                    setShowModal(false);
                }}
                handleDelete={() => {
                    handleRemove(quiz.id);
                    setShowModal(false);
                }}
            />
        </>
    );
};

export default QuizItem;
