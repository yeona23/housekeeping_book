import { useState, useRef, React } from "react";
import FormAccount from "./components/FormAccount";
import ItemList from "./components/ItemList";

const App = () => {
  const idRef = useRef(1);
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
  ]);
  const onCreate = (data) => {
    const newBook = {
      id: idRef.current,
      title: data.title,
      price: Number(data.price),
      purchaseType: data.purchaseType,
      date: new Date(data.date),
      memoIs: data.memoIs,
      repurchase: data.repurchase === "yes",
    };

    setBook((prevBook) => [newBook, ...prevBook]);

    idRef.current++;

    //폼 초기화
    data.title = "";
    data.price = "";
    data.purchaseType = "";
    data.date = new Date().toISOString().split("T")[0];
    data.memoIs = "";
    data.repurchase = "yes";
  };

  const onDelete = (targetId) => {
    setBook(book.filter((it) => it.id !== targetId));
  };

  return (
    <div className="Book">
      <FormAccount onCreate={onCreate} />
      <ItemList book={book} onDelete={onDelete} />
    </div>
  );
};

export default App;
