const ItemListContainer = ({ title, greeting, children }) => {
  return (
    <div className="item-list-container">
      <h2>{title}</h2>
      <p>{greeting}</p>
      <div className="product-list">{children}</div>
    </div>
  );
};

export default ItemListContainer;
