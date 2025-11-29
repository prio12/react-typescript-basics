export type ProfileTypes = {
  name: string;
};

const Profile = ({ name }: ProfileTypes) => {
  return (
    <div className="text-center">
      Private Profile components, Name is {name}
    </div>
  );
};

export default Profile;
