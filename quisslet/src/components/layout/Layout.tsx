import { ReactNode } from "react";
import MainMenu from "./menu/MainMenu";

interface Props {
    children: ReactNode;
}

const Layout: React.FC<Props> = (props) => {
    return (
        <>
            <MainMenu />
            <main className="content">{props.children}</main>
        </>
    );
};

export default Layout;
