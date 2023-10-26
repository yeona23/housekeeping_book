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
    applyFilters();
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  const [typeFilter, setTypeFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredBook, setFilteredBook] = useState([]);
  const applyFilters = () => {
    const filteredBook = book.filter((content) => {
      if (typeFilter !== "all" && content.purchaseType !== typeFilter)
        return false;
      const itemDate = content.date.toISOString().split("T")[0];
      if (startDate && itemDate < startDate) return false;
      if (endDate && itemDate > endDate) return false;
      return true;
    });

    const sortedBook = [...filteredBook].sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });

    setFilteredBook(sortedBook);
  };

  const onDelete = (targetId) => {
    setBook((prevBook) => prevBook.filter((it) => it.id !== targetId));
  };

  return (
    <div className="Book">
      <FormAccount
        onCreate={onSubmit}
        applyFilters={applyFilters}
        onKeyDown={onKeyDown}
      />
      <FilterAndSort
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        applyFilters={applyFilters}
      />
      <ItemList book={filteredBook} onDelete={onDelete} />
    </div>
  );
}

export default App;
