import { useState } from 'react'
import Data from './Data'
import Card from './Card'
import Buttons from './Buttons'
import './App.css'

const App = () => {
  const [item, setItem] = useState(Data);

  const filterItems = [...new Set(Data.map((Val) => Val.category))];

  const currentFilter = (current) => {
    const newFilter = Data.filter((newVal) => {
      return newVal.category === current;
    });
    setItem(newFilter)
  }

  return (
    <div className="container">
      <Buttons 
        currentFilter={currentFilter}
        setItem={setItem}
        filterItems={filterItems}
      />
      <Card item={item} />
    </div>
  );
};

export default App;
