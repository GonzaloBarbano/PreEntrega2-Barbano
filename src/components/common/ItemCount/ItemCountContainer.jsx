import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ stock, onAdd, total = 1 }) => {
  const [counter, setCounter] = useState(total);

  const addOne = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("Stock maximo");
    }
  };
  const subOne = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      alert("No puede ser menos de 1");
    }
  };
  return (
    <ItemCount
      counter={counter}
      addOne={addOne}
      subOne={subOne}
      onAdd={onAdd}
    />
  );
};

export default ItemCountContainer;
