import { FormEvent } from "react";

interface Props {
    question: string;
    setQuestion: (question: string) => void;
    addQuestionHandler: (event: FormEvent<HTMLFormElement>) => void;
}

const QuestionInput: React.FC<Props> = ({
    question,
    setQuestion,
    addQuestionHandler,
}) => {
    return (
        <div className="border border-secondary shadow p-2 m-2">
            <form
                className="form-floating d-flex justify-content-between gap-2 w-100"
                onSubmit={addQuestionHandler}
            >
                <input
                    className="form-control rounded-1 border-primary w-100"
                    type="text"
                    id="name"
                    value={question}
                    required
                    placeholder="Name"
                    maxLength={20}
                    onChange={(event) => {
                        setQuestion(event.target.value);
                    }}
                />
                <label className="form-label text-secondary">Question</label>
                <button type="submit" className="btn btn-info">Add</button>
            </form>
        </div>
    );
};

export default QuestionInput;
