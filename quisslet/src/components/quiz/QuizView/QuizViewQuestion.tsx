import { Question } from "../../../App";

interface Props {
    question: Question;
    index: number;
    showAnswers: boolean;
}

const QuizViewQuestion: React.FC<Props> = ({
    question,
    index,
    showAnswers,
}) => {
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
            <p>{index + 1 + ") " + question.text}</p>
            {canShow && (
                <ul>
                    {question.alternatives.map((a) => (
                        <li>{a.text}</li>
                    ))}
                </ul>
            )}
            {showAnswers && (
                <ul>
                    {question.alternatives.map((a) => (
                        <li>{a.isAnswer ? a.text + " (answer)" : a.text}</li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default QuizViewQuestion;
