import { useContext, useState } from "react";
import { Quiz, QuizContext } from "../../App";
import { addQuiz, deleteQuizById } from "../../helpers/http";
import QuizItem from "./QuizItem";

interface Props {}

const QuizPage: React.FC<Props> = () => {
    const [showInput, setShowInput] = useState(false);
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
        // http req
        addQuiz(newQuiz.title);
        setQuizes([...quizes, newQuiz]);
        setName("");
        setShowInput(false);
    };

    const removeQuizHandler = (id: number) => {
        const newQuizes = quizes.filter((q) => q.id !== id);
        // http req
        deleteQuizById(id);
        setQuizes([...newQuizes]);
    };

    return (
        <>
            <div className="border border-secondary shadow p-2 m-0">
                <h2 className="m-5">Quiz Page!</h2>
                <button
                    onClick={() => {
                        setShowInput(!showInput);
                    }}
                    className="btn btn-primary m-3"
                >
                    {showInput ? "Cancel" : "Add Quiz"}
                </button>

                {showInput ? (
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
                            <QuizItem
                                key={quiz.id}
                                quiz={quiz}
                                handleRemove={removeQuizHandler}
                            />
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default QuizPage;
