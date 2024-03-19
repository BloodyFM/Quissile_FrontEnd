import { FormEvent, useContext, useState } from "react";
import QuestionInput from "../quiz/QuizBuilder/QuestionInput";
import { Question, QuizContext } from "../../App";
import QuestionItem from "./QuestionItem";

const QuestionPage: React.FC = () => {
    const { questions, setQuestions } = useContext(QuizContext);
    const [question, setQuestion] = useState("");

    const addQuestionHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newQuestion: Question = {
            id: Math.max(...questions.map((x) => x.id)) + 1,
            text: question,
            alternatives: [],
        };

        setQuestions([...questions, newQuestion]);
        setQuestion("");
    };

    const deleteQuestionById = (id: number) => {
        const newQuestions = questions.filter((q) => q.id !== id);
        setQuestions([...newQuestions]);
    };

    const saveQuestion = (q: Question) => {
        const index = questions.findIndex((x) => x.id === q.id);
        const newQuestions = [...questions];
        newQuestions[index] = { ...q };
        setQuestions([...newQuestions]);
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
                {questions.map((q) => (
                    <QuestionItem
                        key={q.id}
                        question={q}
                        deleteById={deleteQuestionById}
                        saveQuestion={saveQuestion}
                    />
                ))}
            </ul>
        </div>
    );
};

export default QuestionPage;
