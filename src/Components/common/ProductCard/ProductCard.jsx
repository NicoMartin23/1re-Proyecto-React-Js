import "./ProductCard.css";

const ProductCard = ({ product, addToCart, removeFromCart, inCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  return (
    <div className="product-card">
      <img
        className="product-image"
        src={product.imageUrl}
        alt={product.name}
      />
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: ${product.price}</p>
        {inCart ? (
          <button
            className="remove-from-cart-btn"
            onClick={handleRemoveFromCart}
          >
            Remove from Cart
          </button>
        ) : (
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Agregar al Carro
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
