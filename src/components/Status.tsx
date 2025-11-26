type StatusProps = {
  status: 'loading' | 'success' | 'error';
};
const Status = ({ status }: StatusProps) => {
  let content;

  if (status === 'loading') {
    content = <p>Loading...</p>;
  } else if (status === 'success') {
    content = <p>Success!</p>;
  } else if (status === 'error') {
    content = <p>Error!</p>;
  }
  return (
    <div className="text-center">
      <h3>Here I am applying / showing union props</h3>
      {content}
    </div>
  );
};

export default Status;
