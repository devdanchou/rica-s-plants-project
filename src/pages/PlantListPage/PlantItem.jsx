import { useState } from "react";
import clsx from "clsx";

const POT_COLORS = {
  stone: "bg-stone-200",
  slate: "bg-slate-300",
  sky: "bg-sky-700",
  black: "bg-gray-600",
  white: "bg-gray-50",
  amber: "bg-amber-600",
};

// review
const getRandomElement = (array) => {
  return Math.floor(Math.random() * array.length);
};

const PlantItem = (props) => {
  const { plant } = props;
  const [imageIdx, setImageIdx] = useState(() =>
    getRandomElement(plant.images)
  );
  console.log({ plant });

  return (
    <div className="mx-5 my-8">
      <img
        className="w-[280px] h-[320px] rounded-md"
        src={plant.images[imageIdx].src}
      />
      <div className="flex justify-between my-3">
        <div className="text-xl text-emerald-700 font-playfair">
          {plant.name}
        </div>
        <div className="text-lg text-emerald-600">${plant.price}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm text-slate-500">
          {plant.images[imageIdx].pot_color}
        </div>
        <div className="flex">
          {plant.images.map((image, idx) => (
            <div
              key={idx}
              className={clsx(
                "rounded-full w-5 h-5 mx-[3px] border border-slate-300 cursor-pointer",
                POT_COLORS[image.pot_color],
                imageIdx === idx && "outline outline-slate-400 outline-offset-2"
              )}
              // onMouseEnter={setImageIdx(idx)}
              onMouseEnter={() => setImageIdx(idx)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantItem;
