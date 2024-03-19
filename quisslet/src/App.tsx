import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import QuizPage from "./components/quiz/QuizPage";
import QuizBuilderPage from "./components/quiz/QuizBuilder/QuizBuilderPage";
import QuizViewPage from "./components/quiz/QuizView/QuizViewPage";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/quiz/" element={<QuizPage />} />
                <Route path="/quiz/:id" element={<QuizViewPage />} />
                <Route path="/quiz/edit/:id" element={<QuizBuilderPage />} />
                <Route path="/question/" element={<p>QuestionPage</p>} />
            </Routes>
        </Layout>
    );
}

export default App;
