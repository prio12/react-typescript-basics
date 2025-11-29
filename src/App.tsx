import { Private } from './components/auth/Private';
import Profile from './components/auth/Profile';
import Heading from './components/childrenProps/Heading';
import Oscar from './components/childrenProps/Oscar';
import Button from './components/eventProps/Button';
import List from './components/generics/List';
import Greetings from './components/Greetings';
import CustomButton from './components/html/CustomButton';
import Person from './components/Person';
import RandomNumber from './components/restrictions/RandomNumber';
import Status from './components/Status';
import Counter from './components/useReducer/Counter';
import Users from './components/Users';
import UserState from './components/userState/UserState';

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

  //for event props type
  const handleClick = (text: string) => {
    console.log(text);
  };

  //for items (generic concept)
  const handleItem = (item: { id: number; fName: string; lName: string }) => {
    console.log(item);
  };
  return (
    <>
      <div className="h-full my-12">
        <Greetings topic="Typing props" user="Mak Dev" isLoggedIn={true} />
        <Person person={person} />
        <Users users={users} />
        <Status status="loading" />
        <Heading>
          <Oscar />
        </Heading>
        <Button handleClick={handleClick} />
        <UserState />
        <Counter />
        <Private isLoggedIn={true} component={Profile} />
        {/* <List items={['Naruto', 'Madara', 'Minato']} onclick={handleItem} /> */}
        {/* <List items={[1, 2, 3]} onclick={handleItem} /> */}
        <List
          items={[
            { id: 1, fName: 'Naruto', lName: 'Uzumaki' },
            { id: 2, fName: 'Madara', lName: 'Uchiha' },
            { id: 3, fName: 'Minato', lName: 'Namekaze' },
          ]}
          onclick={handleItem}
        />

        <RandomNumber value={5} isNegative />

        <CustomButton variant="primary" onClick={() => console.log('clicked')}>
          Send Message
        </CustomButton>
      </div>
    </>
  );
}

export default App;
