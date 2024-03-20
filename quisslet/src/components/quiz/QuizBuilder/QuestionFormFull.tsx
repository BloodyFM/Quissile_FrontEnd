import { Question } from "../../../App";

interface Props {
    question: Question;
}

const QuestionFormFull: React.FC<Props> = ({ question }) => {
    return (
        <li className="border border-secondary shadow p-2 m-0">
            <p>{question.text}</p>
            <form></form>
        </li>
    );
};

export default QuestionFormFull;
