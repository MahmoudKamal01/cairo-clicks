import { Heading } from "@components/common";
import { CartItem,CartSubTotalPrice } from "@components/eCommerce";
const Cart = () => {
  return (
    <div>
      <Heading>Cart</Heading>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartSubTotalPrice />
    </div>
  );
};

export default Cart;
