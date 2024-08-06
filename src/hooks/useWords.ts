// import {faker} from '@faker-js/faker';
import {useCallback, useState} from 'react';
import { generateRandomWords } from '../utils/data';


   const randomWordString: string = generateRandomWords(12);
  
  console.log('Random Words:', randomWordString);




const generateWords = (count: number) => {

    return generateRandomWords(count).toLowerCase();

 
}




const useWords = (count: number) => {
    const[words, setWords] = useState<string>(generateWords(count));    
    

    console.log('Words, useWords:', words);
    //Why are we using useCallback here? What does it do ?
    const updateWords = useCallback(() => {
        setWords(generateWords(count))
    },[count]);

    return {words, updateWords}
}




export default useWords;
