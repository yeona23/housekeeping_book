import React from "react";

const FilterAndSort = ({ onTypeChange, selectedType }) => {
  return (
    <div className="FilterAndSort">
      <select
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
      >
        <option value="">ALL</option>
        <option value="food">FOOD</option>
        <option value="edu">EDU</option>
        <option value="etc">ETC</option>
      </select>
    </div>
  );
};

export default FilterAndSort;
