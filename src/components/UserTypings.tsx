import cn from "classnames";
import Caret from "./Caret";

const UserTypings = ({userInput, className, words}: {
    userInput: string[]; 
    words: string[];
    className?: string

}) => {
    const typedCharacters = userInput.join("").split(" ")

    return (
            <div className={className}>
                
                {typedCharacters.map((char, index) => {
                    return (
                    <Character key={`${char}_${index}`} 
                    actual={[char]}
                    expected={[words[index]]}
                    
                    />);


                    })}
                    <Caret/>
                 </div> 

    )
 };

 const Character = ({actual, expected } : { actual: string[], expected: string[]}) => { 
        const isCorrect = actual === expected;
        const isWhiteSpace = expected[0] === " ";

    return <span 
        className={cn({
            "text-red-500": !isCorrect && !isWhiteSpace,
            "text-yellow-400": isCorrect && !isWhiteSpace,
            "bg-red-500" : !isCorrect && isWhiteSpace,
        })}>
            {expected}                                                                                                                                                                      
            </span>  
 }

export default UserTypings;