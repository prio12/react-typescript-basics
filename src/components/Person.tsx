type PersonProps = {
  person: {
    fName: string;
    lName: string;
  };
};

const Person = ({ person }: PersonProps) => {
  return (
    <div className="my-5 text-center">
      <h4>Here is an example of passing object as a prop</h4>
      <h5>
        Hi there! I am {person?.fName} {person?.lName}
      </h5>
    </div>
  );
};

export default Person;
