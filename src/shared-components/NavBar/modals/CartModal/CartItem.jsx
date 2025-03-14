import * as cartService from "services/cart";

const CartItem = (props) => {
  const { item, fetchCart } = props;

  return (
    <div className="flex">
        <img className="w-28 rounded-md" src={item.image_src} />
        <div className="flex justify-between flex-1 mx-4">
          <div>
            <div className="font-playfair text-xl text-emerald-700">
              {item.plant_name}
            </div>
            <div className="flex my-1 text-slate-500">
              <div className="w-14 text-slate-400">color:</div>
              {item.pot_color}
            </div>
            <div className="flex my-1 text-slate-500">
              <div className="w-14 text-slate-400">qty:</div>
              {item.quantity}
            </div>
          </div>
          <div className="flex flex-col items-end justify-between">
          <div className="text-slate-500">
            ${item.quantity * item.price_per_unit}
          </div>
          <button className="text-sm text-slate-500 hover:text-red-700"
          onClick={async() => {
            await cartService.removeItemFromCart({itemId: item.id})
            fetchCart();
          }}>
          <i className="mr-1 text-base fa-regular fa-trash"></i>
            remove
          </button>
          </div>
        </div>
    </div>
  );
};

export default CartItem;
