import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import QuizPage from "./components/quiz/QuizPage";
import QuizBuilderPage from "./components/quiz/QuizBuilder/QuizBuilderPage";
import QuizViewPage from "./components/quiz/QuizView/QuizViewPage";
import { createContext, useState } from "react";
import QuestionPage from "./components/questions/QuestionPage";

interface Alternative {
    id: number;
    text: string;
    isAnswer: boolean;
}
interface Question {
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
        id: 2,
        text: "Question 2",
        alternatives: [],
    },
];

const initQuizData: Quiz[] = [
    {
        id: 1,
        title: "First quiz",
        questions: [],
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
