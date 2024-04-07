import {useState} from "react";
import useWords from "./useWords";
import useCountdown from "./useCountdown";


//The app can be in 3 states: start, run and finish
export type State = "start" | "run" | "finish";

// const NUMBER_OF_WORDS = 12; 
const COUNTDOWN_SECONDS = 30;

const useEngine = ( ) => {
    const[state, setState] = useState<State>("start");
    const {words, UpdateWords} = useWords();
    const {timeLeft, startCountdown, resetCountdown} = useCountdown(COUNTDOWN_SECONDS);

    return {state, words, timeLeft}
}

export default useEngine;