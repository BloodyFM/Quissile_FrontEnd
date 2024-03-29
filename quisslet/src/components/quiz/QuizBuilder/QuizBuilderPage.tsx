import { FormEvent, MouseEvent, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Question, QuizContext } from "../../../App";
import QuestionInput from "./QuestionInput";
import QuestionFormFull from "./QuestionFormFull";
import {
    addQuestion,
    addQuestionToQuiz,
    addQuiz,
    deleteQuestion,
    updateTitle,
} from "../../../helpers/http";

const QuizBuilderPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const idNumber: number | undefined = id ? parseInt(id) : undefined;

    const { quizes, setQuizes, questions, setQuestions } =
        useContext(QuizContext);
    const index = quizes.findIndex((q) => q.id === idNumber);
    let quiz = { ...quizes[index] };
    if (index === -1)
        quiz = {
            id: -1,
            title: "loading",
            questions: [],
        };

    const [title, setTitle] = useState({ title: quiz.title, edit: false });
    const [question, setQuestion] = useState("");
    const [quizQuestions, setQuizQuestions] = useState<Question[]>(
        quiz.questions
    );

    useEffect(() => {
        setQuizQuestions([...quiz.questions]);
    }, [quiz.questions]);

    const saveTitleHandler = (
        event: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        if (title.title.trim() === "") return;
        quiz.title = title.title;
        //http req
        updateTitle(quiz.id, quiz.title);
        const newQuizes = [...quizes];
        newQuizes[index] = { ...quiz };
        setQuizes(newQuizes);
        setTitle({ title: quiz.title, edit: false });
    };

    const addQuestionHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (question.trim() === "") return;
        // adding question with no quiz
        const questionRes = await addQuestion(question);

        // Object for state
        const newQuestion: Question = {
            quizId: quiz.id,
            id: questionRes.data.id,
            text: questionRes.data.text,
            alternatives: questionRes.data.alternatives,
        };

        // add quizid to question
        await addQuestionToQuiz(newQuestion.id, newQuestion.text, quiz.id);

        setQuizQuestions([...quizQuestions, newQuestion]);
        setQuestion("");

        quiz.questions = [...quizQuestions, newQuestion];
        const newQuizes = [...quizes];
        newQuizes[index] = { ...quiz };
        setQuizes(newQuizes);
        setQuestions([...questions, newQuestion]);
    };

    const saveQuestionHandler = (newQuestion: Question) => {
        let newQuestions = [...questions];
        const questionIndex = questions.findIndex(
            (q) => q.id === newQuestion.id
        );
        newQuestions[questionIndex] = newQuestion;
        setQuestions([...newQuestions]); // update questions state

        newQuestions = newQuestions.filter((q) => q.quizId === quiz.id);
        const newQuiz = { ...quiz, questions: newQuestions };
        const newQuizes = [...quizes];
        const quizIndex = newQuizes.findIndex((q) => q.id === quiz.id);
        newQuizes[quizIndex] = newQuiz;
        setQuizes(newQuizes); // update quizes state
    };

    const deleteQuestionHandler = async (questionToDelete: Question) => {
        const newQuestions = questions.filter(
            (q) => q.id !== questionToDelete.id
        );
        setQuestions([...newQuestions]);

        const newQuizes = [...quizes];
        const newQuiz = { ...quiz };
        newQuiz.questions = newQuiz.questions.filter(
            (q) => q.id !== questionToDelete.id
        );

        const indexToUpdate = quizes.findIndex((x) => x.id === quiz.id);
        newQuizes[indexToUpdate] = newQuiz;

        setQuizes(newQuizes);
        await deleteQuestion(questionToDelete.id);
    };

    return (
        <div className="border border-secondary shadow p-2 m-0">
            <div className="border border-secondary shadow d-flex justify-content-between align-items-center p-2 m-2">
                {title.edit ? (
                    <form className="form-floating" onSubmit={saveTitleHandler}>
                        <input
                            className="form-control rounded-1 border-primary"
                            type="text"
                            id="name"
                            value={title.title}
                            required
                            placeholder="Name"
                            onChange={(event) => {
                                setTitle({
                                    ...title,
                                    title: event.target.value,
                                });
                            }}
                        />
                        <label className="form-label text-secondary">
                            Quiz Name
                        </label>
                    </form>
                ) : (
                    <h2>{quiz.title}</h2>
                )}
                <div>
                    {title.edit && (
                        <button
                            onClick={(e) => {
                                saveTitleHandler(e);
                            }}
                            className="btn btn-info mx-2"
                        >
                            Save
                        </button>
                    )}
                    <button
                        onClick={() => {
                            setTitle({ title: quiz.title, edit: !title.edit });
                        }}
                        className="btn btn-info"
                    >
                        {title.edit ? "Cancel" : "Edit"}
                    </button>
                </div>
            </div>
            <QuestionInput
                question={question}
                setQuestion={setQuestion}
                addQuestionHandler={addQuestionHandler}
            />
            <ul className="list-group m-2">
                {quizQuestions.map((q) => (
                    <QuestionFormFull
                        key={q.id}
                        question={{ ...q }}
                        saveQuestion={saveQuestionHandler}
                        deleteQuestion={deleteQuestionHandler}
                    />
                ))}
            </ul>
        </div>
    );
};

export default QuizBuilderPage;
