import {useState} from "react";
import useWords from "./useWords";
import useCountdown from "./useCountdown";
import useTypings from "./useTypings";


//The app can be in 3 states: start, run and finish
export type State = "start" | "run" | "finish";

const NUMBER_OF_WORDS = 12; 
const COUNTDOWN_SECONDS = 30;

const useEngine = ( ) => {
    const[state, setState] = useState<State>("start");
    const {words, UpdateWords} = useWords(NUMBER_OF_WORDS);
    const {timeLeft, startCountdown, resetCountdown} = useCountdown(COUNTDOWN_SECONDS);
    const {typed, cursor, clearTyped, resetTotalTyped, totalTyped} = useTypings (state !== "finish")

    return {state, words, timeLeft, typed}
}

export default useEngine;