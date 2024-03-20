import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import QuizPage from "./components/quiz/QuizPage";
import QuizBuilderPage from "./components/quiz/QuizBuilder/QuizBuilderPage";
import QuizViewPage from "./components/quiz/QuizView/QuizViewPage";
import { createContext, useEffect, useState } from "react";
import QuestionPage from "./components/questions/QuestionPage";
import { deleteQuizById, getQuestions, getQuizes, updateTitle, addQuiz } from "./helpers/http";

interface Alternative {
    id: number;
    text: string;
    isAnswer: boolean;
}
interface Question {
    quiz_id: number | null;
    id: number;
    text: string;
    alternatives: Alternative[];
}
interface Quiz {
    id: number;
    title: string;
    questions: Question[];
}

const initQuestionData: Question[] = [
    {
        quiz_id: 1,
        id: 1,
        text: "What is the title of the first book in the bestsellig series The Horus Heresy?",
        alternatives: [
            {
                id: 1,
                text: "Horus Rising",
                isAnswer: true,
            },
            {
                id: 2,
                text: "Legion",
                isAnswer: false,
            },
        ],
    },
    {
        quiz_id: 1,
        id: 2,
        text: "Did Magnus derserve it?",
        alternatives: [
            {
                id: 3,
                text: "Yes",
                isAnswer: true,
            },
            {
                id: 4,
                text: "No",
                isAnswer: false,
            },
        ],
    },
    {
        quiz_id: null,
        id: 3,
        text: "Question 3",
        alternatives: [],
    },
];

const initQuizData: Quiz[] = [
    {
        id: 1,
        title: "First quiz",
        questions: [{ ...initQuestionData[0] }, { ...initQuestionData[1] }],
    },
    {
        id: 2,
        title: "Another quiz",
        questions: [],
    },
];

function App() {
    const [quizes, setQuizes] = useState(initQuizData);
    const [questions, setQuestions] = useState(initQuestionData);

    useEffect(() => {
        fetchQuizData()
        fetchQuestionData()
    }, [])

    const fetchQuizData = async () => {
        const data = await getQuizes()
        setQuizes(data.data)
    }
    const fetchQuestionData = async () => {
        const data = await getQuestions()
        setQuestions(data.data)
    }

    return (
        <QuizContext.Provider
            value={{ quizes, setQuizes, questions, setQuestions }}
        >
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/quiz/" element={<QuizPage />} />
                    <Route path="/quiz/:id" element={<QuizViewPage />} />
                    <Route
                        path="/quiz/edit/:id"
                        element={<QuizBuilderPage />}
                    />
                    <Route path="/question/" element={<QuestionPage />} />
                </Routes>
            </Layout>
        </QuizContext.Provider>
    );
}

export default App;
export const QuizContext = createContext<{
    quizes: Quiz[];
    setQuizes: React.Dispatch<React.SetStateAction<Quiz[]>>;
    questions: Question[];
    setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
}>({
    quizes: [],
    setQuizes: () => {},
    questions: [],
    setQuestions: () => {},
});
export type { Quiz, Question, Alternative };
