// import {faker} from '@faker-js/faker'
import RestartButton from './components/RestartButton';
import Results from './components/Results';
import UserTypings from './components/UserTypings';
import useEngine from './hooks/useEngine';
import { calculateAccuracyPercentage } from "./utils/helpers";
// import { randomWordString } from './utils/data';
import { generateRandomWords } from './utils/data';


// const someWords: any () =>  {

//   const words = generateRandomWords(10);
//   console.log(words)
 
// }

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




//  const GenerategameWords = (): [string[],string[] ]=> {

//   const generateWord = (): string => { 

//     // const word: string = faker.person.firstName();
  
//     // console.log(word)
//     return word
  
//    }

//  const gameWord: string[] = [];

//  Array.from({length: 10}).forEach(() => {
//   return gameWord.push(generateWord());
//  })

// // console.log(gameWord)

// const gameWordsCopy = [...gameWord]; // Create a copy of the game words

// return [gameWord, gameWordsCopy];

 
//  };

//  function GameWordList({ gameWords }: { gameWords: string[] }) {
//   return (
//     <div>
//       {gameWords.map((word, index) => (
//         <span key={index} className=' text-slate-500'>{word}</span>
//       ))}
//     </div>
//   );
// }

const GeneratedWords = ({randomWordString}: {randomWordString: string}) => {
 return <div className="text-slate-500">{randomWordString}</div>

};

//  const words = GenerategameWords();

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="font-medium text-yellow-400">Time: {timeLeft}</h2>;
};

const WordsContainer = ({children} : {children: React.ReactNode}) => {

return (
  <div className="relative max-w-xl mt-3 text-3xl leading-relaxed break-all">
    {children}
  </div>
)

}


function App() {
  const {state, words, timeLeft, typed, errors, totalTyped, restart} = useEngine();
  // const [gameWords, gameWordsCopy] = GenerategameWords();

  return (
    <>
      <CountdownTimer timeLeft={timeLeft} />
      <WordsContainer>
   
      {/* <GameWordList gameWords={randomWordString}/> */}
      <GeneratedWords randomWordString={randomWordString}/>
      <UserTypings className="absolute inset-0" userInput={typed} words={randomWordString} />
      {/* <UserTypings className="absolute inset-0" userInput={typed} words={words} /> */}
      </WordsContainer>
      
      
     
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={restart}
         />
       <Results
        className="mt-10"
        state={state}
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
    </>
  )
}

export default App
