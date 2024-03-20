import { Question } from "../../../App";

interface Props {
    question: Question;
    showAnswers: boolean;
}

const QuizViewQuestion: React.FC<Props> = ({ question, showAnswers }) => {
    let wrongAlternatives = 0;
    for (let i = 0; i < question.alternatives.length; i++) {
        if (!question.alternatives[i].isAnswer) wrongAlternatives++;
    }
    const canShow =
        question.alternatives.length >= 2 &&
        wrongAlternatives >= 1 &&
        !showAnswers;

    return (
        <li className="m-3">
            <p>{question.text}</p>
            {canShow && (
                <ol type="A">
                    {question.alternatives.map((a) => (
                        <li>{a.text}</li>
                    ))}
                </ol>
            )}
            {showAnswers && (
                <ol type="A">
                    {question.alternatives.map((a) => (
                        <li>{a.isAnswer ? a.text + " (answer)" : a.text}</li>
                    ))}
                </ol>
            )}
        </li>
    );
};

export default QuizViewQuestion;
