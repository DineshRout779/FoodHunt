const CartItemList = ({ items }) => {
  return (
    <>
      {items.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};
export default CartItemList;
