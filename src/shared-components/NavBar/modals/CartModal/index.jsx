import { useState, useContext, useEffect, useCallback } from "react";
import SessionContext from "contexts/SessionContext";
import { RemoveScroll } from "react-remove-scroll";
import LoadingSpinner from "shared-components/LoadingSpinner";
import * as cartService from "services/cart";
import CartItem from "./CartItem";

const CartModal = (props) => {
  const { setIsCartOpen } = props;
  const { username } = useContext(SessionContext);
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchCart = useCallback(async () => {
    setIsLoading(true);
    const response = await cartService.getCart();
    const data = await response.json();
    setItems(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await cartService.getCart();
      const data = await response.json();
      setItems(data);
      setIsLoading(false);
    })();
  }, [fetchCart]);

  return (
    <RemoveScroll>
      <div className="fixed top-0 left-0 flex justify-end w-full h-full bg-black/30 backdrop-blur-sm font-lat0">
        <div className="flex flex-col w-full h-screen max-w-xl bg-white">
          <button
            className="absolute top-0 right-0 p-2"
            onClick={() => setIsCartOpen(false)}
          >
            <i className="text-3xl fa-regular fa-circle-xmark text-emerald-400"></i>
          </button>
          <div className="text-3xl text-center text-white py-8 shadow-md bg-emerald-800 font-playfair">
            {username}&apos;s cart
          </div>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <div>
                {items.map((item) => (
                  <CartItem key={item.id} item={item} fetchCart={fetchCart}/>
                ))}{" "}
              </div>
            </>
          )}
        </div>
      </div>
    </RemoveScroll>
  );
};

export default CartModal;
