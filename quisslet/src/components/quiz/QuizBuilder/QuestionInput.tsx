import { FormEvent, useContext } from "react";
import { QuizContext } from "../../../App";

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
    const { questions } = useContext(QuizContext);
    const filteredQuestions = questions.filter((question, index, self) => {
        // Keep only the first occurrence of each string
        return self.findIndex((q) => q.text === question.text) === index;
    });
    return (
        <div className="border border-secondary shadow p-2 m-2">
            <form
                className="form-floating d-flex justify-content-between gap-2 w-100"
                onSubmit={addQuestionHandler}
            >
                <input
                    className="form-control rounded-1 border-primary w-100"
                    type="text"
                    id="question"
                    value={question}
                    required
                    list="options"
                    placeholder="Question"
                    onChange={(event) => {
                        setQuestion(event.target.value);
                    }}
                />
                <label className="form-label text-secondary">Question</label>
                <datalist id="options">
                    {filteredQuestions.map((question) => (
                        <option value={question.text} />
                    ))}
                </datalist>
                <button type="submit" className="btn btn-info">
                    Add
                </button>
            </form>
        </div>
    );
};

export default QuestionInput;
