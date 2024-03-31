import {faker} from '@faker-js/faker'
import RestartButton from './components/RestartButton';
import Results from './components/Results';
import UserTypings from './components/UserTypings';




const Words =() => {
  
  const words = faker.person.firstName();
  console.log(words)
  return words;

}
 
  

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
  const showNames = Names();
  return (
    <div className="text-4xl text-center text-slate-500">
      <CountdownTimer timeLeft={30} />
      <div className="relative max-w-xl">
      {showNames.map((name, index) => (
        <span key={index}>{name} </span>
      ))}
      <UserTypings className="absolute inset-0" userInput={showNames}/>
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
