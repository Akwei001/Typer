// import {faker} from '@faker-js/faker';
import {useCallback, useState} from 'react';
import { generateRandomWords } from '../utils/data';

// An array of random words
// const randomWords: string[] = [
//     'apple', 'banana', 'carrot', 'dog', 'elephant', 'flower', 'guitar',
//     'happiness', 'island', 'jungle', 'koala', 'lemon', 'mountain', 'ninja',
//     'orange', 'penguin', 'queen', 'rainbow', 'sunset', 'tiger', 'unicorn',
//     'victory', 'watermelon', 'xylophone', 'yoga', 'zebra'
//   ];
  
//   // Generate a string of 12 random words
//   const generateRandomWords = (count: number): string => {
//     let result = '';
//     for (let i = 0; i < count; i++) {
//       const randomIndex = Math.floor(Math.random() * randomWords.length);
//       result += randomWords[randomIndex];
//       if (i < count - 1) {
//         // Add a space after each word except the last one
//         result += ' ';
//       }
//     }
//     return result;
//   };
  
  
  // Generate a string of 12 random words
   const randomWordString: string = generateRandomWords(12);
  
  console.log('Random Words:', randomWordString);




const generateWords = (count: number) => {

    return generateRandomWords(count).toLowerCase();

 
}




const useWords = (count: number) => {
    const[words, setWords] = useState<string>(generateWords(count));    
    
    //Why are we using useCallback here? What does it do ?
    const updateWords = useCallback(() => {
        setWords(generateWords(count))
    },[count]);

    return {words, updateWords}
}




export default useWords;
