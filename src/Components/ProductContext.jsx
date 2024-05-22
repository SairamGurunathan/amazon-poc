import { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectData, setSelectData] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [subTotal, setSubTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [allData, setAllData] = useState([]);


  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <ProductContext.Provider
      value={{
        selectData,
        setSelectData,
        cartItems,
        setCartItems,
        count,
        setCount,
        quantity,
        setQuantity,
        subTotal,
        setSubTotal,
        addToCart,
        subtotal,
        setSubtotal,
        allData, 
        setAllData
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
