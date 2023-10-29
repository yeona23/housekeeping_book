import React, { useState, useRef } from "react";
import FormAccount from "./components/FormAccount";
import ItemList from "./components/ItemList";
import FilterAndSort from "./components/FilterAndSort";

function App() {
  const [book, setBook] = useState([
    {
      id: "0",
      title: "BEER",
      price: 15000,
      purchaseType: "food",
      date: new Date(2023, 10, 14),
      memoIs: "good!!!",
      repurchase: true,
    },
    {
      id: "1",
      title: "CHICKEN",
      price: 25000,
      purchaseType: "food",
      date: new Date(2023, 10, 15),
      memoIs: "👍👍👍",
      repurchase: true,
    },
    {
      id: "2",
      title: "가방",
      price: 100000,
      purchaseType: "etc",
      date: new Date(2023, 10, 20),
      memoIs: "✨",
      repurchase: false,
    },
  ]);

  const idRef = useRef(3);

  const onSubmit = (data) => {
    console.log("tr");
    const newBook = {
      id: idRef.current,
      ...data,
      price: Number(data.price),
      date: new Date(data.date),
      repurchase: data.repurchase === "yes",
    };
    idRef.current++;
    setBook((prevBook) => [newBook, ...prevBook]);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  const [selectedType, SetSelectedType] = useState("");

  const handleTypeChange = (newType) => {
    SetSelectedType(newType);
  };

  const onDelete = (targetId) => {
    setBook((prevBook) => prevBook.filter((it) => it.id !== targetId));
  };

  return (
    <div className="Book">
      <FormAccount onCreate={onSubmit} onKeyDown={onKeyDown} />
      <FilterAndSort
        onTypeChange={handleTypeChange}
        selectedType={selectedType}
      />
      <ItemList book={book} selectedType={selectedType} onDelete={onDelete} />
    </div>
  );
}

export default App;
