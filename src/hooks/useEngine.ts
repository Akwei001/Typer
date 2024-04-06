import {useState} from "react"


//The app can be in 3 states: start, run and finish
export type State = "start" | "run" | "finish";

const NUMBER_OF_WORDS = 12; 

const useEngine = ( ) => {
    const[state, setState] = useState<State>("start");
    const {words, UpdateWords} = useWords(NUMBER_OF_WORDS)

    return {state, words}
}

export default useEngine;