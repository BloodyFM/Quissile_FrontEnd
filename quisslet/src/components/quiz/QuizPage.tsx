import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Quiz, QuizContext } from "../../App";

interface Props {}

const QuizPage: React.FC<Props> = () => {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const { quizes, setQuizes } = useContext(QuizContext);

    const addQuizHandler = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        if (name.trim() === "") return;
        const newQuiz: Quiz = {
            id: Math.max(...quizes.map((x) => x.id)) + 1,
            title: name,
            questions: [],
        };
        setQuizes([...quizes, newQuiz]);
        setName("");
        setShowModal(false);
    };

    const removeQuizHandler = (id: number) => {
        console.log("hello!");
        const newQuizes = quizes.filter((q) => q.id !== id);
        console.log(id);
        console.log(newQuizes);
        setQuizes([...newQuizes]);
    };

    return (
        <>
            <div className="border border-secondary shadow p-2 m-0">
                <h2 className="m-5">Quiz Page!</h2>
                <button
                    onClick={() => {
                        setShowModal(!showModal);
                    }}
                    className="btn btn-primary m-3"
                >
                    {showModal ? "Cancel" : "Add Quiz"}
                </button>

                {showModal ? (
                    <form onSubmit={addQuizHandler}>
                        <div className="form-floating">
                            <input
                                className="form-control rounded-1 border-primary"
                                type="text"
                                id="name"
                                value={name}
                                required
                                placeholder="Name"
                                maxLength={20}
                                onChange={(event) => {
                                    setName(event.target.value);
                                }}
                            />
                            <label className="form-label text-secondary">
                                Quiz Name
                            </label>
                        </div>
                    </form>
                ) : (
                    <ul className="list-group m-3">
                        {quizes.map((quiz) => (
                            <li
                                className="list-group-item d-flex justify-content-evenly align-items-center"
                                key={quiz.id}
                            >
                                <Link to={"/quiz/" + quiz.id}>
                                    {quiz.title}
                                </Link>
                                <Link to={"/quiz/edit/" + quiz.id}>Edit</Link>
                                <button
                                    className="btn btn-warning"
                                    onClick={() => {
                                        removeQuizHandler(quiz.id);
                                    }}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default QuizPage;
