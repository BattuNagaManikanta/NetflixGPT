
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../Utils/useNowPlayingMovies";
import usePopularMovies from "../Utils/usePopularMovies";
import useTopRated from "../Utils/useTopRated";
import GptSearchPage from "./GptSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";

const Browse=()=>{
    const showGptPage = useSelector(store => store.gptSearch.showGptPage)
    useNowPlayingMovies();
    usePopularMovies();
    useTopRated();
    console.log(showGptPage);
    return (
        <div>
            <Header/>
            {showGptPage ? <GptSearchPage/> : <div>
                <MainContainer/>
                <SecondContainer/>
            </div> }
        </div>
    )
}

export default Browse;