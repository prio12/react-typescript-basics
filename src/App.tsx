import Heading from './components/childrenProps/Heading';
import Oscar from './components/childrenProps/Oscar';
import Greetings from './components/Greetings';
import Person from './components/Person';
import Status from './components/Status';
import Users from './components/Users';

function App() {
  const person = {
    fName: 'Maksudur',
    lName: 'Rahman',
  };

  const users = [
    {
      fName: 'John ',
      lName: 'Doe',
    },
    {
      fName: 'Alex',
    },
    {
      lName: 'Ippo',
    },
  ];
  return (
    <>
      <div>
        <Greetings topic="Typing props" user="Mak Dev" isLoggedIn={true} />
        <Person person={person} />
        <Users users={users} />
        <Status status="loading" />
        <Heading>
          <Oscar />
        </Heading>
      </div>
    </>
  );
}

export default App;
