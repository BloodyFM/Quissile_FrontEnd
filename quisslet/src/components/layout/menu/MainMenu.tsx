import "../../../style/layout/menu/MainMenu.css";
import { Link, useLocation } from "react-router-dom";
import MissileLogoSvg from "../../icons/MissileLogoSvg";

interface Props {}

const MainMenu: React.FC<Props> = () => {
    const currentPath: string = useLocation().pathname;

    const homeActive: string = currentPath === "/" ? "active" : "";
    let quizActive: string = "";
    let questionActive: string = "";
    if (currentPath.startsWith("/quiz/")) {
        quizActive = "active";
    } else if (currentPath.startsWith("/question/")) {
        questionActive = "active";
    }

    return (
        <header className="fixed-top d-flex justify-content-between align-items-center bg-secondary p-2">
            <div className="d-flex align-items-center">
                <MissileLogoSvg />
                <h1>Quissile</h1>
            </div>
            <nav
                className="navbar navbar-expand py-0"
                style={{ height: "5rem" }}
            >
                <ul className="nav navbar-nav h-100">
                    <li
                        className={
                            "nav-item d-flex align-items-center p-2 h-100"
                        }
                    >
                        <Link
                            className={`text-light hide-on-print ${homeActive}`}
                            to={"/"}
                        >
                            Home
                        </Link>
                    </li>
                    <li
                        className={
                            "nav-item d-flex align-items-center p-2 h-100"
                        }
                    >
                        <Link
                            className={`text-light hide-on-print ${quizActive}`}
                            to={"/quiz/"}
                        >
                            Quizes
                        </Link>
                    </li>
                    <li
                        className={
                            "nav-item d-flex align-items-center p-2 h-100"
                        }
                    >
                        <Link
                            className={`text-light hide-on-print ${questionActive}`}
                            to={"/question/"}
                        >
                            Questions
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainMenu;
