import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import QuizPage from "./components/quiz/QuizPage";
import QuizBuilderPage from "./components/quiz/QuizBuilder/QuizBuilderPage";
import QuizViewPage from "./components/quiz/QuizView/QuizViewPage";
import { createContext, useState } from "react";

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

const initData: Quiz[] = [
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
    const [quizes, setQuizes] = useState(initData);

    return (
        <QuizContext.Provider value={{ quizes, setQuizes }}>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/quiz/" element={<QuizPage />} />
                    <Route path="/quiz/:id" element={<QuizViewPage />} />
                    <Route
                        path="/quiz/edit/:id"
                        element={<QuizBuilderPage />}
                    />
                    <Route path="/question/" element={<p>QuestionPage</p>} />
                </Routes>
            </Layout>
        </QuizContext.Provider>
    );
}

export default App;
export const QuizContext = createContext();
export type { Quiz, Question, Alternative };
