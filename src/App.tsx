import {faker} from '@faker-js/faker'

// function words() {
//   return faker.person.firstName()
// }

const Names = () => { 

  const randomNames = [];

  for (let i = 0; i < 10; i++) {
    randomNames.push(faker.person.firstName());
  }

  return randomNames;
 
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="font-medium text-yellow-400">Time: {timeLeft}</h2>;
};


function App() {
  const showNames = Names();
  return (
    <div className="text-4xl text-center text-slate-500">
      <CountdownTimer timeLeft={30} />
      {showNames.map((name, index) => (
        <span key={index}>{name} </span>
      ))}
      
    </div>
  )
}

export default App
