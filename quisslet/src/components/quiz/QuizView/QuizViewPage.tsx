import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { QuizContext } from "../../../App";
import QuizViewQuestion from "./QuizViewQuestion";

const QuizViewPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const idNumber: number | undefined = id ? parseInt(id) : undefined;

    const { quizes } = useContext(QuizContext);
    const index = quizes.findIndex((q) => q.id === idNumber);
    const quiz = { ...quizes[index] };

    const [showAnswers, setShowAnswers] = useState(false);

    return (
        <div className="border border-secondary shadow p-2 m-0">
            <h2 className="m-5">{quiz.title}</h2>
            <button
                className="btn btn-warning"
                onClick={() => {
                    setShowAnswers(!showAnswers);
                }}
            >
                {showAnswers ? "Hide Answers" : "Show Answers"}
            </button>
            <ol type="1">
                {quiz.questions.map((q) => (
                    <QuizViewQuestion question={q} showAnswers={showAnswers} />
                ))}
            </ol>
        </div>
    );
};

export default QuizViewPage;
