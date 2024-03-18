import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/quiz/" element={<p>QuizPage</p>} />
                <Route path="/question/" element={<p>QuestionPage</p>} />
            </Routes>
        </Layout>
    );
}

export default App;
