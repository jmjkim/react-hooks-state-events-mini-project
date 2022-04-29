import React from "react";

function CategoryFilter({ categories, handleSelected, handleFilterBy }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button key={category} id={category} onClick={(event) => {
        handleSelected(event)
        handleFilterBy(event)
      }}>{category}</button>)}
    </div>
  );

}

export default CategoryFilter;
