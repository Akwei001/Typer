import {faker} from '@faker-js/faker';
import {useCallback, useState} from 'react';



const generateWords = () => {

    //  const wordCount = 12

  

  const gWord = faker.person.firstName().toLowerCase();

  console.log(gWord) 

    return gWord
        
    // loop a string or array to produce a number to then put into count
}

const wordNumber: string[] = [];

Array.from({length: 12}).forEach(() => {
  
    console.log("I work")

 return   wordNumber.push(generateWords());

    
})


const useWords = () => {
    const[words, setWords] = useState<string>(generateWords());    
    
    //Why are we using useCallback here? What does it do ?
    const UpdateWords = useCallback(() => {
        setWords(generateWords())
    },[]);

    return {words, UpdateWords}
}




export default useWords;
