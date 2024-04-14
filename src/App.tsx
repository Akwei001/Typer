import {faker} from '@faker-js/faker'
import RestartButton from './components/RestartButton';
import Results from './components/Results';
import UserTypings from './components/UserTypings';
import useEngine from './hooks/useEngine';




 const GenerategameWords = (): [string[],string[] ]=> {

  const generateWord = (): string => { 

    const word: string = faker.person.firstName();
  
    // console.log(word)
    return word
  
   }

 const gameWord: string[] = [];

 Array.from({length: 10}).forEach(() => {
  return gameWord.push(generateWord());
 })

// console.log(gameWord)

const gameWordsCopy = [...gameWord]; // Create a copy of the game words

return [gameWord, gameWordsCopy];

 
 };

 function GameWordList({ gameWords }: { gameWords: string[] }) {
  return (
    <div>
      {gameWords.map((word, index) => (
        <span key={index} className=' text-slate-500'>{word}</span>
      ))}
    </div>
  );
}

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
  const {state, words, timeLeft, typed} = useEngine();
  const [gameWords, gameWordsCopy] = GenerategameWords();

  return (
    <div className="text-4xl text-center text-slate-500">
      <CountdownTimer timeLeft={timeLeft} />
      <WordsContainer>
   
      <GameWordList gameWords={gameWords}/>
      <UserTypings className="absolute inset-0" userInput={[typed]} words={words} />
      </WordsContainer>
      
      
     
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={() => null}
         />
      <Results 
      className="mt-10"
      errors={10}
      accuracyPercentage={100}
      total={200}
      />
    </div>
  )
}

export default App
