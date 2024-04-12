import React, { useState } from "react";
import Navbar from "./Components/layout/Navbar/Navbar";
import Footer from "./Components/layout/Footer/Footer";
import ItemListContainer from "./Components/pages/itemListContainer/itemListContainer";
import ProductCard from "./Components/common/productCard/ProductCard";
import Cart from "./Components/pages/Cart/Cart";
import { Grid } from "@mui/material";
import "@fortawesome/fontawesome-free/css/all.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Función para sacar un producto al carrito
  const removeFromCart = (productToRemove) => {
    setCartItems(cartItems.filter((product) => product !== productToRemove));
  };

  const greeting = "Bienvenido a mi Ecommerce";

  const zapatillas = [
    {
      id: 1,
      name: "Nike Air Max",
      description:
        "Las zapatillas Nike Air Max son conocidas por su comodidad y estilo.",
      price: 150,
      imageUrl:
        "https://res.cloudinary.com/dpm8rx4bd/image/upload/v1712526244/AirMax_ca9goc.jpg",
    },
    {
      id: 2,
      name: "Nike Air Force 1",
      description:
        "Las zapatillas Nike Air Force 1 ofrecen una excelente amortiguación y rendimiento.",
      price: 180,
      imageUrl:
        "https://res.cloudinary.com/dpm8rx4bd/image/upload/v1712441281/DD8959_100_A_PREM_u9estg.jpg",
    },
  ];

  return (
    <div>
      <Navbar />
      <ItemListContainer title="Zapatillas destacadas" greeting={greeting}>
        {zapatillas.map((zapatilla) => (
          <ProductCard
            key={zapatilla.id}
            product={zapatilla}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            inCart={cartItems.includes(zapatilla)}
          />
        ))}
      </ItemListContainer>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Footer />
    </div>
  );
};

export default App;
