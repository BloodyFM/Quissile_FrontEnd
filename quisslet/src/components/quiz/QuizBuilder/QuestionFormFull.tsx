import { FormEvent, useState } from "react";
import { Alternative, Question } from "../../../App";

interface Props {
    question: Question;
}

const QuestionFormFull: React.FC<Props> = ({ question }) => {
    const [q, setQ] = useState(question);

    const saveHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("This is where the code should save to db");
    };

    return (
        <li className="list-group-item p-2">
            <form className="w-100" onSubmit={saveHandler}>
                <div className="form-floating">
                    <input
                        className="form-control rounded-1 border-primary w-100"
                        type="text"
                        id="question"
                        value={q.text}
                        required
                        placeholder="Question"
                        onChange={(event) => {
                            setQ({ ...q, text: event.target.value });
                        }}
                    />
                    <label className="form-label text-secondary">
                        Question
                    </label>
                </div>
                <button
                    type="button"
                    className="btn btn-info m-2"
                    onClick={() => {
                        const newAlternatives = q.alternatives;
                        const newAlternative: Alternative = {
                            id:
                                Math.max(...q.alternatives.map((x) => x.id)) +
                                1,
                            text: "",
                            isAnswer: false,
                        };
                        newAlternatives.push(newAlternative);
                        setQ({
                            ...q,
                            alternatives: newAlternatives,
                        });
                    }}
                >
                    Add Alternative
                </button>
                {q.alternatives.map((alternative, i) => (
                    <div
                        key={alternative.id}
                        className="form-floating d-flex gap-2 align-items-center"
                    >
                        <input
                            className="form-control rounded-1 border-primary w-100"
                            type="text"
                            id="alternative"
                            value={alternative.text}
                            required
                            placeholder="Alternative"
                            onChange={(event) => {
                                const newAlternatives = q.alternatives;
                                newAlternatives[i].text = event.target.value;
                                setQ({ ...q, alternatives: newAlternatives });
                            }}
                        />
                        <label className="form-label text-secondary">
                            Alternative
                        </label>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={alternative.isAnswer}
                                id="flexCheckDefault"
                                onChange={(event) => {
                                    const newAlternatives = q.alternatives;
                                    newAlternatives[i].isAnswer =
                                        event.target.checked;
                                    setQ({
                                        ...q,
                                        alternatives: newAlternatives,
                                    });
                                }}
                            />
                            <label className="form-check-label">Answer</label>
                        </div>
                        <button
                            className="btn btn-warning"
                            type="button"
                            onClick={() => {
                                const newAlternatives = q.alternatives.filter(
                                    (a) => a.id !== alternative.id
                                );
                                setQ({
                                    ...q,
                                    alternatives: newAlternatives,
                                });
                            }}
                        >
                            Delete
                        </button>
                    </div>
                ))}
                <button className="btn btn-info m-2" type="submit">
                    Save
                </button>
            </form>
        </li>
    );
};

export default QuestionFormFull;
