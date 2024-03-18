import "../../style/home/HomePage.css";
import { Link } from "react-router-dom";

interface Props {}

const HomePage: React.FC<Props> = () => {
    return (
        <div>
            <h2>HomePage</h2>
            <p>
                This is a tool for creating quizes. Try it out, make your first
                quiz now!
            </p>
            <Link className="btn btn-primary" to="/quiz/">
                Quiz Page!
            </Link>
            <p>
                Don't want to make a full quiz but have some good questions you
                want to save for later? Try adding them in our questions page!
            </p>
            <Link className="btn btn-primary" to="/question/">
                Questions Page!
            </Link>
        </div>
    );
};

export default HomePage;
