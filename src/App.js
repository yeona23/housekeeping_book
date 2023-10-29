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

  const onDelete = (targetId) => {
    setBook((prevBook) => prevBook.filter((it) => it.id !== targetId));
  };

  const [selectedType, setSelectedType] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const [dateFilteredItems, setDateFilteredItems] = useState([]);

  const applyFilter = () => {
    // 필터링을 수행
    const startDate = new Date(selectedStartDate);
    const endDate = new Date(selectedEndDate);
    const filteredItems = book.filter((item) => {
      const itemDate = item.date;
      return (
        (!startDate || itemDate >= startDate) &&
        (!endDate || itemDate <= endDate)
      );
    });

    // 필터링된 결과를 상태에 저장
    setDateFilteredItems(filteredItems);
  };

  return (
    <div className="Book">
      <FormAccount onCreate={onSubmit} />
      <FilterAndSort
        onTypeChange={setSelectedType}
        onSortChange={setSelectedSortOption}
        onApplyFilter={applyFilter}
      />
      <ItemList
        book={dateFilteredItems.length > 0 ? dateFilteredItems : book}
        selectedType={selectedType}
        selectedSortOption={selectedSortOption}
        onDelete={onDelete}
        selectedStartDate={selectedStartDate}
        selectedEndDate={selectedEndDate}
      />
    </div>
  );
}

export default App;
