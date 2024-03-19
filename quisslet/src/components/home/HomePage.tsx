import "../../style/home/HomePage.css";
import { Link } from "react-router-dom";

interface Props {}

const HomePage: React.FC<Props> = () => {
    return (
        <div className="border border-secondary shadow p-2 w-100">
            <h2 className="m-5">HomePage</h2>
            <p className="m-3">
                This is a tool for creating quizes. Try it out, make your first
                quiz now!
            </p>
            <Link className="btn btn-primary m-3" to="/quiz/">
                Quiz Page!
            </Link>
            <p className="m-3">
                Don't want to make a full quiz but have some good questions you
                want to save for later? Try adding them in our questions page!
            </p>
            <Link className="btn btn-primary m-3" to="/question/">
                Questions Page!
            </Link>
        </div>
    );
};

export default HomePage;
