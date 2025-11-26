type UsersProps = {
  users: {
    fName?: string;
    lName?: string;
  }[];
};

const Users = ({ users }: UsersProps) => {
  return (
    <div className="my-5 text-center">
      <h4>Here is an example of using an array as prop </h4>
      {users?.map((u) => {
        return (
          <div>
            <h5>
              {u?.fName} {u?.lName}
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
