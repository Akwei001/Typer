const UserTypings = ({userInput, className}: {
    userInput: string[]; 
    className?: string

}) => {
    const typedCharacters = userInput.join("").split(" ")

    return (
            <div className={className}>
                {typedCharacters.map((char, index) => {
                    return <Character key={`${char}_${index}`} char={char}/>;
                    })}

                 </div> 

    )
 };

 const Character = ({char} : { char: string}) => {
    return <span className="text-yellow-500">{char}</span>  
 }

export default UserTypings;