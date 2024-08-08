const { useState } = React;

function FruitListItem(props) {
  return (
    <li>
      {props.fruit.name} | <button>Delete</button>
    </li>
  );
}

function FruitList() {
  const [fruits, setFruits] = useState([
    { id: 1, name: "apple" },
    { id: 2, name: "orange" },
    { id: 3, name: "blueberry" },
    { id: 4, name: "banana" },
    { id: 5, name: "kiwi" },
  ]);

  return (
    <ul>
      {fruits.map((fruit) => (
        <FruitListItem key={fruit.id} fruit={fruit} />
      ))}
    </ul>
  );
}

function App() {
  return <FruitList />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
