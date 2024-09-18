import { useContext } from "react";
import { characters } from "../utils/constants";
import { SWContext } from "../utils/context";
import Navigation from "./Navigation";

const Header = () => {
    const { hero } = useContext(SWContext);
    const title = characters[hero!] ? characters[hero!].name : "Error";

    return (
        <header className="bg-grey-color rounded-t-3xl">
            <Navigation />
            <h1 className="text-center py-4 text-6xl">{title}</h1>
        </header>
    )
}

export default Header