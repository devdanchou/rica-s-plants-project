import { useState } from "react";
import clsx from "clsx";
import { POT_COLORS } from "shared-components/util";
import * as cartService from "services/cart";

const PlantPurchaseOptions = (props) => {
  const { plant, imageIdx, setImageIdx } = props;
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="my-10">
      <div className="flex text-emerald-700">
        <i className="mr-2 text-2xl fa-solid fa-brush"></i>
        <div className="text-lg font-medium">Pot Colors</div>
      </div>
      <div className="flex my-4">
        {plant.images.map((image, idx) => (
          <div
            key={image.pot_color}
            className="flex flex-col items-center mx-2"
            onMouseEnter={() => setImageIdx(idx)}
          >
            <div
              className={clsx(
                "rounded-full w-10 h-10",
                POT_COLORS[image.pot_color],
                imageIdx === idx && "outline outline-offset-2 outline-slate-500"
              )}
            ></div>
            <div
              className={clsx(
                "mt-1",
                imageIdx === idx ? "text-slate-700" : "text-slate-400"
              )}
            >
              {image.pot_color}
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <div className="flex items-center px-3 py-4 border-2 rounded-full text-xl text-slate-500 border-slate-400">
          <button
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <div className="mx-4 text-2xl text-emerald-700">{quantity}</div>
          <button onClick={() => setQuantity(quantity + 1)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <button
          className="flex items-center justify-center flex-1 ml-2 rounded-full text-xl text-white bg-emerald-700 hover:bg-emerald-800"
          onClick={async () => {
            setIsLoading(true);
            const response = await cartService.addPlantToCart({
              quantity,
              plantId: plant.id,
              potColor: plant.images[imageIdx].pot_color,
            });
            console.log(response.status);
            setIsLoading(false);
          }}
        >
          {isLoading ? (
            <i className="mr-2 text-2xl fa-solid fa-spinner animate-spin"></i>
          ) : (
            <i className="mr-2 text-2xl fa-solid fa-cart-plus"></i>
          )}
          add to cart
        </button>
      </div>
    </div>
  );
};

export default PlantPurchaseOptions;
