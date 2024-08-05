function FruitListCard({ fruit }) {
  return (
    <div style={{ border: "1px solid black" }}>
      <strong>{fruit.name}</strong>
      <p> ID: {fruit.id}</p>
      <p>Color: {fruit.color}</p>
    </div>
  );
}

function FruitList(props) {
  const fruitListItems = props.fruits.map((fruit) => (
    <FruitListCard key={fruit.id} fruit={fruit} />
  ));
  return <div>{fruitListItems}</div>;
}

const data = [
  { id: 1, name: "apple", color: "red" },
  { id: 2, name: "orange", color: "orange" },
  { id: 3, name: "blueberry", color: "blue" },
  { id: 4, name: "banana", color: "yellow" },
  { id: 5, name: "kiwi", color: "brown" },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <FruitList fruits={data} />
);
