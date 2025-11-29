type ListProps<T> = {
  items: T[];
  onclick: (value: T) => void;
};

const List = <T extends { id: number; fName: string; lName: string }>({
  items,
  onclick,
}: ListProps<T>) => {
  return (
    <div>
      <h1>List of Items</h1>
      {items.map((item) => {
        return (
          <div key={item.id} onClick={() => onclick(item)}>
            <p>{item.fName}</p>
            <p>{item.lName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
