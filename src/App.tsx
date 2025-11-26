import Greetings from './components/Greetings';

function App() {
  return (
    <>
      <div>
        <Greetings topic="Typing props" user="Mak Dev" isLoggedIn={true} />
      </div>
    </>
  );
}

export default App;
