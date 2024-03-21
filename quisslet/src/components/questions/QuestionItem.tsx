import { FormEvent, useState } from "react";
import { Question } from "../../App";
import { updateQuestion } from "../../helpers/http";

interface Props {
    question: Question;
    deleteById: (id: number) => void;
    saveQuestion: (q: Question) => void;
}

const QuestionItem: React.FC<Props> = ({
    question,
    deleteById,
    saveQuestion,
}) => {
    const [q, setQ] = useState(question.text);
    const [edit, setEdit] = useState(false);

    const saveQuestionHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (q.trim() === "") return;

        const newQuestion = question;
        newQuestion.text = q;
        const res = await updateQuestion(question.id, q)
        saveQuestion(res);
        setEdit(false);
    };

    return (
        <>
            {edit ? (
                <li className="list-group-item">
                    <form
                        className="form-floating d-flex justify-content-between align-items-center gap-2"
                        onSubmit={saveQuestionHandler}
                    >
                        <input
                            className="form-control rounded-1 border-primary"
                            type="text"
                            id="name"
                            value={q}
                            required
                            placeholder="Question"
                            onChange={(e) => setQ(e.target.value)}
                        />
                        <label className="form-label text-secondary">
                            Question
                        </label>
                        <button className="btn btn-info" type="submit">
                            Save
                        </button>
                        <button
                            className="btn btn-info"
                            onClick={() => {
                                setEdit(false);
                                setQ(question.text);
                            }}
                        >
                            Cancel
                        </button>
                    </form>
                </li>
            ) : (
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <p className="m-0">{question.text}</p>
                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-info"
                            onClick={() => {
                                setEdit(true);
                            }}
                        >
                            Edit
                        </button>
                        <button
                            className="btn btn-warning"
                            onClick={() => {
                                deleteById(question.id);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </li>
            )}
        </>
    );
};

export default QuestionItem;
