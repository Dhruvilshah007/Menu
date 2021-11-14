import React, { useState } from "react";

// menu and categories are component
import Menu from "./Menu";
import Categories from "./Categories";

// items container all data in form of array object from data.js file
import items from "./data";


 
// new Set   ==== is a Data Structure that only gives you unique values 
// passing an array in which first is all and after using spreadoperator rest all categories


//here this iadded so that whenever we add any category data we dont have to manually do things it will happen automaticially
const allCategories=['all',... new Set(items.map((item)=>item.category))];
console.log(allCategories)


function App() {
  //passing all data in items to menu component to display all data on screen
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCatogories] = useState(allCategories);

  //making function to iterate over items,category is argument
  const filterItems = (category) => {

    //here we rae setting up all where we will keep the same data of all
    if(category==='all'){
      setMenuItems(items)
      return;
    }

    //here we are displaying rest all categories as its passed
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>

        {/* passing filterItems function as prop */}
        <Categories filterItems={filterItems} categories={categories}/>

        {/* passing items in form of prop to menu component */}
        {/* wiht menuItems functio usestate  */}
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
