import "./Cart.css";

const Cart = ({ cartItems, removeFromCart }) => {
  // Calcular el total del carrito
  const calculateTotal = () => {
    return cartItems.reduce((total, product) => total + product.price, 0);
  };

  // Función para proceder al pago
  const proceedToPayment = () => {
    // Aquí puedes agregar la lógica para proceder al pago
    alert("Proceder al pago");
  };

  return (
    <div>
      <h2>Carrito de Compra</h2>
      <div>
        {cartItems.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ul>
            {cartItems.map((product, index) => (
              <li key={index}>
                {product.name} - ${product.price}
                <button onClick={() => removeFromCart(product)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h3>Total: ${calculateTotal()}</h3>
        <button onClick={proceedToPayment}>Proceder al Pago</button>
      </div>
    </div>
  );
};

export default Cart;
