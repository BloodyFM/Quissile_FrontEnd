import { useParams } from "react-router-dom";

const QuizBuilderPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const idNumber: number | undefined = id ? parseInt(id) : undefined;

    

    return (
        <div>
            <h2>QuizBuilderPage</h2>
        </div>
    );
};

export default QuizBuilderPage;
