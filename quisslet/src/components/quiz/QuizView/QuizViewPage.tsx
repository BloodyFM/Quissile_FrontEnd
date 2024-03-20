import { useContext } from "react";
import { useParams } from "react-router-dom";
import { QuizContext } from "../../../App";

const QuizViewPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const idNumber: number | undefined = id ? parseInt(id) : undefined;

    const { quizes } = useContext(QuizContext);
    const index = quizes.findIndex((q) => q.id === idNumber);
    const quiz = { ...quizes[index] };
    return (
        <div>
            <h2>QuizViewPage</h2>
            <p>{quiz.title}</p>
        </div>
    );
};

export default QuizViewPage;
