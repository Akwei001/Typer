import {faker} from '@faker-js/faker';
import {useCallback, useState} from 'react';

const generateWords = (count: number) => {

    return faker.person.firstName(count).toLowerCase();

    // loop a string or array to produce a number to then put into count
}




const useWords = (count: number) => {
    const[words, setWords] = useState<string>(generateWords(count));    
    
    //Why are we using useCallback here? What does it do ?
    const UpdateWords = useCallback(() => {
        setWords(generateWords(count))
    },[count]);

    return {words, UpdateWords}
}




export default useWords;
