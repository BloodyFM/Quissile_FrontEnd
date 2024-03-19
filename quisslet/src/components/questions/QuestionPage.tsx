import { FormEvent, useContext, useState } from "react";
import QuestionInput from "../quiz/QuizBuilder/QuestionInput";
import { Question, QuizContext } from "../../App";

const QuestionPage: React.FC = () => {
    const { questions, setQuestions } = useContext(QuizContext);
    const [question, setQuestion] = useState("");

    const addQuestionHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newQuestion: Question = {
            id: 1,
            text: question,
            alternatives: [],
        };

        setQuestions([...questions, newQuestion]);
        setQuestion("");
    };

    return (
        <div className="border border-secondary shadow p-2 m-0">
            <h2 className="m-5">QuestionsPage</h2>
            <QuestionInput
                question={question}
                setQuestion={setQuestion}
                addQuestionHandler={addQuestionHandler}
            />
            <ul className="list-group m-3">
                {questions.map((q, i) => (
                    <li className="list-group-item" key={i}>
                        {q.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionPage;
