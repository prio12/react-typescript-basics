type GreetProps = {
  topic: string;
  user: string;
  id?: number;
  isLoggedIn: boolean;
};

const Greetings = ({ topic, user, isLoggedIn }: GreetProps) => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mt-5">
        I am learning Typescript
      </h1>
      <h4 className="text-center my-5">Topic is {topic}</h4>

      {isLoggedIn ? (
        <div className="text-center my-5">
          <h4>Welcome {user}</h4>
        </div>
      ) : (
        <p>Welcome Guest!</p>
      )}
    </div>
  );
};

export default Greetings;
