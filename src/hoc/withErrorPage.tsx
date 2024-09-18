import { ComponentType, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { defaultHero, characters } from "../utils/constants";
import { SWContext } from "../utils/context";
import ErrorPage from "../components/ErrorPage";


export const withErrorPage = <T extends object>(Component: ComponentType<T>) => (props: T) => {
    const { heroId = defaultHero } = useParams();
    const { changeHero } = useContext(SWContext);

    useEffect(() => {
        if (characters[heroId]) {
            changeHero(heroId);
        }else {
            changeHero(undefined);
        }

    }, [heroId])

    return characters[heroId] ? <Component heroId={heroId} {...props} /> : <ErrorPage />
}