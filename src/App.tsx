// import {faker} from '@faker-js/faker'
import RestartButton from './components/RestartButton';
import Results from './components/Results';
import UserTypings from './components/UserTypings';
import useEngine from './hooks/useEngine';
import { calculateAccuracyPercentage } from "./utils/helpers";
// import { randomWordString } from './utils/data';
import { generateRandomWords } from './utils/data';



  
  
  // Generate a string of 12 random words
   const randomWordString: string = generateRandomWords(12);
  
  console.log('Random Words:', randomWordString);






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

  return (
    <>
      <CountdownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GeneratedWords randomWordString={words}/>
        <UserTypings className="absolute inset-0" userInput={typed} words={words} />
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
