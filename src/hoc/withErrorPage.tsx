import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { defaultHero, characters } from "../utils/constants";
import { SWContext } from "../utils/context";
import ErrorPage from "../components/ErrorPage";

// @ts-ignore
export const withErrorPage = Component => props => {
    const { heroId = defaultHero } = useParams();
    const { changeHero } = useContext(SWContext);

    useEffect(() => {
        if (characters[heroId]) {
            changeHero(heroId);
        }

    }, [heroId])

    return characters[heroId] ? <Component heroId={heroId} {...props} /> : <ErrorPage />
}