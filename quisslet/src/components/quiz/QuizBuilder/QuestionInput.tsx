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
        <div className="border border-secondary shadow d-flex justify-content-around align-items-center p-2 m-2">
            <form
                className="form-floating d-flex justify-content-around"
                onSubmit={addQuestionHandler}
            >
                <input
                    className="form-control rounded-1 border-primary"
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
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default QuestionInput;
