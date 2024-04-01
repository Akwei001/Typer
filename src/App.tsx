import {faker} from '@faker-js/faker'
import RestartButton from './components/RestartButton';
import Results from './components/Results';
// import UserTypings from './components/UserTypings';







 const GenerategameWords = (): string[] => {

  const generateWord = (): string => { 

    const word: string = faker.person.firstName();
  
    // console.log(word)
    return word
  
   }

 const gameWord: string[] = [];

 Array.from({length: 10}).forEach(() => {
  return gameWord.push(generateWord());
 })

console.log(gameWord)

 return gameWord;

 
 };

 function GameWordList() {
  const gameWords = GenerategameWords();

  return (
    <div>
      {gameWords.map((word, index) => (
        <span key={index}>{word} </span>
      ))}
    </div>
  );
}

  //  const test = GenerategameWords();
 
  // console.log(test)

// console.log(Words)
// const Names = () => { 

//   const randomNames = [];

//   for (let i = 0; i < 10; i++) {
//     randomNames.push(faker.person.firstName());
//   }

//   return randomNames;
 
// };

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="font-medium text-yellow-400">Time: {timeLeft}</h2>;
};


function App() {
  // const showNames = Names();
  return (
    <div className="text-4xl text-center text-slate-500">
      <CountdownTimer timeLeft={30} />
      <div className="relative max-w-xl">
        
      {/* {showNames.map((name, index) => (
        <span key={index}>{name} </span>
      ))} */}
      <GameWordList/>
      {/* <UserTypings className="absolute inset-0" userInput={}/> */}

      </div>
     
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
